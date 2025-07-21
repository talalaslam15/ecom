import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, RefreshCw, Users, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About EcomStore</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground text-center mb-8">
            Your trusted online destination for quality products at unbeatable
            prices. We&apos;re committed to providing an exceptional shopping
            experience with a curated selection of products you&apos;ll love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To make quality products accessible to everyone while providing
                outstanding customer service and building lasting relationships
                with our community of shoppers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the most trusted e-commerce platform where customers
                find exactly what they need, backed by reliable service and
                competitive pricing.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Fast & Free Shipping
              </h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $50 with fast delivery nationwide.
                Get your items when you need them.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Secure Shopping</h3>
              <p className="text-muted-foreground">
                Your personal and payment information is protected with
                industry-standard security measures.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Easy Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return any item within 30 days for a full refund.
                No questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold">10,000+</span>
              </div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold">5,000+</span>
              </div>
              <p className="text-muted-foreground">Products Available</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold">99%</span>
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
