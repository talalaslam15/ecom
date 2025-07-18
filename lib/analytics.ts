"use client";
import { Order, Product, OrderAnalytics } from "@/types";
import { ORDERS } from "@/lib/data";
import { OrderStatus } from "@prisma/client";

export function generateOrderAnalytics(): OrderAnalytics {
  const orders = ORDERS;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = totalRevenue / totalOrders;

  // Calculate top products
  const productSales = new Map<
    string,
    { quantity: number; revenue: number; product: Product }
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
          product: item.product,
        });
      }
    });
  });

  const topProducts = Array.from(productSales.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  // Get recent orders
  const recentOrders = orders
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 10);

  // Orders by status
  const ordersByStatus = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<Order["status"], number>);

  // Revenue by month (mock data for demo)
  const revenueByMonth = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 18000 },
    { month: "Apr", revenue: 14000 },
    { month: "May", revenue: 22000 },
    { month: "Jun", revenue: 28000 },
  ];

  return {
    totalOrders,
    totalRevenue,
    averageOrderValue,
    topProducts,
    recentOrders,
    ordersByStatus,
    revenueByMonth,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function getStatusColor(status: OrderStatus): string {
  switch (status) {
    case "PENDING":
      return "text-yellow-600 bg-yellow-100";
    case "PROCESSING":
      return "text-blue-600 bg-blue-100";
    case "SHIPPED":
      return "text-purple-600 bg-purple-100";
    case "DELIVERED":
      return "text-green-600 bg-green-100";
    case "CANCELLED":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}
