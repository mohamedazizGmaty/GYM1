import { Activity, Calendar, CreditCard, QrCode, Users, DollarSign, TrendingUp, Bell } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }: any) => (
  <div className={`glass p-6 ${className}`}>{children}</div>
);

const StatCard = ({ icon: Icon, label, value, hint }: any) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass p-6">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-display text-3xl font-bold mt-2 text-gradient-gold">{value}</div>
        {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
      </div>
      <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
    </div>
  </motion.div>
);

const Header = ({ title, sub }: any) => (
  <div className="border-b border-border px-8 py-6 sticky top-0 bg-background/80 backdrop-blur-xl z-10">
    <h1 className="font-display text-2xl uppercase font-bold">{title}</h1>
    {sub && <p className="text-sm text-muted-foreground mt-1">{sub}</p>}
  </div>
);

export const MemberDashboard = () => (
  <div>
    <Header title="Welcome back, Champion" sub="Here's your training overview" />
    <div className="p-8 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={CreditCard} label="Plan" value="Combat" hint="Active · renews Dec 12" />
        <StatCard icon={Activity} label="Visits this month" value="14" hint="+3 vs last month" />
        <StatCard icon={Calendar} label="Upcoming" value="3" hint="Booked classes" />
        <StatCard icon={Bell} label="Unread" value="2" hint="Notifications" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="font-display text-lg uppercase font-bold mb-4">Recent Attendance</h3>
          <div className="space-y-3">
            {[
              ["Today, 18:30", "MMA Pro", "Yassine K."],
              ["Yesterday, 07:00", "Bodybuilding", "Open floor"],
              ["Mon, 19:30", "Boxing", "Hamza T."],
              ["Sun, 09:00", "CrossFit", "Sana M."],
            ].map(([d, c, coach], i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <div className="font-medium">{c}</div>
                  <div className="text-xs text-muted-foreground">with {coach}</div>
                </div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-display text-lg uppercase font-bold mb-4">Your QR Pass</h3>
          <div className="aspect-square bg-white p-4 flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 ${Math.random() > 0.5 ? "bg-black" : "bg-white"}`} />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">Scan at the front desk to check in.</p>
        </Card>
      </div>
    </div>
  </div>
);

export const AdminDashboard = () => (
  <div>
    <Header title="Admin Overview" sub="Operations at a glance" />
    <div className="p-8 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Active Members" value="2,547" hint="+128 this month" />
        <StatCard icon={DollarSign} label="MRR" value="TND 184K" hint="+12% MoM" />
        <StatCard icon={TrendingUp} label="Retention" value="92%" hint="Last 90 days" />
        <StatCard icon={Calendar} label="Classes / week" value="46" hint="84% capacity" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display text-lg uppercase font-bold mb-4">Revenue Last 7 Days</h3>
          <div className="h-48 flex items-end gap-2">
            {[40, 65, 50, 80, 95, 70, 88].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-gold opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-2 text-xs text-muted-foreground text-center">
            {["M","T","W","T","F","S","S"].map((d,i) => <div key={i}>{d}</div>)}
          </div>
        </Card>

        <Card>
          <h3 className="font-display text-lg uppercase font-bold mb-4">Recent Signups</h3>
          <div className="space-y-3">
            {["Mehdi Bouazizi","Salma Trabelsi","Ali Ben Salem","Nour Khedri","Omar Sassi"].map((n,i)=>(
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-xs text-primary-foreground font-bold">{n[0]}</div>
                  <span className="text-sm">{n}</span>
                </div>
                <span className="text-xs text-muted-foreground">Combat · {i+1}d ago</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export const CoachDashboard = () => (
  <div>
    <Header title="Coach Hub" sub="Your day at GULZA" />
    <div className="p-8 space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={Calendar} label="Today's Classes" value="4" />
        <StatCard icon={Users} label="Total Attendees" value="68" />
        <StatCard icon={Activity} label="This Week" value="22" hint="Sessions" />
      </div>

      <Card>
        <h3 className="font-display text-lg uppercase font-bold mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          {[
            ["06:30", "Boxing Fundamentals", 12, "Studio 1"],
            ["12:00", "MMA Open Mat", 18, "Cage"],
            ["17:30", "MMA Pro", 22, "Cage"],
            ["19:30", "Combat Conditioning", 16, "Studio 2"],
          ].map(([time, name, count, room], i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-border hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="font-display text-2xl text-primary font-bold w-20">{time}</div>
                <div>
                  <div className="font-medium">{name}</div>
                  <div className="text-xs text-muted-foreground">{room}</div>
                </div>
              </div>
              <div className="text-sm"><span className="text-primary font-bold">{count}</span> <span className="text-muted-foreground">attending</span></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);
