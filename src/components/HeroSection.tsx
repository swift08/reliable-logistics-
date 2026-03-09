import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroTruck from "@/assets/hero-truck-sunrise.jpg";
import heroAirplane from "@/assets/hero-airplane.jpg";
import heroShip from "@/assets/hero-ship.jpg";
import heroVan from "@/assets/hero-delivery-van.jpg";

const slides = [
  {
    image: heroTruck,
    headline: "WE PROVIDE FASTEST & AFFORDABLE TRANSPORT SERVICES",
    subtext: "Our \"GO ANYWHERE\" attitude ensures on time deliveries to all locations across INDIA.",
  },
  {
    image: heroTruck,
    headline: "Delivering Trust Before The Day Begins",
    subtext: "Reliable logistics solutions across India with speed, safety and commitment.",
  },
  {
    image: heroAirplane,
    headline: "Air Freight That Moves At The Speed Of Business",
    subtext: "Express air cargo services connecting cities nationwide.",
  },
  {
    image: heroShip,
    headline: "Global Shipping. Local Commitment.",
    subtext: "International freight solutions with end-to-end tracking and care.",
  },
  {
    image: heroVan,
    headline: "We Don't Just Deliver Packages.\nWe Deliver Promises.",
    subtext: "From warehouse to doorstep. Right on time.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight whitespace-pre-line mb-6">
                {slides[current].headline}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-10 max-w-lg">
                {slides[current].subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer">
                    Track Shipment
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl">
                  Get Transit Time
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronLeft size={24} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronRight size={24} aria-hidden />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-primary" : "w-4 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
