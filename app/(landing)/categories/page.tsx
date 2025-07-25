import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getCategories, getProducts } from "@/lib/actions/products";

export default async function CategoriesPage() {
  const categories = await getCategories();
  const products = await getProducts();
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    productCount: products.filter((p) => p.category.name === category.name)
      .length,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
        <p className="text-muted-foreground">
          Browse our products organized by category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesWithCounts.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.name.toLowerCase()}`}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <Badge variant="secondary">
                    {category.productCount} products
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {products
                    .filter((p) => p.category.name === category.name)
                    .slice(0, 4)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="text-sm text-muted-foreground"
                      >
                        • {product.name}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
