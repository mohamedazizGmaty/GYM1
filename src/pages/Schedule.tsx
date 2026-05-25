import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots = [
  { time: "06:30", classes: ["Bodybuilding", "Cardio HIIT", "Boxing", "CrossFit", "Bodybuilding", "Open Gym", "Recovery"] },
  { time: "09:00", classes: ["Women Fit", "MMA Fund.", "Kickboxing", "CrossFit", "Women Fit", "MMA Open", "Yoga"] },
  { time: "12:00", classes: ["CrossFit", "Boxing", "Bodybuilding", "Boxing", "MMA Open", "CrossFit", "Closed"] },
  { time: "17:30", classes: ["MMA Pro", "Kickboxing", "MMA Pro", "Boxing", "MMA Pro", "Open Sparring", "Closed"] },
  { time: "19:30", classes: ["Boxing", "CrossFit", "Boxing", "Kickboxing", "Combat Mix", "Cardio Box", "Closed"] },
  { time: "21:00", classes: ["Open Gym", "Open Gym", "Open Gym", "Open Gym", "Open Gym", "Closed", "Closed"] },
];

const colorFor = (name: string) => {
  if (name === "Closed") return "text-muted-foreground/40 bg-transparent";
  if (/MMA|Boxing|Kickboxing|Combat|Sparring/.test(name)) return "bg-primary/10 text-primary border-primary/30";
  if (/CrossFit|HIIT/.test(name)) return "bg-foreground/5 text-foreground border-foreground/20";
  if (/Women|Yoga|Recovery/.test(name)) return "bg-foreground/5 text-muted-foreground border-border";
  return "bg-card text-foreground border-border";
};

const Schedule = () => (
  <div>
    <section className="pt-40 pb-12">
      <div className="container">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Weekly Schedule</span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-none">
          Plan Your <span className="text-gradient-gold">Grind</span>.
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl">
          Drop in or book your spot. Combat classes fill fast — reserve ahead.
        </p>
      </div>
    </section>

    <section className="container pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto border border-border"
      >
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-card/50">
              <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground font-medium w-24">Time</th>
              {days.map((d) => (
                <th key={d} className="p-4 text-xs uppercase tracking-widest text-primary font-semibold">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((row) => (
              <tr key={row.time} className="border-b border-border last:border-0">
                <td className="p-4 font-display text-lg text-primary font-bold">{row.time}</td>
                {row.classes.map((cls, i) => (
                  <td key={i} className="p-2">
                    <div className={`text-xs px-2 py-3 text-center border ${colorFor(cls)} font-medium uppercase tracking-wider`}>
                      {cls}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="text-center mt-12">
        <Button variant="gold" size="xl">Book A Class</Button>
      </div>
    </section>
  </div>
);

export default Schedule;
