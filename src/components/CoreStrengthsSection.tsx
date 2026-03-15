import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Users,
  CreditCard,
  Truck,
  Route,
  Zap,
  Warehouse,
  ShieldCheck,
  Clock,
  BadgePercent,
  Lightbulb,
} from "lucide-react";

const STRENGTHS = [
  { icon: ShieldCheck, title: "CERTIFIED ISO 9001:2015", description: "Quality management systems certified for consistent, reliable logistics operations." },
  { icon: Clock, title: "24/7 AVAILABILITY", description: "Round-the-clock support and operations to meet your urgent logistics needs." },
  { icon: BadgePercent, title: "FAIR PRICES", description: "Transparent, competitive pricing with no hidden charges." },
  { icon: Lightbulb, title: "CREATIVE TEAM", description: "Innovative solutions and tailored approaches for every logistics challenge." },
  { icon: Plane, title: "AIR/TRAIN SERVICES", description: "We are one of the best as we have dedicated wagon and space hired." },
  { icon: Building2, title: "E-Compliance", description: "E-Compliance centers at prime locations." },
  { icon: Users, title: "Expert Staff", description: "Experienced and expert personnel for each department in logistics stream." },
  { icon: CreditCard, title: "COD Facility", description: "Part and Delivery up to destination with COD facility." },
  { icon: Truck, title: "GROUND SHIPPING", description: "Full and dedicated vehicles, Trailer Service, express deliveries, specialized vehicles." },
  { icon: Route, title: "Multimode services", description: "Air Rail Road FTL and LCV." },
  { icon: Zap, title: "Fast Services", description: "Fast Services ensured in every mode." },
  { icon: Warehouse, title: "BEST IN TOWN", description: "Large warehousing spaces available in our branches and hubs across in INDIA." },
];

const CoreStrengthsSection = () => {
  return (
    <section id="core-strengths" className="section-padding bg-background scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground uppercase tracking-tight">
            Our Core Strengths
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-7xl mx-auto"
        >
          {STRENGTHS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex gap-4"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreStrengthsSection;
