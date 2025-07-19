"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export type CustomerWithStats = User & {
  _count: {
    orders: number;
  };
  orders: {
    id: string;
    total: number;
    createdAt: Date;
  }[];
};

export async function getCustomersWithStats(): Promise<CustomerWithStats[]> {
  try {
    const customers = await prisma.user.findMany({
      where: {
        isAdmin: false, // Exclude admins
      },

      include: {
        _count: {
          select: {
            orders: true,
          },
        },
        orders: {
          select: {
            id: true,
            total: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return customers;
  } catch (error) {
    console.error("Get customers with stats error:", error);
    return [];
  }
}

export async function getCustomerById(
  id: string
): Promise<CustomerWithStats | null> {
  try {
    const customer = await prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
        orders: {
          select: {
            id: true,
            total: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return customer;
  } catch (error) {
    console.error("Get customer error:", error);
    return null;
  }
}

export async function getCustomerStats() {
  try {
    const totalCustomers = await prisma.user.count();

    const activeCustomers = await prisma.user.count({
      where: {
        orders: {
          some: {},
        },
      },
    });

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const newCustomersThisMonth = await prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    });

    const recentCustomers = await prisma.user.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
      },
    });

    // Calculate average order value
    const orderTotals = await prisma.order.aggregate({
      _avg: {
        total: true,
      },
    });

    return {
      totalCustomers,
      activeCustomers,
      newCustomersThisMonth,
      recentCustomers,
      averageOrderValue: orderTotals._avg.total || 0,
    };
  } catch (error) {
    console.error("Get customer stats error:", error);
    return {
      totalCustomers: 0,
      activeCustomers: 0,
      newCustomersThisMonth: 0,
      recentCustomers: [],
      averageOrderValue: 0,
    };
  }
}

export async function searchCustomers(
  query: string
): Promise<CustomerWithStats[]> {
  try {
    const customers = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
        orders: {
          select: {
            id: true,
            total: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return customers;
  } catch (error) {
    console.error("Search customers error:", error);
    return [];
  }
}
