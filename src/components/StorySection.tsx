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
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
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
            <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Every Package Has A Story
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Reliable Logistics was built with a simple belief: deliver every shipment with care, speed and trust.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              From small packages to large freight, we connect businesses and people through dependable logistics solutions across India and beyond.
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
