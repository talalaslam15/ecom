"use server";

import { prisma } from "@/lib/prisma";
import { Product, Category } from "@prisma/client";

export type ProductWithCategory = Product & {
  category: Category;
};

export async function getProducts(): Promise<ProductWithCategory[]> {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error("Get products error:", error);
    return [];
  }
}

export async function getProductById(
  id: string
): Promise<ProductWithCategory | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    return product;
  } catch (error) {
    console.error("Get product error:", error);
    return null;
  }
}

export async function getProductsByCategory(
  categoryId: string
): Promise<ProductWithCategory[]> {
  try {
    const products = await prisma.product.findMany({
      where: { categoryId },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error("Get products by category error:", error);
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return categories;
  } catch (error) {
    console.error("Get categories error:", error);
    return [];
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category;
  } catch (error) {
    console.error("Get category error:", error);
    return null;
  }
}

export async function searchProducts(
  query: string
): Promise<ProductWithCategory[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error("Search products error:", error);
    return [];
  }
}
