"use server";

import { prisma } from "@/lib/prisma";
import { OrderWithDetails } from "./orders";

export interface OrderAnalytics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  ordersByStatus: Record<string, number>;
  revenueByMonth: Array<{ month: string; revenue: number }>;
  topProducts: Array<{
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
    revenue: number;
  }>;
  recentOrders: OrderWithDetails[];
}

export async function generateOrderAnalytics(): Promise<OrderAnalytics> {
  try {
    // Get all orders with details
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

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Orders by status
    const ordersByStatus = orders.reduce((acc, order) => {
      const status = order.status.toLowerCase();
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Revenue by month (last 6 months)
    const revenueByMonth = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleString("default", { month: "short" });
      const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
      const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      const monthRevenue = orders
        .filter((order) => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= monthStart && orderDate <= monthEnd;
        })
        .reduce((sum, order) => sum + order.total, 0);

      revenueByMonth.push({
        month: monthName,
        revenue: monthRevenue,
      });
    }

    // Top products
    const productSales = new Map<
      string,
      {
        quantity: number;
        revenue: number;
        product: {
          id: string;
          name: string;
          price: number;
        };
      }
    >();

    orders.forEach((order) => {
      order.items.forEach((item) => {
        const existing = productSales.get(item.productId);
        if (existing) {
          existing.quantity += item.quantity;
          existing.revenue += item.price * item.quantity;
        } else {
          productSales.set(item.productId, {
            quantity: item.quantity,
            revenue: item.price * item.quantity,
            product: {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
            },
          });
        }
      });
    });

    const topProducts = Array.from(productSales.values())
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);

    // Recent orders (last 10)
    const recentOrders = orders.slice(0, 10);

    return {
      totalRevenue,
      totalOrders,
      averageOrderValue,
      ordersByStatus,
      revenueByMonth,
      topProducts,
      recentOrders,
    };
  } catch (error) {
    console.error("Generate analytics error:", error);
    return {
      totalRevenue: 0,
      totalOrders: 0,
      averageOrderValue: 0,
      ordersByStatus: {},
      revenueByMonth: [],
      topProducts: [],
      recentOrders: [],
    };
  }
}

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount);
// }

// export function formatDate(date: Date | string): string {
//   const d = typeof date === "string" ? new Date(date) : date;
//   return new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   }).format(d);
// }

// export function getStatusColor(status: string): string {
//   switch (status.toLowerCase()) {
//     case "pending":
//       return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
//     case "processing":
//       return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
//     case "shipped":
//       return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
//     case "delivered":
//       return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
//     case "cancelled":
//       return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
//     default:
//       return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
//   }
// }
