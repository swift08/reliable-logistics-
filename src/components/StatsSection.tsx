import { motion } from "framer-motion";

const stats = [
  { value: "1200+", label: "Satisfied Customers" },
  { value: "27", label: "Collection Branches" },
  { value: "10000+", label: "Pin Codes Serviced" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground w-full max-w-full">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold">{s.value}</div>
              <div className="font-body text-primary-foreground/90 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
