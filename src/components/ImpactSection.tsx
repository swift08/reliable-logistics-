import { motion } from "framer-motion";
import impactImage from "@/assets/impact-night.jpg";

const ImpactSection = () => {
  return (
    <section className="relative h-[320px] md:h-[380px] min-h-0 overflow-hidden w-full">
      <img
        src={impactImage}
        alt="Logistics operations at night"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-section-dark/70" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl w-full"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-section-dark-foreground leading-tight mb-3">
            While The World Sleeps,{" "}
            <span className="text-gradient-red">We Keep Deliveries Moving</span>
          </h2>
          <p className="text-sm md:text-base text-section-dark-foreground/70 font-body">
            Your shipment arrives exactly when it should.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
