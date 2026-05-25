import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthShell = ({ children, title, sub }: any) => (
  <div className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-background">
    <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.3),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--primary)/0.2),transparent_50%)]" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md glass p-8 md:p-10"
    >
      <Link to="/" className="flex justify-center mb-8">
        <img src="/logo.png" alt="Gulza Gym" className="h-20 w-auto" />
      </Link>
      <h1 className="font-display text-3xl uppercase font-bold text-center">{title}</h1>
      <p className="text-center text-muted-foreground text-sm mt-2">{sub}</p>
      <div className="mt-8">{children}</div>
    </motion.div>
  </div>
);

export const Login = () => (
  <AuthShell title="Welcome Back" sub="Sign in to your GULZA account">
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div><Label>Email</Label><Input type="email" required className="mt-1.5 bg-background/50" /></div>
      <div><Label>Password</Label><Input type="password" required className="mt-1.5 bg-background/50" /></div>
      <Link to="#" className="block text-xs text-primary hover:underline text-right">Forgot password?</Link>
      <Button variant="gold" size="lg" className="w-full">Sign In</Button>
    </form>
    <p className="text-center text-sm text-muted-foreground mt-6">
      New here? <Link to="/register" className="text-primary hover:underline">Create account</Link>
    </p>
  </AuthShell>
);

export const Register = () => (
  <AuthShell title="Join The Tribe" sub="Create your free GULZA account">
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <div><Label>First name</Label><Input required className="mt-1.5 bg-background/50" /></div>
        <div><Label>Last name</Label><Input required className="mt-1.5 bg-background/50" /></div>
      </div>
      <div><Label>Email</Label><Input type="email" required className="mt-1.5 bg-background/50" /></div>
      <div><Label>Password</Label><Input type="password" required minLength={8} className="mt-1.5 bg-background/50" /></div>
      <Button variant="gold" size="lg" className="w-full">Create Account</Button>
    </form>
    <p className="text-center text-sm text-muted-foreground mt-6">
      Already a member? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
    </p>
  </AuthShell>
);

export const ForgotPassword = () => (
  <AuthShell title="Reset Password" sub="We'll send you a reset link">
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div><Label>Email</Label><Input type="email" required className="mt-1.5 bg-background/50" /></div>
      <Button variant="gold" size="lg" className="w-full">Send Reset Link</Button>
    </form>
    <p className="text-center text-sm text-muted-foreground mt-6">
      <Link to="/login" className="text-primary hover:underline">Back to sign in</Link>
    </p>
  </AuthShell>
);

const Auth = () => {
  const { pathname } = useLocation();
  if (pathname === "/register") return <Register />;
  if (pathname === "/forgot-password") return <ForgotPassword />;
  return <Login />;
};

export default Auth;
