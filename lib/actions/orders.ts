"use server";

import { prisma } from "@/lib/prisma";
import { Order, OrderItem, User, OrderStatus } from "@prisma/client";
import { z } from "zod";
import { ProductWithCategory } from "./products";

export type OrderWithDetails = Order & {
  items: (OrderItem & {
    product: ProductWithCategory;
  })[];
  user: User;
};

export type CustomerInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const CustomerInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
});

const OrderItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
  price: z.number().min(0),
});

const CreateOrderSchema = z.object({
  userId: z.string(),
  items: z.array(OrderItemSchema).min(1, "At least one item is required"),
  customerInfo: CustomerInfoSchema,
});

export type CreateOrderResult = {
  success: boolean;
  order?: Order;
  error?: string;
};

export async function createOrder(
  userId: string,
  items: { productId: string; quantity: number; price: number }[],
  customerInfo: CustomerInfo
): Promise<CreateOrderResult> {
  try {
    // Validate input
    const validation = CreateOrderSchema.safeParse({
      userId,
      items,
      customerInfo,
    });

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0].message,
      };
    }

    // Calculate total
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create order with items in a transaction
    const order = await prisma.$transaction(async (tx) => {
      // Create the order
      const newOrder = await tx.order.create({
        data: {
          userId,
          total,
          customerInfo: customerInfo, // JSON field
          status: "PENDING",
        },
      });

      // Create order items
      await tx.orderItem.createMany({
        data: items.map((item) => ({
          orderId: newOrder.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      // Update product stock
      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });
      }

      return newOrder;
    });

    return {
      success: true,
      order,
    };
  } catch (error) {
    console.error("Create order error:", error);
    return {
      success: false,
      error: "An error occurred while creating the order",
    };
  }
}

export async function getOrders(): Promise<OrderWithDetails[]> {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return orders;
  } catch (error) {
    console.error("Get orders error:", error);
    return [];
  }
}

export async function getUserOrders(
  userId: string
): Promise<OrderWithDetails[]> {
  try {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return orders;
  } catch (error) {
    console.error("Get user orders error:", error);
    return [];
  }
}

export async function getOrderById(
  id: string
): Promise<OrderWithDetails | null> {
  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
        user: true,
      },
    });
    return order;
  } catch (error) {
    console.error("Get order error:", error);
    return null;
  }
}

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): Promise<{ success: boolean; error?: string }> {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return { success: true };
  } catch (error) {
    console.error("Update order status error:", error);
    return {
      success: false,
      error: "An error occurred while updating the order status",
    };
  }
}
