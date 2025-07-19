"use client";

import Link from "next/link";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { CartSheet } from "@/components/cart-sheet";
import { Store } from "lucide-react";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <Store className="h-6 w-6" />
          E-Commerce Store
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <CartSheet />
          <DarkModeToggle />
          {user ? (
            <div className="flex items-center space-x-4">
              {user.isAdmin && (
                <Link href="/dashboard">
                  <Button variant="outline">Admin Dashboard</Button>
                </Link>
              )}
              <Link href="/dashboard">
                <span className="text-sm text-muted-foreground">
                  Hello, {user.name}
                </span>
              </Link>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
