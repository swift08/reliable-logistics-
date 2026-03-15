import { motion } from "framer-motion";
import indiaMap from "@/assets/india map.png";

const ZONAL_OFFICES = [
  "Ahmedabad",
  "Bengaluru",
  "Bhopal",
  "Bhubaneshwar",
  "Chandigarh",
  "Chennai",
  "Coimbatore",
  "Goa",
  "Faridabad",
  "Hubli",
  "Guwahati",
  "Gurgaon",
  "Jaipur",
  "Jamshedpur",
  "Delhi",
  "Lucknow",
  "Cochin",
  "Trivandrum",
  "Hyderabad",
  "Rajkot",
  "Kolkata",
  "Mumbai",
  "Nagpur",
  "Noida",
  "Pune",
  "Patna",
  "Raipur",
  "Surat",
  "Visakhapatnam",
  "Vadodara",
];

const ZONAL_OFFICES_LOOP = [...ZONAL_OFFICES, ...ZONAL_OFFICES];

const PanIndiaSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        {/* Heading (left on desktop) + Map (right on desktop); stacked centered on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12 gap-10 mb-12 w-full"
        >
          <div className="text-center md:text-left md:max-w-lg md:flex-shrink-0 md:flex md:flex-col md:justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Pan India Coverage
            </h2>
            <div className="h-1 w-24 md:w-28 bg-primary rounded-full mt-4 mb-3 md:mx-0 mx-auto" aria-hidden />
            <p className="text-muted-foreground font-body text-base md:text-lg lg:text-xl md:leading-relaxed">
              14,000+ serviceable locations across the country
            </p>
          </div>
          <div className="flex justify-center md:justify-end md:flex-1 md:min-w-0 w-full">
            <div className="relative inline-block p-4 md:p-6 rounded-2xl bg-card border border-border shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" aria-hidden />
              <img
                src={indiaMap}
                alt="India map - Pan India service coverage"
                className="relative w-full max-w-2xl md:max-w-3xl h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Zonal offices horizontal news-ticker loop */}
        <div className="relative overflow-hidden [contain:layout_paint]">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" aria-hidden />
          <motion.div
            className="flex gap-4 shrink-0 w-[max-content] py-3"
            style={{ willChange: "transform" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {ZONAL_OFFICES_LOOP.map((city, i) => (
              <span
                key={`${city}-${i}`}
                className="px-4 py-2.5 rounded-lg border-2 border-primary/40 bg-card text-foreground font-body text-sm font-medium whitespace-nowrap shrink-0 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanIndiaSection;
