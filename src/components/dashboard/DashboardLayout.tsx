import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Calendar, CreditCard, BarChart3, Bell, Settings, LogOut, QrCode, Activity, UserCircle, ClipboardList } from "lucide-react";

const menusByRole = {
  member: [
    { to: "/dashboard/member", label: "Overview", icon: LayoutDashboard, end: true },
    { to: "/dashboard/member/card", label: "Membership Card", icon: QrCode },
    { to: "/dashboard/member/attendance", label: "Attendance", icon: Activity },
    { to: "/dashboard/member/bookings", label: "My Bookings", icon: Calendar },
    { to: "/dashboard/member/notifications", label: "Notifications", icon: Bell },
    { to: "/dashboard/member/profile", label: "Profile", icon: UserCircle },
  ],
  admin: [
    { to: "/dashboard/admin", label: "Overview", icon: LayoutDashboard, end: true },
    { to: "/dashboard/admin/members", label: "Members", icon: Users },
    { to: "/dashboard/admin/subscriptions", label: "Subscriptions", icon: CreditCard },
    { to: "/dashboard/admin/coaches", label: "Coaches", icon: UserCircle },
    { to: "/dashboard/admin/schedule", label: "Schedule", icon: Calendar },
    { to: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/dashboard/admin/notifications", label: "Notifications", icon: Bell },
  ],
  coach: [
    { to: "/dashboard/coach", label: "Overview", icon: LayoutDashboard, end: true },
    { to: "/dashboard/coach/classes", label: "Classes", icon: ClipboardList },
    { to: "/dashboard/coach/attendance", label: "Attendance", icon: Activity },
    { to: "/dashboard/coach/schedule", label: "Schedule", icon: Calendar },
    { to: "/dashboard/coach/members", label: "My Members", icon: Users },
  ],
};

export const DashboardLayout = ({ role }: { role: "member" | "admin" | "coach" }) => {
  const items = menusByRole[role];
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden md:flex w-64 flex-col border-r border-sidebar-border bg-sidebar fixed inset-y-0">
        <Link to="/" className="flex items-center h-20 px-6 border-b border-sidebar-border">
          <img src="/logo.png" alt="Gulza Gym" className="h-12 w-auto" />
        </Link>
        <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
          {role} portal
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                  isActive
                    ? "bg-gradient-gold text-primary-foreground font-semibold"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`
              }
            >
              <it.icon className="w-4 h-4" /> {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border space-y-1">
          <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <Settings className="w-4 h-4" /> Settings
          </Link>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <LogOut className="w-4 h-4" /> Sign out
          </Link>
        </div>
      </aside>
      <div className="flex-1 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};
