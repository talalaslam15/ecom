"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { formatCurrency } from "@/lib/analytics";
import { getUserOrders, type OrderWithDetails } from "@/lib/actions/orders";
import dayjs from "dayjs";

export default function UserDashboardPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("order page loaded", orders);

  useEffect(() => {
    const loadUserOrders = async () => {
      if (!user?.id) return;

      try {
        const userOrders = await getUserOrders(user.id);
        setOrders(userOrders);
      } catch (error) {
        console.error("Failed to load user orders:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserOrders();
  }, [user?.id]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="secondary">Pending</Badge>;
      case "PROCESSING":
        return <Badge variant="default">Processing</Badge>;
      case "SHIPPED":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Shipped</Badge>;
      case "DELIVERED":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>
        );
      case "CANCELLED":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Calculate stats
  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(
    (order) => order.status === "PENDING" || order.status === "PROCESSING"
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  ).length;

  if (loading) {
    return <div className="p-6">Loading your orders...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Orders</h2>
        <p className="text-muted-foreground">
          Welcome back, {user?.name}! Here&apos;s an overview of your orders.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalSpent)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Orders
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{deliveredOrders}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium">Order #{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {dayjs(order.createdAt).format("MMM D, YYYY")} •{" "}
                      {order.items.length} items
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.items[0]?.product.name}
                      {order.items.length > 1 &&
                        ` +${order.items.length - 1} more`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {getStatusBadge(order.status)}
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(order.total)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Member Since</p>
              <p className="text-sm text-muted-foreground">
                {user?.createdAt
                  ? dayjs(user.createdAt).format("MMM D, YYYY")
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">
                {user?.phone || "Not provided"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
