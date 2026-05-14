import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const publicClients = [
  { name: "ABB", logo: "/clients/abb.webp" },
  { name: "BHEL", logo: "/clients/BHEL.png" },
  { name: "Bharath Electronics", logo: "/clients/BHARATH-electronics.jpg" },
  { name: "Zomato", logo: "/clients/ZOMATO.webp" },
  { name: "Zuari Cement", logo: "/clients/ZUARI-cement.png" },
];

const companyGlob = import.meta.glob("../assets/companies/*", {
  import: "default",
}) as Record<string, () => Promise<string>>;

function clientNameFromPath(path: string): string {
  return path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/^id[-_a-zA-Z0-9]+_?/, "") || "Client";
}

const ClientsSection = () => {
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [assetClients, setAssetClients] = useState<{ name: string; logo: string }[]>([]);

  useEffect(() => {
    let cancelled = false;
    const entries = Object.entries(companyGlob);
    if (entries.length === 0) return;

    void Promise.all(
      entries.map(async ([path, loader]) => {
        const logo = await loader();
        return { name: clientNameFromPath(path), logo };
      }),
    ).then((rows) => {
      if (!cancelled) setAssetClients(rows);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const clients = useMemo(() => [...publicClients, ...assetClients], [assetClients]);

  const clientsLoop = useMemo(() => [...clients, ...clients], [clients]);

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
            style={{ width: "max-content", willChange: reduceMotion ? "auto" : "transform" }}
            animate={reduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  }
            }
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
                    width={160}
                    height={64}
                    sizes="180px"
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
