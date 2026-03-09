import { motion } from "framer-motion";
import { Package, CheckCircle, Truck, MapPin } from "lucide-react";

const steps = [
  { icon: Package, label: "Package Picked Up", time: "9:00 AM" },
  { icon: Truck, label: "In Transit", time: "11:30 AM" },
  { icon: MapPin, label: "Out For Delivery", time: "2:15 PM" },
  { icon: CheckCircle, label: "Delivered", time: "3:45 PM" },
];

const LiveTrackingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Premium Feature</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Live Delivery Journey
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Track every step of your shipment with our real-time visual timeline.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center mb-6 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                  <step.icon size={20} className="text-primary-foreground" />
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="feature-card">
                    <h3 className="font-display font-bold text-foreground text-lg">{step.label}</h3>
                    <p className="text-muted-foreground font-body text-sm mt-1">{step.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTrackingSection;
