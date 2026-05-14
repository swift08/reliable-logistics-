import { motion } from "framer-motion";
import { Home, Layers, Radio, Headset, UserCog, FileCheck, Warehouse, Package, Plane, Train, Truck, Check, Cog, Box, Sun } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "DOOR PICKUP & DELIVERY",
    description: "Comprehensive first-mile to last-mile connectivity ensuring secure and timely transit.",
  },
  {
    icon: Layers,
    title: "MULTI-MODAL LOGISTICS",
    description: "Integrating rail, road, and air networks for optimal routing and cost-efficiency.",
  },
  {
    icon: Warehouse,
    title: "WAREHOUSING",
    description: "Secure warehousing and storage—climate-controlled options, inventory programs, and facilities connected to our nationwide transport network.",
  },
  {
    icon: Radio,
    title: "REAL-TIME VISIBILITY",
    description: "Advanced tracking systems providing complete transparency over your shipments.",
  },
  {
    icon: Headset,
    title: "24/7 CUSTOMER SUPPORT",
    description: "Round-the-clock dedicated assistance to resolve queries and ensure smooth operations.",
  },
  {
    icon: UserCog,
    title: "DEDICATED KEY ACCOUNT MANAGEMENT",
    description: "Personalized oversight by logistics experts tailored to your business needs.",
  },
  {
    icon: FileCheck,
    title: "E-COMPLIANCE HUBS",
    description: "Streamlined documentation and regulatory compliance handling across regions.",
  },
  {
    icon: Warehouse,
    title: "3PL WAREHOUSING SOLUTIONS",
    description: "Scalable storage and distribution facilities managed by advanced WMS platforms.",
  },
  {
    icon: Package,
    title: "VALUE-ADDED SERVICES",
    description: "Customized packaging, labeling, and quality checks tailored to your supply chain.",
  },
];

const modeCards: {
  anchorId?: string;
  title: string;
  tagline: string;
  icon: typeof Plane;
  points: string[];
}[] = [
  {
    anchorId: "module-air",
    title: "Air Freight",
    tagline: "15-hour delivery benchmark",
    icon: Plane,
    points: ["Delivery within 15 hours to major cities", "Next-day & early morning options", "Nationwide coverage & advanced cargo handling"],
  },
  {
    anchorId: "module-rail",
    title: "Rail Express",
    tagline: "Fast, economical, reliable",
    icon: Train,
    points: ["Door-to-door & climate-controlled", "Certified handlers", "Authorized Indian Railways lease holders"],
  },
  {
    anchorId: "module-speed-trucking",
    title: "Surface / Speed Trucking",
    tagline: "150+ vehicle fleet",
    icon: Truck,
    points: ["Door-to-door & hub-and-spoke", "Heavy motors, panels, solar equipment", "Uncompromised safety standards"],
  },
  {
    title: "Warehousing Services",
    tagline: "Pan-India hubs & WMS",
    icon: Warehouse,
    points: ["Climate-controlled & ambient storage", "Inventory programs tied to transport", "3PL-ready facilities across India"],
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 id="services-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            End-to-end logistics tailored to your business, from first-mile pickup to last-mile delivery, with full visibility and support.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">How We Deliver</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modeCards.map((card, i) => (
              <motion.div
                key={card.title}
                id={card.anchorId}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="scroll-mt-28 rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <card.icon size={48} className="text-primary/80" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-primary-foreground bg-primary/90 backdrop-blur px-2 py-1 rounded">
                      {card.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display font-bold text-foreground mb-3">{card.title}</h4>
                  <ul className="space-y-1.5 text-muted-foreground font-body text-sm">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 space-y-10 rounded-2xl border border-border bg-muted/20 p-6 md:p-10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-display font-bold text-foreground">Service modules</h3>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Jump to detailed notes for each line of business. Same capabilities back our nationwide operations.
            </p>
          </div>
          <article id="module-3pl" className="scroll-mt-28 border-b border-border/80 pb-8 last:border-0 last:pb-0">
            <h4 className="font-display text-lg font-bold text-foreground">3PL Services</h4>
            <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">
              Third-party logistics covering inventory, transport, distribution, and reverse flows—run on advanced WMS and
              integrated with our air, rail, and road network so you scale without building your own logistics stack.
            </p>
          </article>
          <article id="module-express" className="scroll-mt-28 border-b border-border/80 pb-8">
            <h4 className="font-display text-lg font-bold text-foreground">Express (Road)</h4>
            <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">
              Time-definite surface options for urgent freight, with dedicated capacity and predictable cut-offs for
              high-priority lanes.
            </p>
            <div id="module-express-ftl" className="scroll-mt-24 mt-6 rounded-xl bg-card p-4 ring-1 ring-border/60">
              <h5 className="font-display font-semibold text-foreground text-sm">Full Truck Load (FTL)</h5>
              <p className="mt-1 text-muted-foreground font-body text-sm">
                Dedicated full-truck movements for large shipments—ideal for heavy motors, panels, solar equipment, and
                project cargo with uncompromised safety standards.
              </p>
            </div>
            <div id="module-express-ptl" className="scroll-mt-24 mt-4 rounded-xl bg-card p-4 ring-1 ring-border/60">
              <h5 className="font-display font-semibold text-foreground text-sm">Part Truck Load (PTL)</h5>
              <p className="mt-1 text-muted-foreground font-body text-sm">
                Cost-efficient consolidation for smaller lots, with hub-and-spoke routing and careful handling for mixed SKU
                loads.
              </p>
            </div>
          </article>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">Core Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="feature-card group text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-display font-bold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-6">Specialized Transport</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Specialists in O.D.C. (Over-Dimensional Cargo) Consignment" },
              { icon: Cog, title: "Heavy Electrical Motor Transportation" },
              { icon: Package, title: "General Cargo Truck Transport" },
              { icon: Box, title: "Trailer Transport" },
              { icon: Sun, title: "Solar Equipment Transportation" },
              { icon: Layers, title: "Part Truck Load & Full Truck Load Services" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={26} className="text-primary" />
                </div>
                <p className="font-display font-bold text-foreground text-sm leading-snug">{item.title}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-center mt-6 max-w-2xl mx-auto text-sm">
            We integrate Air, Rail, and Surface transportation for complex logistics, efficiently and reliably.
          </p>
        </motion.div>

        <motion.div
          id="module-warehousing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-mt-28 p-6 md:p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
            <Warehouse className="h-6 w-6 text-primary" />
            Warehousing Services
          </h3>
          <p className="text-muted-foreground font-body text-sm mb-6">
            Designed to optimize your supply chain and drive operational efficiency, with scalable, industry-specific solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">3PL & Technology</h4>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> End-to-end logistics: inventory, transport, distribution, reverse logistics</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> State-of-the-art facilities with real-time tracking and climate control</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Cutting-edge software for visibility and informed decision-making</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Scale & Sustainability</h4>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Flexible inventory systems for varying volumes and product types</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Industry expertise: Electronics, FMCG, e-commerce, Pharmaceuticals, and more</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Sustainable warehousing and transport practices</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
