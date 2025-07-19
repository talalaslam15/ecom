"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "@prisma/client";
import { loginUser } from "./actions/auth";
import { toast } from "sonner";

interface AuthContextType {
  user: Omit<User, "password"> | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, "password"> | null>(null);
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

    try {
      const result = await loginUser(email, password);

      if (result.success && result.user) {
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));

        // Set auth cookie for middleware
        document.cookie = `auth-token=${result.user.id}; path=/; max-age=86400`;

        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        // Show toast for login failure
        toast.error(result.error || "Invalid email or password");
        return false;
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred during login"
      );
      setIsLoading(false);
      return false;
    }
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
