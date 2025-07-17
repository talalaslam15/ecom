import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users as UsersIcon,
  UserPlus,
  UserCheck,
  MoreHorizontal,
  Mail,
  Phone,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    avatar: "/avatars/01.png",
    lastLogin: "2 hours ago",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "active",
    avatar: "/avatars/02.png",
    lastLogin: "1 day ago",
    phone: "+1 (555) 234-5678",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Viewer",
    status: "inactive",
    avatar: "/avatars/03.png",
    lastLogin: "1 week ago",
    phone: "+1 (555) 345-6789",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Editor",
    status: "active",
    avatar: "/avatars/04.png",
    lastLogin: "3 hours ago",
    phone: "+1 (555) 456-7890",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    role: "Viewer",
    status: "pending",
    avatar: "/avatars/05.png",
    lastLogin: "Never",
    phone: "+1 (555) 567-8901",
  },
];

const userStats = [
  {
    title: "Total Users",
    value: "2,350",
    change: "+12.5%",
    icon: UsersIcon,
  },
  {
    title: "Active Users",
    value: "1,890",
    change: "+8.2%",
    icon: UserCheck,
  },
  {
    title: "New Signups",
    value: "156",
    change: "+23.1%",
    icon: UserPlus,
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">
            Manage your users and their permissions.
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {userStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            A list of all users in your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="mr-1 h-3 w-3" />
                        {user.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-1 h-3 w-3" />
                        {user.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge
                      variant={
                        user.status === "active"
                          ? "default"
                          : user.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {user.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      {user.role}
                    </p>
                  </div>

                  <div className="text-right text-sm text-muted-foreground">
                    <p>Last login:</p>
                    <p>{user.lastLogin}</p>
                  </div>

                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
