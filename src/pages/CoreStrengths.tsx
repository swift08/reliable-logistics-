import { useState } from "react";
import { Link } from "react-router-dom";
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
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TABS = [
  { id: "iso", label: "CERTIFIED ISO 9001:2015" },
  { id: "availability", label: "24/7 AVAILABILITY" },
  { id: "prices", label: "FAIR PRICES" },
  { id: "team", label: "CREATIVE TEAM" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const STRENGTHS = [
  {
    icon: Plane,
    title: "AIR/TRAIN SERVICES",
    description: "We are one of the best as we have dedicated wagon and space hired.",
  },
  {
    icon: Building2,
    title: "E-Compliance",
    description: "E-Compliance centers at prime locations.",
  },
  {
    icon: Users,
    title: "Expert Staff",
    description: "Experienced and expert personnel for each department in logistics stream.",
  },
  {
    icon: CreditCard,
    title: "COD Facility",
    description: "Part and Delivery up to destination with COD facility.",
  },
  {
    icon: Truck,
    title: "GROUND SHIPPING",
    description: "Full and dedicated vehicles, Trailer Service, express deliveries, specialized vehicles.",
  },
  {
    icon: Ship,
    title: "Multimode services",
    description: "Air Rail Road FTL and LCV.",
  },
  {
    icon: Zap,
    title: "Fast Services",
    description: "Fast Services ensured in every mode.",
  },
  {
    icon: Warehouse,
    title: "BEST IN TOWN",
    description: "Large warehousing spaces available in our branches and hubs across in INDIA.",
  },
];

const CoreStrengths = () => {
  const [activeTab, setActiveTab] = useState<TabId>("iso");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Dark header with title and home icon */}
        <header className="relative bg-[hsl(var(--section-dark))] text-[hsl(var(--section-dark-foreground))] py-12 md:py-16">
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Home"
            >
              <Home size={20} />
            </Link>
          </div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight">
              Our Core Strengths
            </h1>
          </div>
        </header>

        {/* Tabs */}
        <div className="sticky top-16 z-40 bg-background border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-body font-semibold uppercase transition-colors",
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content - same strengths for all tabs with different emphasis / copy could be extended later */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6">
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
      </main>
      <Footer />
    </div>
  );
};

export default CoreStrengths;
