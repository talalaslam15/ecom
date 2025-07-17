import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Dashboard Development",
      description:
        "Custom dashboard solutions tailored to your business needs with real-time data visualization.",
      features: [
        "Real-time Analytics",
        "Custom Charts",
        "Data Export",
        "Mobile Responsive",
      ],
    },
    {
      title: "Authentication Systems",
      description:
        "Secure authentication and authorization systems with role-based access control.",
      features: [
        "Multi-factor Auth",
        "Role Management",
        "Session Security",
        "API Protection",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, accessible, and user-friendly interfaces designed for optimal user experience.",
      features: [
        "Modern Design",
        "Accessibility",
        "Cross-platform",
        "User Testing",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize your applications for speed, scalability, and better user experience.",
      features: [
        "Code Splitting",
        "Lazy Loading",
        "Cache Optimization",
        "Bundle Analysis",
      ],
    },
    {
      title: "Consulting Services",
      description:
        "Expert guidance on technology choices, architecture decisions, and best practices.",
      features: [
        "Architecture Review",
        "Code Audit",
        "Tech Stack Selection",
        "Best Practices",
      ],
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and support to keep your applications running smoothly.",
      features: [
        "24/7 Support",
        "Regular Updates",
        "Bug Fixes",
        "Security Patches",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We offer comprehensive web development services to help you build,
          deploy, and maintain modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center bg-muted rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help you build the perfect solution for
          your needs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" size="lg">
              Try Our Template
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
