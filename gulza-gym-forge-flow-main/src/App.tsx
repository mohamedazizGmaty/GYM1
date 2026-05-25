import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Memberships from "./pages/Memberships";
import Coaches from "./pages/Coaches";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Auth, { Login, Register, ForgotPassword } from "./pages/Auth";
import { MemberDashboard, AdminDashboard, CoachDashboard } from "./pages/dashboards/Dashboards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/dashboard/member" element={<DashboardLayout role="member" />}>
            <Route index element={<MemberDashboard />} />
          </Route>
          <Route path="/dashboard/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="/dashboard/coach" element={<DashboardLayout role="coach" />}>
            <Route index element={<CoachDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
