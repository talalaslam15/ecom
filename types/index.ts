import { OrderWithDetails } from "@/lib/actions/orders";
import { ProductWithCategory } from "@/lib/actions/products";
import { OrderStatus } from "@prisma/client";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product: ProductWithCategory;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  isAdmin: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: ProductWithCategory, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

export interface OrderAnalytics {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  topProducts: {
    product: ProductWithCategory;
    quantity: number;
    revenue: number;
  }[];
  recentOrders: OrderWithDetails[];
  ordersByStatus: Record<Order["status"], number>;
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
}
