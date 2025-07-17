import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Truck } from "lucide-react";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">
              Order Confirmed!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Thank you for your purchase! Your order has been successfully
              processed.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Order #12345</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              You will receive an email confirmation shortly with order details
              and tracking information.
            </p>

            <div className="flex flex-col gap-2">
              <Link href="/products">
                <Button className="w-full">Continue Shopping</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
