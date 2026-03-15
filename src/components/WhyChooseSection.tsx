import { motion } from "framer-motion";
import { Train, Plane, Truck, Lock, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Train,
    title: "Rail Express",
    description: "Fast, economical, and reliable: door-to-door service, climate-controlled handling, certified handlers, and authorized Indian Railways lease holders for dedicated wagons across major locations.",
  },
  {
    icon: Plane,
    title: "Air Express",
    description: "15-hour delivery benchmark to major cities; guaranteed next-day delivery with early morning and pre-noon options. Nationwide coverage and advanced cargo handling for safe, efficient movement.",
  },
  {
    icon: Truck,
    title: "Road Express",
    description: "Modern fleet of 150+ vehicles with door-to-door and hub-and-spoke operations; expert handling for heavy motors, panels, and solar equipment; uncompromised safety standards and specialized staff training.",
  },
  {
    icon: Lock,
    title: "Critical Shipment Expertise",
    description: "Specialized handling protocols for high-value, fragile, and sensitive goods requiring maximum security and precision.",
  },
  {
    icon: Shield,
    title: "IBA Approved Transporter",
    description: "Certified by the Indian Banks' Association, guaranteeing the highest standards of financial security and trust in transit.",
  },
  {
    icon: Award,
    title: "ISO 9001",
    description: "Internationally recognized quality management systems driving continuous improvement and zero-defect operations.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Key Differentiators
          </h2>
          <p className="text-muted-foreground font-body mt-2">What sets Reliable Logistics apart</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
