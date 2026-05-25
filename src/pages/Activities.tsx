import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mmaImg from "@/assets/mma.jpg";
import boxImg from "@/assets/boxing.jpg";
import bodyImg from "@/assets/bodybuilding.jpg";
import crossImg from "@/assets/crossfit.jpg";
import { Dumbbell, Flame, Heart, Shield, Sparkles, Target, Users, Utensils, Zap, ShieldHalf } from "lucide-react";

const activities = [
  { title: "Bodybuilding", desc: "Sculpt strength with pro-grade machines and free weights across two floors.", icon: Dumbbell, img: bodyImg },
  { title: "CrossFit", desc: "High-intensity, functional, communal. Push past your last limit every WOD.", icon: Zap, img: crossImg },
  { title: "MMA", desc: "Full pro cage. Striking, grappling, conditioning under championship-grade coaches.", icon: ShieldHalf, img: mmaImg },
  { title: "Boxing", desc: "Sweet science training: footwork, combos, sparring and ring sessions.", icon: Target, img: boxImg },
  { title: "Kickboxing", desc: "Devastating kicks meet sharp boxing. Build power, precision and resilience.", icon: Flame, img: mmaImg },
  { title: "Fitness", desc: "Group classes, HIIT, mobility, core. The perfect base for any goal.", icon: Sparkles, img: crossImg },
  { title: "Women Classes", desc: "Dedicated programs and women-only sessions in a powerful, supportive space.", icon: Heart, img: bodyImg },
  { title: "Cardio Zone", desc: "Premium cardio floor: treadmills, bikes, rowers, stair-climbers, sleds.", icon: Heart, img: crossImg },
  { title: "Personal Coaching", desc: "1-on-1 with elite coaches. Tailored plans, accountability, results.", icon: Shield, img: bodyImg },
  { title: "Nutrition", desc: "Science-backed meal plans and macro coaching from certified nutritionists.", icon: Utensils, img: bodyImg },
];

const Activities = () => (
  <div>
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      </div>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Programs</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-none">
            Train. Fight.<br /><span className="text-gradient-gold">Transform.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            Every discipline you need under one roof — engineered for serious athletes and everyday warriors.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container pb-32">
      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group relative overflow-hidden border border-border hover:border-primary/50 transition-all"
          >
            <div className="grid sm:grid-cols-[1fr_1.2fr]">
              <div className="relative h-48 sm:h-auto overflow-hidden">
                <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <a.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-2xl uppercase font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Button asChild variant="gold" size="xl"><Link to="/memberships">Start Training Today</Link></Button>
      </div>
    </section>
  </div>
);

export default Activities;
