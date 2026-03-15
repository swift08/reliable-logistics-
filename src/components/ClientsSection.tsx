import { useState } from "react";
import { motion } from "framer-motion";

// Logos from public/clients
const publicClients = [
  { name: "ABB", logo: "/clients/abb.webp" },
  { name: "BHEL", logo: "/clients/BHEL.png" },
  { name: "Bharath Electronics", logo: "/clients/BHARATH-electronics.jpg" },
  { name: "Zomato", logo: "/clients/ZOMATO.webp" },
  { name: "Zuari Cement", logo: "/clients/ZUARI-cement.png" },
];

// Logos from src/assets/companies (imported via Vite glob)
const companyModules = import.meta.glob("../assets/companies/*", { eager: true });
const assetClients = Object.entries(companyModules).map(([path, mod]) => {
  const name = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/^id[-_a-zA-Z0-9]+_?/, "") || "Client";
  const logo = (mod as { default: string }).default;
  return { name, logo };
});

const clients = [...publicClients, ...assetClients];

// Duplicate for seamless loop (news ticker: one behind another)
const clientsLoop = [...clients, ...clients];

const ClientsSection = () => {
  const [failed, setFailed] = useState<Set<string>>(new Set());

  const markFailed = (name: string) => setFailed((prev) => new Set(prev).add(name));

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground border-b-2 border-primary pb-1 inline-block">
            Our Client Portfolio
          </h2>
          <p className="text-muted-foreground font-body mt-3">Trusted by India's leading enterprises across diverse sectors.</p>
        </motion.div>

        <div className="relative w-full overflow-hidden [contain:layout_paint] mb-12">
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
