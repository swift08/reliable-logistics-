import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Building2,
  Users,
  CreditCard,
  Truck,
  Ship,
  Zap,
  Warehouse,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "iso", label: "CERTIFIED ISO 9001:2015" },
  { id: "availability", label: "24/7 AVAILABILITY" },
  { id: "prices", label: "FAIR PRICES" },
  { id: "team", label: "CREATIVE TEAM" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const STRENGTHS = [
  { icon: Plane, title: "AIR/TRAIN SERVICES", description: "We are one of the best as we have dedicated wagon and space hired." },
  { icon: Building2, title: "E-Compliance", description: "E-Compliance centers at prime locations." },
  { icon: Users, title: "Expert Staff", description: "Experienced and expert personnel for each department in logistics stream." },
  { icon: CreditCard, title: "COD Facility", description: "Part and Delivery up to destination with COD facility." },
  { icon: Truck, title: "GROUND SHIPPING", description: "Full and dedicated vehicles, Trailer Service, express deliveries, specialized vehicles." },
  { icon: Ship, title: "Multimode services", description: "Air Rail Road FTL and LCV." },
  { icon: Zap, title: "Fast Services", description: "Fast Services ensured in every mode." },
  { icon: Warehouse, title: "BEST IN TOWN", description: "Large warehousing spaces available in our branches and hubs across in INDIA." },
];

const CoreStrengthsSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("iso");

  return (
    <section id="core-strengths" className="section-padding bg-background scroll-mt-20">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground uppercase tracking-tight">
            Our Core Strengths
          </h2>
        </motion.div>

        {/* Strategic Sector - two columns matching slide */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-8 rounded-2xl bg-card border border-border"
        >
          {/* Left: Government & Strategic Sector Deliveries */}
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2 border-b-2 border-primary pb-1 inline-block">
              Extensive Experience in Government & Strategic Sector Deliveries
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mt-4 mb-6">
              Our deep understanding of regulatory requirements and secure handling protocols makes us the partner of choice for highly sensitive Government and Defense operations.
            </p>
            <ul className="space-y-2">
              {[
                "High-security protocols for classified materials.",
                "End-to-end escort and surveillance capabilities.",
                "Strict adherence to compliance and regulatory standards.",
                "Proven track record with PSU and Defense ministries.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Specific Delivery Locations & Facilities */}
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-6 border-t-2 border-primary pt-6 lg:border-t-0 lg:pt-0 lg:border-l-2 lg:pl-8 lg:border-l-primary">
              Specific Delivery Locations & Facilities
            </h3>
            <ul className="space-y-2">
              {[
                "Indian Railway Loco Sheds",
                "SEZ Deliveries",
                "Indian Air Force Bases & Naval Stations",
                "Shipyards & Material Organisation Depots",
                "HAL & BHEL Plants",
                "Solar Energy Plants & Critical Infrastructure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Specialized Capabilities - two columns, checkmark bullets */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-display font-bold text-foreground border-b-2 border-primary pb-1 inline-block lg:col-span-2 mb-2">
            Specialized Capabilities
          </h3>
          <ul className="space-y-2 lg:col-span-1 lg:mt-4">
            {[
              "Secure handling of high-value and mission-critical industrial equipment",
              "Strict compliance with Defence, PSU, and plant-level documentation protocols",
              "Time-bound execution for plant shutdown projects and urgent consignments",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 lg:col-span-1 lg:mt-4">
            {[
              "Multi-modal logistics support (Rail | Road | Air)",
              "Dedicated coordination for restricted-entry and high-security zones",
              "Complete alignment with client-specific SOPs by adopting and strictly following their operational protocols",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2.5 text-sm font-body font-semibold uppercase transition-colors rounded-md",
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto"
          >
            {STRENGTHS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="flex gap-4"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoreStrengthsSection;
