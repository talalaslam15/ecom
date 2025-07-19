"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Validation schemas
const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required"),
});

const RegisterSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export type AuthResult = {
  success: boolean;
  user?: Omit<User, "password">;
  error?: string;
};

export async function loginUser(
  email: string,
  password: string
): Promise<AuthResult> {
  try {
    // Validate input
    const validation = LoginSchema.safeParse({ email, password });
    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0].message,
      };
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Return user without password
    const userWithoutPassword = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      success: true,
      user: userWithoutPassword,
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "An error occurred during login",
    };
  }
}

export async function registerUser(
  email: string,
  password: string,
  name: string,
  phone?: string,
  address?: string
): Promise<AuthResult> {
  try {
    // Validate input
    const validation = RegisterSchema.safeParse({
      email,
      password,
      name,
      phone,
      address,
    });

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0].message,
      };
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "User with this email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        address,
        isAdmin: email === "admin@example.com", // Make admin@example.com an admin
      },
    });

    // Return user without password
    const userWithoutPassword = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      success: true,
      user: userWithoutPassword,
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: "An error occurred during registration",
    };
  }
}

export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
}
