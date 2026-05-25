import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Flame, Trophy, Users, Zap, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import mmaImg from "@/assets/mma.jpg";
import bodyImg from "@/assets/bodybuilding.jpg";
import boxImg from "@/assets/boxing.jpg";
import crossImg from "@/assets/crossfit.jpg";
import coach1 from "@/assets/coach1.jpg";
import coach2 from "@/assets/coach2.jpg";
import coach3 from "@/assets/coach3.jpg";

const stats = [
  { value: "2.5K+", label: "Active Members" },
  { value: "40+", label: "Weekly Classes" },
  { value: "25", label: "Elite Coaches" },
  { value: "12", label: "Championships Won" },
];

const services = [
  { title: "MMA", img: mmaImg, desc: "Mixed martial arts in our professional cage." },
  { title: "Bodybuilding", img: bodyImg, desc: "State-of-the-art equipment to sculpt strength." },
  { title: "Boxing", img: boxImg, desc: "Hit harder. Move faster. Train like a pro." },
  { title: "CrossFit", img: crossImg, desc: "High-intensity functional training in a tribe." },
];

const plans = [
  { name: "Essential", price: "59", period: "month", features: ["Gym access 24/7", "Open floor training", "Locker access"] },
  { name: "Combat", price: "129", period: "month", features: ["Everything in Essential", "All combat classes", "MMA cage access", "Group sessions"], featured: true },
  { name: "Elite", price: "229", period: "month", features: ["Everything in Combat", "1-on-1 coaching", "Nutrition plan", "Recovery & spa"] },
];

const coaches = [
  { name: "Yassine Khelifi", role: "Head MMA Coach", img: coach3 },
  { name: "Layla Ben Ali", role: "Fitness & Women's Lead", img: coach2 },
  { name: "Marco Ruiz", role: "Strength & Conditioning", img: coach1 },
];

const testimonials = [
  { quote: "GULZA changed my body and my mindset. The coaches push you to greatness.", name: "Ahmed K.", role: "Member · 2 years" },
  { quote: "Best combat facility in Tunisia. The MMA program is world-class.", name: "Sarah M.", role: "Amateur Fighter" },
  { quote: "Premium atmosphere, serious training. Worth every dinar.", name: "Karim B.", role: "Business Owner" },
];

const Section = ({ children, className = "" }: any) => (
  <section className={`relative py-24 md:py-32 ${className}`}>{children}</section>
);

const SectionTitle = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-sm mb-4">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse" />
      <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{eyebrow}</span>
    </div>
    <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">{title}</h2>
    {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
  </motion.div>
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Boxer training" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 rounded-sm mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Premium Combat & Fitness Club</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tight">
              Train Like
              <br />
              A <span className="text-gradient-gold">Champion</span>.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              Tunisia's most advanced combat sports and luxury fitness club. Where champions are forged in iron, sweat and discipline.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/memberships">Start Your Journey <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outlineGold" size="xl">
                <Link to="/activities"><Play className="mr-1" /> Explore Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60 flex flex-col items-center gap-2"
        >
          Scroll
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-6">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display text-3xl uppercase tracking-widest">
              {["Discipline", "Strength", "Honor", "Sweat", "Fire", "Glory", "Hustle"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  <span className="text-foreground/30">{w}</span>
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <Section className="!py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section>
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img src={mmaImg} alt="Inside GULZA" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-primary-foreground px-8 py-6 hidden md:block">
              <div className="font-display text-4xl font-bold">12+</div>
              <div className="text-xs uppercase tracking-widest">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">About GULZA</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              More Than A Gym.<br />
              A <span className="text-gradient-gold">Way Of Life</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              GULZA isn't where you go to work out. It's where you go to become something more.
              Built by fighters for fighters, powered by champions who refuse mediocrity.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Flame, t: "Combat Sports", d: "Full pro-grade MMA cage & ring." },
                { icon: Trophy, t: "Elite Coaching", d: "National champion trainers." },
                { icon: Users, t: "Strong Community", d: "Train with warriors, not strangers." },
                { icon: Zap, t: "24/7 Access", d: "Train when fire strikes." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="glass p-5">
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-card/30">
        <div className="container">
          <SectionTitle eyebrow="Our Programs" title="Forge Your Discipline" sub="From iron to combat — every program engineered for results." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-3xl font-bold uppercase">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{s.desc}</p>
                  <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-wider font-semibold">
                    Discover <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute inset-0 ring-0 ring-primary group-hover:ring-2 transition-all" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outlineGold" size="lg"><Link to="/activities">View All Programs</Link></Button>
          </div>
        </div>
      </Section>

      {/* MEMBERSHIPS */}
      <Section>
        <div className="container">
          <SectionTitle eyebrow="Memberships" title="Choose Your Arena" sub="No contracts. No excuses. Just results." />
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 ${p.featured ? "glass-gold shadow-gold scale-105" : "glass"}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest px-4 py-1 font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl uppercase font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">TND</span>
                  <span className="font-display text-6xl font-bold text-gradient-gold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <Button asChild variant={p.featured ? "gold" : "outlineGold"} className="w-full mt-8" size="lg">
                  <Link to="/memberships">Join {p.name}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* COACHES */}
      <Section className="bg-card/30">
        <div className="container">
          <SectionTitle eyebrow="The Team" title="Trained By Champions" />
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-primary">{c.role}</div>
                  <div className="font-display text-2xl font-bold uppercase mt-1">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="container">
          <SectionTitle eyebrow="Real Stories" title="Voices Of The Tribe" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-primary/30"
          >
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
            <div className="relative p-12 md:p-20 max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight">
                Ready To <span className="text-gradient-gold">Burn It Down</span>?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                First session free. No commitment. Just bring fire.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="gold" size="xl"><Link to="/memberships">Claim Free Trial</Link></Button>
                <Button asChild variant="ghost" size="xl"><Link to="/contact">Talk To Us</Link></Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
