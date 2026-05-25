import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-card/30 mt-20">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="Gulza Gym" className="h-16 w-auto" />
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Tunisia's premier combat and luxury fitness club. Forging champions since day one.
        </p>
        <div className="flex gap-3 mt-5">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display uppercase tracking-wider text-sm mb-4 text-primary">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[["/activities","Activities"],["/memberships","Memberships"],["/coaches","Coaches"],["/schedule","Schedule"]].map(([to,l])=>(
            <li key={to}><Link to={to} className="hover:text-primary transition-colors">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display uppercase tracking-wider text-sm mb-4 text-primary">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary"/> Avenue Habib Bourguiba, Tunis</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary"/> +216 70 000 000</li>
          <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary"/> hello@gulzagym.com</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display uppercase tracking-wider text-sm mb-4 text-primary">Hours</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>Mon — Fri · 06:00 — 23:00</li>
          <li>Saturday · 08:00 — 22:00</li>
          <li>Sunday · 09:00 — 20:00</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} GULZA GYM. All rights reserved.</p>
        <p>Forged in Tunisia. Built for champions.</p>
      </div>
    </div>
  </footer>
);
