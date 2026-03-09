import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "about", label: "ABOUT US" },
  { id: "why", label: "WHY CHOOSE US" },
  { id: "mission", label: "MISSION" },
  { id: "vision", label: "VISION - OUR VALUES" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const VisionValuesSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("vision");

  return (
    <section id="about" className="section-padding bg-background scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        {/* Tagline & Title */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-1">
            Our Quality Is Our Strength
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground uppercase tracking-tight">
            Reliable Logistics – The Right Choice
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 text-sm font-body font-semibold uppercase border rounded transition-colors",
                activeTab === tab.id
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-foreground border-border hover:bg-secondary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm min-h-[320px]">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-8 md:p-10"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-4">Our Journey and Success</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Year 2008 - A Wild Concept by Mr. Ranganath N pioneer of Reliable Logistics, with limited fleet of
                  vehicles and manpower, started its journey, catering for very few Corporate customers within metro
                  cities. Today we have grown up into a full fledged multi faced Air, Rail and surface, customer
                  convenient leading logistics service provider in India, with our roots spreading across every remote
                  corners of India, supported by very highly experienced operational staffs and real–time, online
                  tracking technology offering customers control of their shipments like never before.
                </p>
              </motion.div>
            )}

            {activeTab === "why" && (
              <motion.div
                key="why"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-8 md:p-10"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Why Choose Us</h3>
                <p className="text-muted-foreground font-body mb-6">Competitive pricing offered with best services.</p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Customer Service",
                      text: "24/7 customer service availability by trained customer care staffs to attend queries.",
                    },
                    {
                      title: "Flexible Pricing/ARC",
                      text: "Shipments on To Pay/To be billed/Paid Basis. Annual rate contract for high volume corporate customer.",
                    },
                    {
                      title: "Key Account Mangement",
                      text: "We deploy KAM for high volume corporate customers",
                    },
                    {
                      title: "Expert Staff",
                      text: "Deployment of trained staff for easy shipment documentation to our customers. Experienced and expert personnel for each department in logistics stream.",
                    },
                    {
                      title: "Air/Rail Services",
                      text: "We are one of the best in AIR / RAIL service as we have dedicated wagon and space hired in Air / Rail Cargo help to deliver on time every time.",
                    },
                    {
                      title: "Ground Shipping",
                      text: "Full and dedicated vehicles, Trailer Service, express deliveries, specialized vehicles.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-primary mt-1.5">–</span>
                      <div>
                        <span className="font-display font-semibold text-foreground">{item.title}</span>
                        <p className="text-muted-foreground font-body text-sm mt-0.5">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-8 md:p-10"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-6">Our Mission</h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm leading-relaxed list-disc list-inside">
                  <li>To become the India's preferred logistics company— applying insight, service quality and innovation to create sustainable growth for business and Society</li>
                  <li>To help our people remember and deliver our Vision, Mission & Values with created brand Promise</li>
                  <li>To grow further with our competence and ability with best wishes of our valued customers to appoint in which our customers should feel proud to name us as their business associates</li>
                </ul>
                <ul className="mt-6 space-y-1.5 text-muted-foreground font-body text-sm">
                  <li>Think With clarity and Courage</li>
                  <li>ACT decisively</li>
                  <li>Achieve goals with confidence and assertiveness</li>
                  <li>Customer Satisfaction</li>
                  <li>Continuous Improvement</li>
                  <li>Innovation & Technology</li>
                  <li>Accept Responsibility</li>
                  <li>Mutual respect</li>
                </ul>
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0">
                  {/* Left: Compass / Vision visual */}
                  <div className="lg:col-span-2 flex items-center justify-center bg-muted/40 p-8 lg:py-12">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-border bg-card/50 flex items-center justify-center shadow-inner">
                      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm font-display font-bold uppercase tracking-wider text-cyan-600">
                        Vision
                      </span>
                      <Compass className="w-16 h-16 text-foreground/80" strokeWidth={1.5} />
                      <div
                        className="absolute top-1/2 left-1/2 w-0.5 h-12 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                          background: "linear-gradient(to top, hsl(187 60% 45%), hsl(0,0%,75%))",
                          transform: "translate(-50%, -50%) rotate(-45deg)",
                          transformOrigin: "center bottom",
                        }}
                      />
                    </div>
                  </div>
                  {/* Right: Text content */}
                  <div className="lg:col-span-3 flex flex-col justify-center p-8 md:p-10 lg:pl-10">
                    <h3 className="text-xl font-display font-bold text-foreground mb-6">Our Vision and Values</h3>
                    <ul className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                      <li>• To be customer's obvious choice by providing total logistics solutions through innovative and reliable service.</li>
                      <li>• To grow in a steady and responsible pace to a position of strength and prominence in our area of operation</li>
                      <li>• Connecting people, business and communities to a better future-through logistics</li>
                      <li><strong className="text-foreground">Connected</strong> We invest in insight to get the hearts of our customer's challenge. We are open and transparent in the way we work.</li>
                      <li><strong className="text-foreground">Committed</strong> Deeply involved in building relationship—everything we do is with the long term in mind. Our Dedication to quality is the cornerstone of our Success—we get every detail right</li>
                      <li><strong className="text-foreground">Creative</strong> We are constantly developing better ways of working.</li>
                    </ul>
                    <a
                      href="#contact"
                      className="mt-8 inline-block font-display font-semibold text-primary hover:underline"
                    >
                      CREATE BETTER CONNECTIONS
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;
