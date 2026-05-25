import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import coach1 from "@/assets/coach1.jpg";
import coach2 from "@/assets/coach2.jpg";
import coach3 from "@/assets/coach3.jpg";

const coaches = [
  { name: "Yassine Khelifi", role: "Head MMA Coach", exp: "15 years · Pro fighter, multiple national titles.", spec: ["MMA", "BJJ", "Wrestling"], img: coach3 },
  { name: "Layla Ben Ali", role: "Fitness & Women's Lead", exp: "10 years · NASM Elite, women's empowerment specialist.", spec: ["Fitness", "HIIT", "Mobility"], img: coach2 },
  { name: "Marco Ruiz", role: "Strength & Conditioning", exp: "12 years · S&C coach for national athletes.", spec: ["Powerlifting", "Hypertrophy", "Athletic Perf."], img: coach1 },
  { name: "Hamza Trabelsi", role: "Boxing Coach", exp: "18 years · Former amateur champion, master technician.", spec: ["Boxing", "Pad Work", "Sparring"], img: coach3 },
  { name: "Sana Mejri", role: "CrossFit Lead", exp: "8 years · CF-L3, 4× regional competitor.", spec: ["CrossFit", "Olympic Lifting", "Endurance"], img: coach2 },
  { name: "Karim Dridi", role: "Kickboxing Coach", exp: "14 years · K1 veteran, championship-grade striker.", spec: ["Kickboxing", "Muay Thai", "Cardio"], img: coach1 },
];

const Coaches = () => (
  <div>
    <section className="pt-40 pb-12">
      <div className="container">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">The Team</span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-none max-w-3xl">
          Coaches Who <span className="text-gradient-gold">Build Champions</span>.
        </h1>
      </div>
    </section>

    <section className="container pb-32">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden border border-border"
          >
            <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{c.role}</div>
              <div className="font-display text-2xl font-bold uppercase mt-1">{c.name}</div>
              <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-24">
                {c.exp}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {c.spec.map((s) => (
                  <span key={s} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-primary/40 text-primary">{s}</span>
                ))}
              </div>
            </div>
            <a href="#" className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
              <Instagram className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Coaches;
