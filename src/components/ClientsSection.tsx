import { useState } from "react";
import { motion } from "framer-motion";

// Use public/clients/ so filenames with spaces work. Copy from src/assets into public/clients/:
// - abb.webp, BHEL.png, ZOMATO.webp (same name)
// - "BHARATH electronics.webp" → save as BHARATH-electronics.webp
// - "ZUARI cement.png" → save as ZUARI-cement.png
const clients = [
  { name: "ABB", logo: "/clients/abb.webp" },
  { name: "BHEL", logo: "/clients/BHEL.png" },
  { name: "Bharath Electronics", logo: "/clients/BHARATH-electronics.jpg" },
  { name: "Zomato", logo: "/clients/ZOMATO.webp" },
  { name: "Zuari Cement", logo: "/clients/ZUARI-cement.png" },
];

// Duplicate for seamless loop (news ticker: one behind another)
const clientsLoop = [...clients, ...clients];

const ClientsSection = () => {
  const [failed, setFailed] = useState<Set<string>>(new Set());

  const markFailed = (name: string) => setFailed((prev) => new Set(prev).add(name));

  return (
    <section className="section-padding bg-secondary overflow-hidden w-full max-w-full">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Our Clients
          </h2>
          <p className="text-muted-foreground font-body mt-2">Some of our esteemed clients</p>
        </motion.div>

        <div className="relative w-full overflow-hidden [contain:layout_paint]">
          <motion.div
            className="flex items-center justify-center gap-6 md:gap-8 shrink-0 w-[max-content]"
            style={{ width: "max-content", willChange: "transform" }}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {clientsLoop.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center justify-center shrink-0 w-[180px] h-20 md:h-24 bg-card rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                {failed.has(client.name) ? (
                  <span className="text-foreground font-display font-semibold text-center text-sm leading-tight">
                    {client.name}
                  </span>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full w-full object-contain object-center"
                    loading="lazy"
                    decoding="async"
                    onError={() => markFailed(client.name)}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
