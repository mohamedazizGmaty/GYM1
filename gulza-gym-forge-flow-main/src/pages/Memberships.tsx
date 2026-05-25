import { motion } from "framer-motion";
import { Check, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Cycle = "monthly" | "quarterly" | "yearly";

const plansByCycle: Record<Cycle, { name: string; price: number; tag?: string; features: string[]; featured?: boolean; icon: any }[]> = {
  monthly: [
    { name: "Essential", price: 59, icon: Zap, features: ["24/7 gym access", "Open floor training", "Locker access", "Free WiFi"] },
    { name: "Combat", price: 129, icon: Crown, featured: true, features: ["All Essential perks", "All combat classes", "MMA cage access", "Group sessions", "Guest passes"] },
    { name: "Elite", price: 229, icon: Crown, features: ["All Combat perks", "1-on-1 coaching (4/mo)", "Nutrition plan", "Recovery & spa", "Priority booking"] },
  ],
  quarterly: [
    { name: "Essential", price: 159, icon: Zap, features: ["24/7 gym access", "Open floor training", "Locker access"] },
    { name: "Combat", price: 349, icon: Crown, featured: true, features: ["All combat classes", "MMA cage access", "Group sessions"] },
    { name: "Elite", price: 619, icon: Crown, features: ["1-on-1 coaching (12)", "Nutrition plan", "Recovery & spa"] },
  ],
  yearly: [
    { name: "Essential", price: 549, icon: Zap, features: ["24/7 gym access", "Open floor training", "Save 22%"] },
    { name: "Combat", price: 1199, icon: Crown, featured: true, features: ["All combat classes", "MMA cage access", "Save 23%"] },
    { name: "Elite", price: 2099, icon: Crown, features: ["Full Elite perks", "Priority booking", "Save 24%"] },
  ],
};

const Memberships = () => {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const plans = plansByCycle[cycle];

  return (
    <div>
      <section className="pt-40 pb-12">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Memberships</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-none">
            Pick Your <span className="text-gradient-gold">Arena</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            No contracts. Cancel anytime. Save more with longer commitments.
          </p>

          <div className="inline-flex mt-10 p-1 border border-border rounded-sm bg-card">
            {(["monthly","quarterly","yearly"] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                  cycle === c ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-32">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name + cycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative p-8 ${p.featured ? "glass-gold shadow-gold md:-mt-4 md:mb-4" : "glass"}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest px-4 py-1 font-bold">
                  Most Popular
                </div>
              )}
              <p.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-2xl uppercase font-bold">{p.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">TND</span>
                <span className="font-display text-6xl font-bold text-gradient-gold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/{cycle === "monthly" ? "mo" : cycle === "quarterly" ? "3mo" : "yr"}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}</li>
                ))}
              </ul>
              <Button variant={p.featured ? "gold" : "outlineGold"} className="w-full mt-8" size="lg">
                Join {p.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h2 className="font-display text-3xl md:text-4xl uppercase font-bold">Need something custom?</h2>
          <p className="text-muted-foreground mt-3">Corporate packages, family plans, athlete sponsorships — we build memberships for serious people.</p>
          <Button variant="outlineGold" className="mt-6" size="lg">Contact Sales</Button>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
