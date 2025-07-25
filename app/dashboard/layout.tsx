import { RouteGuard } from "@/components/route-guard";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard requireAuth={true} requireAdmin={true}>
      <div className="flex h-screen">
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>
        <main className="flex-1 lg:pl-64">
          <div className="h-full overflow-auto">
            <div className="container mx-auto p-6">
              <div className="lg:hidden mb-6">
                <DashboardSidebar />
              </div>
              {children}
            </div>
          </div>
        </main>
      </div>
    </RouteGuard>
  );
}
