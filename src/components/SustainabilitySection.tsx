import { motion } from "framer-motion";
import { Leaf, Fuel } from "lucide-react";
import greenBussuImage from "@/assets/green bussu.png";

const SustainabilitySection = () => {
  return (
    <section className="section-padding bg-white scroll-mt-20 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-emerald-700 mb-3">
              Sustainability
            </h2>
            <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
              Go Green, Go Electric. Driving Sustainable{" "}
              <span className="inline-block border-b-4 border-emerald-500 pb-0.5">Logistics</span>
            </p>
            <div className="space-y-4 mt-6">
              <p className="text-muted-foreground font-body leading-relaxed">
                We are actively reducing our carbon footprint by transitioning our urban delivery fleets to Electric Vehicles (EV) and Compressed Natural Gas (CNG).
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our commitment to green logistics not only helps preserve the environment but also aligns with the ESG goals of our corporate partners.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-display font-semibold text-sm uppercase tracking-wide hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
              >
                <Leaf className="w-5 h-5 text-emerald-600" />
                EV Fleet Expansion
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-display font-semibold text-sm uppercase tracking-wide hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
              >
                <Fuel className="w-5 h-5 text-emerald-600" />
                CNG Adoption
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-xl rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl hover:ring-emerald-200/50">
              <img
                src={greenBussuImage}
                alt="Go Green sustainable logistics, EV truck and green container"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
