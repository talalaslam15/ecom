import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground text-center mb-8">
            We&apos;re passionate about creating modern, efficient, and
            beautiful web applications that help developers build amazing
            products faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide developers with high-quality, modern templates and
                tools that accelerate development while maintaining best
                practices and code quality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where developers can focus on building unique features
                rather than reinventing common patterns and boilerplate code.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Template?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">Best Practices</h3>
              <p className="text-muted-foreground">
                Built following industry best practices and modern development
                patterns.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">Type Safety</h3>
              <p className="text-muted-foreground">
                Full TypeScript support for better developer experience and
                fewer bugs.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">Performance</h3>
              <p className="text-muted-foreground">
                Optimized for speed with Next.js 15 and modern build tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
