import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create categories
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and electronic devices",
      image: "https://placehold.co/600x400",
    },
    {
      id: "clothing",
      name: "Clothing",
      description: "Fashion and apparel for all seasons",
      image: "https://placehold.co/600x400",
    },
    {
      id: "books",
      name: "Books",
      description: "Educational and entertainment books",
      image: "https://placehold.co/600x400",
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      description: "Everything for your home and garden",
      image: "https://placehold.co/600x400",
    },
    {
      id: "sports",
      name: "Sports",
      description: "Sports equipment and accessories",
      image: "https://placehold.co/600x400",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  console.log("✅ Categories created");

  // Create products
  const products = [
    {
      id: "wireless-headphones",
      name: "Wireless Headphones",
      description:
        "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
      price: 299.99,
      image: "https://placehold.co/600x400",
      categoryId: "electronics",
      stock: 50,
    },
    {
      id: "smart-watch",
      name: "Smart Watch",
      description:
        "Feature-rich smartwatch with health tracking, GPS, and 7-day battery life. Compatible with iOS and Android.",
      price: 399.99,
      image: "https://placehold.co/600x400",
      categoryId: "electronics",
      stock: 30,
    },
    {
      id: "laptop-backpack",
      name: "Laptop Backpack",
      description:
        "Durable laptop backpack with multiple compartments and anti-theft features. Fits laptops up to 15.6 inches.",
      price: 89.99,
      image: "https://placehold.co/600x400",
      categoryId: "electronics",
      stock: 100,
    },
    {
      id: "casual-tshirt",
      name: "Casual T-Shirt",
      description:
        "Comfortable cotton t-shirt in various colors. Perfect for everyday wear with a relaxed fit.",
      price: 24.99,
      image: "https://placehold.co/600x400",
      categoryId: "clothing",
      stock: 200,
    },
    {
      id: "denim-jeans",
      name: "Denim Jeans",
      description:
        "Classic denim jeans with a modern fit. Made from high-quality denim fabric with stretch for comfort.",
      price: 79.99,
      image: "https://placehold.co/600x400",
      categoryId: "clothing",
      stock: 75,
    },
    {
      id: "programming-book",
      name: "Programming Book",
      description:
        "Comprehensive guide to modern web development. Covers React, Node.js, and best practices.",
      price: 49.99,
      image: "https://placehold.co/600x400",
      categoryId: "books",
      stock: 40,
    },
    {
      id: "coffee-maker",
      name: "Coffee Maker",
      description:
        "Automatic coffee maker with programmable timer and thermal carafe. Brews perfect coffee every time.",
      price: 149.99,
      image: "https://placehold.co/600x400",
      categoryId: "home-garden",
      stock: 25,
    },
    {
      id: "yoga-mat",
      name: "Yoga Mat",
      description:
        "Premium yoga mat with excellent grip and cushioning. Perfect for all types of yoga and fitness exercises.",
      price: 39.99,
      image: "https://placehold.co/600x400",
      categoryId: "sports",
      stock: 80,
    },
    {
      id: "bluetooth-speaker",
      name: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor activities.",
      price: 79.99,
      image: "https://placehold.co/600x400",
      categoryId: "electronics",
      stock: 60,
    },
    {
      id: "winter-jacket",
      name: "Winter Jacket",
      description:
        "Warm winter jacket with waterproof exterior and insulated lining. Available in multiple sizes and colors.",
      price: 129.99,
      image: "https://placehold.co/600x400",
      categoryId: "clothing",
      stock: 45,
    },
    {
      id: "desk-lamp",
      name: "Desk Lamp",
      description:
        "Adjustable LED desk lamp with multiple brightness levels and color temperatures. Perfect for work and study.",
      price: 59.99,
      image: "https://placehold.co/600x400",
      categoryId: "home-garden",
      stock: 70,
    },
    {
      id: "running-shoes",
      name: "Running Shoes",
      description:
        "Lightweight running shoes with advanced cushioning technology. Designed for comfort and performance.",
      price: 119.99,
      image: "https://placehold.co/600x400",
      categoryId: "sports",
      stock: 90,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: product,
    });
  }

  console.log("✅ Products created");

  // Create users
  const hashedPassword = await bcrypt.hash("password123", 12);

  const users = [
    {
      id: "admin-user",
      email: "admin@example.com",
      name: "Admin User",
      phone: "+1234567890",
      address: "123 Admin St, City, State 12345",
      password: hashedPassword,
      isAdmin: true,
    },
    {
      id: "john-doe",
      email: "john@example.com",
      name: "John Doe",
      phone: "+1234567890",
      address: "123 Main St, City, State 12345",
      password: hashedPassword,
      isAdmin: false,
    },
    {
      id: "jane-smith",
      email: "jane@example.com",
      name: "Jane Smith",
      phone: "+1234567891",
      address: "456 Oak Ave, City, State 12346",
      password: hashedPassword,
      isAdmin: false,
    },
    {
      id: "bob-johnson",
      email: "bob@example.com",
      name: "Bob Johnson",
      phone: "+1234567892",
      address: "789 Pine St, City, State 12347",
      password: hashedPassword,
      isAdmin: false,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }

  console.log("✅ Users created");

  // Create sample orders
  const sampleOrders = [
    {
      id: "order-1",
      userId: "john-doe",
      total: 699.98,
      status: "DELIVERED",
      customerInfo: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        address: "123 Main St, City, State 12345",
      },
      items: [
        { productId: "wireless-headphones", quantity: 1, price: 299.99 },
        { productId: "smart-watch", quantity: 1, price: 399.99 },
      ],
    },
    {
      id: "order-2",
      userId: "jane-smith",
      total: 74.97,
      status: "SHIPPED",
      customerInfo: {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1234567891",
        address: "456 Oak Ave, City, State 12346",
      },
      items: [{ productId: "casual-tshirt", quantity: 3, price: 24.99 }],
    },
    {
      id: "order-3",
      userId: "bob-johnson",
      total: 209.98,
      status: "PROCESSING",
      customerInfo: {
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "+1234567892",
        address: "789 Pine St, City, State 12347",
      },
      items: [
        { productId: "coffee-maker", quantity: 1, price: 149.99 },
        { productId: "desk-lamp", quantity: 1, price: 59.99 },
      ],
    },
    {
      id: "order-4",
      userId: "john-doe",
      total: 119.99,
      status: "PENDING",
      customerInfo: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        address: "123 Main St, City, State 12345",
      },
      items: [{ productId: "running-shoes", quantity: 1, price: 119.99 }],
    },
  ];

  for (const orderData of sampleOrders) {
    // Create order
    const order = await prisma.order.upsert({
      where: { id: orderData.id },
      update: {},
      create: {
        id: orderData.id,
        userId: orderData.userId,
        total: orderData.total,
        status: orderData.status as
          | "PENDING"
          | "PROCESSING"
          | "SHIPPED"
          | "DELIVERED"
          | "CANCELLED",
        customerInfo: orderData.customerInfo,
      },
    });

    // Create order items
    for (const item of orderData.items) {
      await prisma.orderItem.upsert({
        where: { id: `${orderData.id}-${item.productId}` },
        update: {},
        create: {
          id: `${orderData.id}-${item.productId}`,
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        },
      });
    }
  }

  console.log("✅ Sample orders created");
  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
