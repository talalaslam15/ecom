"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/types";
import { USERS } from "@/lib/data";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user exists in mock data
    const existingUser = USERS.find((u) => u.email === email);

    if (existingUser && password) {
      setUser(existingUser);
      localStorage.setItem("user", JSON.stringify(existingUser));

      // Set auth cookie for middleware
      document.cookie = `auth-token=${existingUser.id}; path=/; max-age=86400`;

      setIsLoading(false);
      return true;
    }

    // If user doesn't exist, create a new one (for demo purposes)
    if (email && password) {
      const userData: User = {
        id: Date.now().toString(),
        email,
        name: email.split("@")[0],
        isAdmin: email === "admin@example.com", // Make admin@example.com an admin
        createdAt: new Date(),
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      // Set auth cookie for middleware
      document.cookie = `auth-token=${userData.id}; path=/; max-age=86400`;

      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");

    // Remove auth cookie
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
