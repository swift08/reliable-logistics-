import { motion } from "framer-motion";
import impactImage from "@/assets/impact-night.jpg";

const ImpactSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={impactImage}
        alt="Logistics operations at night"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-section-dark/70" />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl px-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-section-dark-foreground leading-tight mb-6">
            While The World Sleeps,{" "}
            <span className="text-gradient-red">We Keep Deliveries Moving</span>
          </h2>
          <p className="text-lg md:text-xl text-section-dark-foreground/70 font-body">
            Your shipment arrives exactly when it should.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
