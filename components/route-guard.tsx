"use client";

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export function RouteGuard({
  children,
  requireAuth = false,
  requireAdmin = false,
  redirectTo,
}: RouteGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    // Check if user is authenticated when auth is required
    if (requireAuth && !user) {
      router.push(redirectTo || "/auth/login");
      return;
    }

    // Check if user is admin when admin access is required
    if (requireAdmin && (!user || !user.isAdmin)) {
      router.push("/user-dashboard"); // Redirect non-admins to user dashboard
      return;
    }

    // Redirect authenticated users if specified
    if (!requireAuth && user && redirectTo) {
      router.push(redirectTo);
      return;
    }
  }, [user, isLoading, requireAuth, requireAdmin, redirectTo, router]);

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If auth is required but user is not authenticated, don't render children
  if (requireAuth && !user) {
    return null;
  }

  // If admin is required but user is not admin, don't render children
  if (requireAdmin && (!user || !user.isAdmin)) {
    return null;
  }

  // If auth is not required but user is authenticated and should be redirected
  if (!requireAuth && user && redirectTo) {
    return null;
  }

  return <>{children}</>;
}
