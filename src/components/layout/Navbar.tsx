import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/memberships", label: "Memberships" },
  { to: "/coaches", label: "Coaches" },
  { to: "/schedule", label: "Schedule" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Gulza Gym" className="h-16 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild variant="gold" size="sm">
            <Link to="/memberships">Join Now</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container py-6 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `py-3 px-2 text-base uppercase tracking-wide font-medium ${isActive ? "text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex gap-3 mt-4">
                <Button asChild variant="outline" className="flex-1"><Link to="/login">Sign In</Link></Button>
                <Button asChild variant="gold" className="flex-1"><Link to="/memberships">Join</Link></Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
