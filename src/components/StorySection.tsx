import { motion } from "framer-motion";
import storyImage from "@/assets/story-delivery.jpg";

const StorySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl w-full"
          >
            <img
              src={storyImage}
              alt="Delivery person handing package to customer"
              className="w-full h-auto max-w-full object-contain hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Fostering Stronger Connections
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              We are committed to building meaningful relationships that drive growth, enhance collaboration, and deliver exceptional value at every touchpoint.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Trusted by India's leading enterprises across diverse sectors, from Government and Defence to solar and critical infrastructure. We lead the logistics industry with reliability, innovation, and operational excellence.
            </p>
            <div className="flex flex-wrap gap-8 sm:gap-12 justify-center">
              <div>
                <div className="text-4xl font-display font-bold text-primary">500+</div>
                <div className="text-muted-foreground font-body text-sm mt-1">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary">10K+</div>
                <div className="text-muted-foreground font-body text-sm mt-1">Daily Deliveries</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary">99%</div>
                <div className="text-muted-foreground font-body text-sm mt-1">On-Time Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
