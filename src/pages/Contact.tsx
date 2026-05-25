import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent. We'll get back to you within 24h.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div>
      <section className="pt-40 pb-12">
        <div className="container">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-none">
            Get In <span className="text-gradient-gold">Touch</span>.
          </h1>
        </div>
      </section>

      <section className="container pb-32 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Visit", d: "Avenue Habib Bourguiba, Tunis, Tunisia" },
              { icon: Phone, t: "Call", d: "+216 70 000 000" },
              { icon: Mail, t: "Email", d: "hello@gulzagym.com" },
              { icon: Clock, t: "Open", d: "Mon-Fri 06:00–23:00 · Sat 08:00–22:00 · Sun 09:00–20:00" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass p-5 flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-gradient-gold flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">{t}</div>
                  <div className="mt-1 font-medium">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 aspect-video border border-border bg-card/50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="text-center relative">
              <MapPin className="w-10 h-10 text-primary mx-auto" />
              <div className="mt-2 font-display text-xl uppercase">Find Us</div>
              <div className="text-xs text-muted-foreground">Map placeholder</div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 space-y-5 h-fit"
        >
          <h2 className="font-display text-2xl uppercase font-bold">Send a Message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input required placeholder="Your name" maxLength={100} className="bg-background/50" />
            <Input required type="email" placeholder="Email" maxLength={255} className="bg-background/50" />
          </div>
          <Input placeholder="Subject" maxLength={150} className="bg-background/50" />
          <Textarea required placeholder="Tell us how we can help…" rows={6} maxLength={1000} className="bg-background/50" />
          <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending…" : <>Send Message <Send className="ml-1 w-4 h-4" /></>}
          </Button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
