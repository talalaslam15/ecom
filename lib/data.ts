import { Product, Category, Order, User } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
    image: "https://placehold.co/600x400",
  },
  {
    id: "2",
    name: "Clothing",
    description: "Fashion and apparel for all seasons",
    image: "https://placehold.co/600x400",
  },
  {
    id: "3",
    name: "Books",
    description: "Educational and entertainment books",
    image: "https://placehold.co/600x400",
  },
  {
    id: "4",
    name: "Home & Garden",
    description: "Everything for your home and garden",
    image: "https://placehold.co/600x400",
  },
  {
    id: "5",
    name: "Sports",
    description: "Sports equipment and accessories",
    image: "https://placehold.co/600x400",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 299.99,
    image: "https://placehold.co/600x400",
    category: "Electronics",
    stock: 50,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Smart Watch",
    description:
      "Feature-rich smartwatch with health tracking, GPS, and 7-day battery life. Compatible with iOS and Android.",
    price: 399.99,
    image: "https://placehold.co/600x400",
    category: "Electronics",
    stock: 30,
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description:
      "Durable laptop backpack with multiple compartments and anti-theft features. Fits laptops up to 15.6 inches.",
    price: 89.99,
    image: "https://placehold.co/600x400",
    category: "Electronics",
    stock: 100,
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: "4",
    name: "Casual T-Shirt",
    description:
      "Comfortable cotton t-shirt in various colors. Perfect for everyday wear with a relaxed fit.",
    price: 24.99,
    image: "https://placehold.co/600x400",
    category: "Clothing",
    stock: 200,
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: "5",
    name: "Denim Jeans",
    description:
      "Classic denim jeans with a modern fit. Made from high-quality denim fabric with stretch for comfort.",
    price: 79.99,
    image: "https://placehold.co/600x400",
    category: "Clothing",
    stock: 75,
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
  },
  {
    id: "6",
    name: "Programming Book",
    description:
      "Comprehensive guide to modern web development. Covers React, Node.js, and best practices.",
    price: 49.99,
    image: "https://placehold.co/600x400",
    category: "Books",
    stock: 40,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "7",
    name: "Coffee Maker",
    description:
      "Automatic coffee maker with programmable timer and thermal carafe. Brews perfect coffee every time.",
    price: 149.99,
    image: "https://placehold.co/600x400.jpg",
    category: "Home & Garden",
    stock: 25,
    createdAt: new Date("2024-01-21"),
    updatedAt: new Date("2024-01-21"),
  },
  {
    id: "8",
    name: "Yoga Mat",
    description:
      "Premium yoga mat with excellent grip and cushioning. Perfect for all types of yoga and fitness exercises.",
    price: 39.99,
    image: "https://placehold.co/600x400.jpg",
    category: "Sports",
    stock: 80,
    createdAt: new Date("2024-01-22"),
    updatedAt: new Date("2024-01-22"),
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor activities.",
    price: 79.99,
    image: "https://placehold.co/600x400",
    category: "Electronics",
    stock: 60,
    createdAt: new Date("2024-01-23"),
    updatedAt: new Date("2024-01-23"),
  },
  {
    id: "10",
    name: "Winter Jacket",
    description:
      "Warm winter jacket with waterproof exterior and insulated lining. Available in multiple sizes and colors.",
    price: 129.99,
    image: "https://placehold.co/600x400",
    category: "Clothing",
    stock: 45,
    createdAt: new Date("2024-01-24"),
    updatedAt: new Date("2024-01-24"),
  },
  {
    id: "11",
    name: "Desk Lamp",
    description:
      "Adjustable LED desk lamp with multiple brightness levels and color temperatures. Perfect for work and study.",
    price: 59.99,
    image: "https://placehold.co/600x400.jpg",
    category: "Home & Garden",
    stock: 70,
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-25"),
  },
  {
    id: "12",
    name: "Running Shoes",
    description:
      "Lightweight running shoes with advanced cushioning technology. Designed for comfort and performance.",
    price: 119.99,
    image: "https://placehold.co/600x400.jpg",
    category: "Sports",
    stock: 90,
    createdAt: new Date("2024-01-26"),
    updatedAt: new Date("2024-01-26"),
  },
];

// Mock orders data
export const ORDERS: Order[] = [
  {
    id: "order-1",
    userId: "1",
    items: [
      {
        id: "item-1",
        productId: "1",
        quantity: 1,
        price: 299.99,
        product: PRODUCTS[0],
      },
      {
        id: "item-2",
        productId: "2",
        quantity: 1,
        price: 399.99,
        product: PRODUCTS[1],
      },
    ],
    total: 699.98,
    status: "DELIVERED",
    customerInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      address: "123 Main St, City, State 12345",
    },
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "order-2",
    userId: "2",
    items: [
      {
        id: "item-3",
        productId: "4",
        quantity: 3,
        price: 24.99,
        product: PRODUCTS[3],
      },
    ],
    total: 74.97,
    status: "SHIPPED",
    customerInfo: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      address: "456 Oak Ave, City, State 12346",
    },
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-22"),
  },
  {
    id: "order-3",
    userId: "3",
    items: [
      {
        id: "item-4",
        productId: "7",
        quantity: 1,
        price: 149.99,
        product: PRODUCTS[6],
      },
      {
        id: "item-5",
        productId: "11",
        quantity: 1,
        price: 59.99,
        product: PRODUCTS[10],
      },
    ],
    total: 209.98,
    status: "PROCESSING",
    customerInfo: {
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1234567892",
      address: "789 Pine St, City, State 12347",
    },
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-26"),
  },
  {
    id: "order-4",
    userId: "1",
    items: [
      {
        id: "item-6",
        productId: "12",
        quantity: 1,
        price: 119.99,
        product: PRODUCTS[11],
      },
    ],
    total: 119.99,
    status: "PENDING",
    customerInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      address: "123 Main St, City, State 12345",
    },
    createdAt: new Date("2024-01-27"),
    updatedAt: new Date("2024-01-27"),
  },
];

// Mock users data
export const USERS: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    name: "Admin User",
    phone: "+1234567890",
    address: "123 Admin St, City, State 12345",
    isAdmin: true,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    email: "john@example.com",
    name: "John Doe",
    phone: "+1234567890",
    address: "123 Main St, City, State 12345",
    isAdmin: false,
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    email: "jane@example.com",
    name: "Jane Smith",
    phone: "+1234567891",
    address: "456 Oak Ave, City, State 12346",
    isAdmin: false,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "4",
    email: "bob@example.com",
    name: "Bob Johnson",
    phone: "+1234567892",
    address: "789 Pine St, City, State 12347",
    isAdmin: false,
    createdAt: new Date("2024-01-15"),
  },
];
