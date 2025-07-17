import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Dashboard Template
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A modern, feature-rich Next.js dashboard template built with
          TypeScript, Tailwind CSS v4, and shadcn/ui components.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/register">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>
                Built with Next.js 15, TypeScript, and Tailwind CSS v4
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leverage the latest technologies for a fast, type-safe, and
                maintainable codebase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Beautiful UI</CardTitle>
              <CardDescription>
                Pre-built components with shadcn/ui and Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accessible, customizable, and beautiful components out of the
                box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Built-in authentication with route protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure authentication system with protected routes and
                middleware.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of developers building amazing dashboards.
        </p>
        <Link href="/auth/register">
          <Button size="lg">Start Building Today</Button>
        </Link>
      </section>
    </div>
  );
}
