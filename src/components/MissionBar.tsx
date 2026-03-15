import { motion } from "framer-motion";
import { Shield, Truck, MapPin } from "lucide-react";

const missions = [
  {
    icon: Shield,
    title: "100% SAFE DELIVERY",
    description: "This being a mission we ensure 100% safe delivery in every shipment.",
  },
  {
    icon: Truck,
    title: "MODERN VEHICLE FLEET",
    description: "Our Fleet ensures no break down due to service due and hassle-free deliveries at the end point.",
  },
  {
    icon: MapPin,
    title: "ONLINE TRACKING",
    description: "Web based online tracing systems for booked shipment and online POD facility available.",
  },
];

const MissionBar = () => {
  return (
    <section className="relative z-10 section-padding pt-8 pb-4 md:pb-5 w-full max-w-full">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-8"
        >
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
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={36} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBar;
