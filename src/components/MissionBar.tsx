import { motion } from "framer-motion";
import { Shield, Truck, MapPin } from "lucide-react";

const missions = [
  {
    icon: Shield,
    title: "INTEGRITY & QUALITY",
    description: "We uphold the highest standards of honesty, transparency, and accountability and deliver superior service backed by stringent quality control.",
  },
  {
    icon: Truck,
    title: "OPERATIONAL EXCELLENCE",
    description: "World-class logistics solutions with efficiency, reliability, and customer satisfaction at every touchpoint.",
  },
  {
    icon: MapPin,
    title: "LEADERSHIP IN LOGISTICS",
    description: "We lead by example, setting benchmarks in operational excellence, customer service, and innovation.",
  },
];

const MissionBar = () => {
  return (
    <section className="relative z-10 section-padding pt-8 pb-4 md:pb-5" aria-labelledby="pillars-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8"
        >
          <h2 id="pillars-heading" className="text-center text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {missions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBar;
