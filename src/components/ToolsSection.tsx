import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Clock, Globe, Info, X } from "lucide-react";

const TAB_IDS = ["track", "location", "transit"] as const;
type TabId = (typeof TAB_IDS)[number];

const tabs: { id: TabId; label: string; icon: typeof Package }[] = [
  { id: "track", label: "Track Shipment", icon: Package },
  { id: "location", label: "Location Finder", icon: Globe },
  { id: "transit", label: "Transit Time & Price Finder", icon: Clock },
];

const ToolsSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("track");

  const setTab = (id: string) => {
    if (TAB_IDS.includes(id as TabId)) setActiveTab(id as TabId);
  };
  const [locationType, setLocationType] = useState<"delivery" | "pickup">("delivery");
  const [locationInfoOpen, setLocationInfoOpen] = useState(false);
  const [transitInfoOpen, setTransitInfoOpen] = useState(false);
  const [transitForm, setTransitForm] = useState({
    from: "",
    to: "",
    weight: "",
    bookingDate: "",
    bookingTime: "",
  });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Quick Tools</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Real-Time Logistics Tools
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-visible"
        >
          {/* Tabs */}
          <div className="grid grid-cols-3 border-b border-border">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setTab(tab.id)}
                  className={`flex items-center justify-center gap-2 p-4 text-sm font-body font-semibold transition-all min-w-0 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-sm"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <tab.icon size={18} className={isActive ? "text-white shrink-0" : "shrink-0"} />
                  <span className={isActive ? "text-white truncate" : "truncate"}>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content - min-height so tab content always has space */}
          <div className="p-8 min-h-[280px]">
            {activeTab === "track" && (
              <div key="track" className="space-y-4">
                <label className="text-sm font-body font-semibold text-foreground">Tracking Number</label>
                <Input placeholder="Enter your AWB / tracking number" className="h-12" />
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer">
                    Track Now
                  </a>
                </Button>
              </div>
            )}
            {activeTab === "location" && (
              <div key="location">
                {/* Gradient banner */}
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg px-4 py-4 mb-6">
                  <Globe className="h-5 w-5 text-white shrink-0" />
                  <span className="font-display font-semibold text-white text-base">Location Finder</span>
                </div>
                {/* White content area: input + radio row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <Input
                    id="tools-location-input"
                    placeholder="Enter a Location/Pin Code"
                    className="h-12 flex-1 min-w-0 border-border bg-white"
                  />
                  <div className="flex items-center gap-6 shrink-0">
                    <label className="flex items-center gap-2 font-body cursor-pointer text-foreground">
                      <input
                        type="radio"
                        name="location-type"
                        checked={locationType === "delivery"}
                        onChange={() => setLocationType("delivery")}
                        className="h-4 w-4 border-primary text-primary"
                      />
                      Delivery
                    </label>
                    <label className="flex items-center gap-2 font-body cursor-pointer text-foreground">
                      <input
                        type="radio"
                        name="location-type"
                        checked={locationType === "pickup"}
                        onChange={() => setLocationType("pickup")}
                        className="h-4 w-4 border-primary text-primary"
                      />
                      Pickup
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setLocationInfoOpen(true)}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline text-sm font-body"
                  >
                    Location Finder Info
                    <Info className="h-4 w-4 text-primary" />
                  </button>
                </div>
                {locationInfoOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setLocationInfoOpen(false)}>
                    <div className="bg-card rounded-lg shadow-xl max-w-md w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                      <div className="bg-teal-800 text-white px-6 py-4 font-display font-semibold">Location Finder</div>
                      <div className="px-6 py-5 text-foreground font-body text-sm space-y-3 bg-muted/30">
                        <p>
                          The Location Finder provides you with information on locations serviced by Reliable Logistics.
                          It also outlines the services available for each location and the contact details of the
                          Reliable Logistics office which serves as a contact point for that location.{" "}
                          <button type="button" onClick={() => setLocationInfoOpen(false)} className="text-primary underline hover:no-underline">
                            Click here
                          </button>{" "}
                          to use the Location Finder.
                        </p>
                        <p>For International locations, you may search by country or city.</p>
                      </div>
                      <div className="px-6 pb-4">
                        <button type="button" onClick={() => setLocationInfoOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Close</button>
                      </div>
                    </div>
                  </div>
                )}
                <Button variant="default" size="lg" className="w-full mt-4">Find Location</Button>
              </div>
            )}
            {activeTab === "transit" && (
              <div key="transit" className="relative bg-gray-100/90 rounded-xl p-6 -m-2">
                {/* Gradient header */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg px-4 py-3 mb-4">
                  <Clock className="h-5 w-5 text-white shrink-0" />
                  <span className="font-display font-semibold text-white">Transit Time & Price Finder</span>
                </div>
                {/* Green X - top right */}
                <button
                  type="button"
                  onClick={() => setTab("track")}
                  className="absolute top-4 right-4 p-1.5 text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* Row 1: From | To | Weight | VOLUME WEIGHT CALCULATOR */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                  <div className="sm:col-span-3">
                    <Label className="text-sm font-body font-semibold text-foreground">From*</Label>
                    <Input
                      placeholder="Enter a location"
                      className="h-12 mt-1 bg-white border-border"
                      value={transitForm.from}
                      onChange={(e) => setTransitForm((f) => ({ ...f, from: e.target.value }))}
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <Label className="text-sm font-body font-semibold text-foreground">To*</Label>
                    <Input
                      placeholder="Enter a location"
                      className="h-12 mt-1 bg-white border-border"
                      value={transitForm.to}
                      onChange={(e) => setTransitForm((f) => ({ ...f, to: e.target.value }))}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="text-sm font-body font-semibold text-foreground">Weight (in kgs)*</Label>
                    <Input
                      placeholder="kgs"
                      className="h-12 mt-1 bg-white border-border"
                      type="number"
                      min={0}
                      step={0.1}
                      value={transitForm.weight}
                      onChange={(e) => setTransitForm((f) => ({ ...f, weight: e.target.value }))}
                    />
                  </div>
                  <div className="sm:col-span-4 min-w-0">
                    <Button type="button" variant="secondary" size="lg" className="w-full h-12 bg-gray-700 text-white hover:bg-gray-800 text-[11px] sm:text-xs font-semibold uppercase leading-tight px-2 sm:px-3 text-center">
                      VOLUME WEIGHT CALCULATOR
                    </Button>
                  </div>
                </div>
                {/* Row 2: Booking Date | Booking Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label className="text-sm font-body font-semibold text-foreground">Booking Date*</Label>
                    <Input
                      placeholder="DD-MM-YYYY"
                      className="h-12 mt-1 bg-white border-border"
                      value={transitForm.bookingDate}
                      onChange={(e) => setTransitForm((f) => ({ ...f, bookingDate: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-body font-semibold text-foreground">Booking Time*</Label>
                    <Input
                      placeholder="-- AM/PM"
                      className="h-12 mt-1 bg-white border-border"
                      value={transitForm.bookingTime}
                      onChange={(e) => setTransitForm((f) => ({ ...f, bookingTime: e.target.value }))}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-body mt-4">
                  <span className="text-red-500">*</span> Indicates required fields.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="default" size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white uppercase font-semibold">
                    FIND
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white uppercase font-semibold"
                    onClick={() => setTransitForm({ from: "", to: "", weight: "", bookingDate: "", bookingTime: "" })}
                  >
                    RESET
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setTransitInfoOpen(true)}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline text-sm font-body"
                  >
                    Transit Time and Price Finder Info
                    <Info className="h-4 w-4 text-primary" />
                  </button>
                </div>
                {transitInfoOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setTransitInfoOpen(false)}>
                    <div className="bg-card rounded-lg shadow-xl max-w-md w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                      <div className="bg-teal-800 text-white px-6 py-4 font-display font-semibold">Transit Time & Price Finder</div>
                      <div className="px-6 py-5 text-foreground font-body text-sm space-y-3 bg-muted/30">
                        <p>
                          Use this tool to check transit times and indicative prices for your shipment. Enter origin, destination, weight, and booking details to get results. For volume weight and special cargo, use the Volume Weight Calculator.
                        </p>
                        <p>Results are indicative; final charges may vary based on actual weight, dimensions, and service selected.</p>
                      </div>
                      <div className="px-6 pb-4">
                        <button type="button" onClick={() => setTransitInfoOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Close</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
