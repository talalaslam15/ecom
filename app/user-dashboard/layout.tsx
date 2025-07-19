import { RouteGuard } from "@/components/route-guard";
import { UserSidebar } from "@/components/user-sidebar";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard requireAuth={true}>
      <div className="flex h-screen">
        <div className="hidden lg:block">
          <UserSidebar />
        </div>
        <main className="flex-1 lg:pl-64">
          <div className="h-full overflow-auto">
            <div className="container mx-auto p-6">
              <div className="lg:hidden mb-6">
                <UserSidebar />
              </div>
              {children}
            </div>
          </div>
        </main>
      </div>
    </RouteGuard>
  );
}
