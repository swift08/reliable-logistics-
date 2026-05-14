import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroTruck from "@/assets/hero-truck-sunrise.jpg";
import heroAirplane from "@/assets/hero-airplane.jpg";
import heroVan from "@/assets/hero-delivery-van.jpg";
import heroTrain from "@/assets/train.png";

const slides = [
  {
    image: heroTruck,
    headline: "Fostering Stronger Connections",
    subtext: "India's most trusted logistics partner, connecting businesses, people, and communities through reliability, innovation, and efficiency.",
  },
  {
    image: heroVan,
    headline: "World-Class Logistics Solutions",
    subtext: "Setting new standards for efficiency, reliability, and customer satisfaction across India.",
  },
  {
    image: heroTrain,
    headline: "Rail Freight Built For Scale",
    subtext: "High-volume cargo on India's rail network—cost-effective, dependable, and aligned with your supply chain timelines.",
  },
  {
    image: heroAirplane,
    headline: "Air Freight That Moves At The Speed Of Business",
    subtext: "Express air cargo services connecting cities nationwide with operational excellence.",
  },
  {
    image: heroVan,
    headline: "We Don't Just Deliver Packages.\nWe Deliver Promises.",
    subtext: "From warehouse to doorstep. Building enduring partnerships at every touchpoint.",
  },
];

const slideMotion = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.8 },
};

const copyMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45 },
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slideImage = (imgClassName: string) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={slideMotion.initial}
        animate={slideMotion.animate}
        exit={slideMotion.exit}
        transition={slideMotion.transition}
        className="absolute inset-0 left-0 right-0 w-full min-w-0 bg-black"
      >
        <img
          ref={(el) => {
            if (!el) return;
            el.setAttribute("fetchpriority", current === 0 ? "high" : "low");
          }}
          src={slides[current].image}
          alt={slides[current].headline.replace(/\n/g, " ")}
          className={imgClassName}
          width={1920}
          height={1080}
          sizes="100vw"
          loading={current === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </motion.div>
    </AnimatePresence>
  );

  const carouselChrome = (variant: "mobile" | "desktop") => {
    /* Keep clear of fixed Chat + WhatsApp (right column, z-[100]). */
    const arrowBottom = variant === "mobile" ? "bottom-3" : "bottom-52 lg:bottom-48";
    const dotsBottom = variant === "mobile" ? "bottom-14" : "bottom-52 lg:bottom-48";
    const arrowSide =
      variant === "mobile"
        ? "left-3 right-auto sm:left-6"
        : "right-[calc(1.5rem+3.5rem+1rem)] sm:right-28 md:right-28 lg:right-32";
    const dotIdle =
      variant === "mobile" ? "bg-muted-foreground/50" : "bg-primary-foreground/40";
    const btnBg =
      variant === "mobile"
        ? "bg-background/85 text-foreground shadow-sm"
        : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30";

    return (
      <>
        <div className={`absolute ${arrowBottom} ${arrowSide} z-10 flex gap-2`}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${btnBg}`}
          >
            <ChevronLeft size={22} aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${btnBg}`}
          >
            <ChevronRight size={22} aria-hidden />
          </button>
        </div>

        <div
          className={`absolute ${dotsBottom} left-1/2 z-10 flex -translate-x-1/2 gap-2`}
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-10 bg-primary" : `w-4 ${dotIdle}`
              }`}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative left-0 right-0 flex w-full scroll-mt-0 flex-col overflow-hidden md:block md:h-[100vh] md:min-h-[600px]"
    >
      {/* Mobile: copy above image (nothing overlaid on photo) */}
      <div className="shrink-0 bg-background px-4 pb-3 pt-20 sm:px-6 md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={copyMotion.initial}
            animate={copyMotion.animate}
            exit={copyMotion.exit}
            transition={copyMotion.transition}
            className="w-full text-center"
          >
            <h1 className="mb-3 whitespace-pre-line font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {slides[current].headline}
            </h1>
            <p className="mx-auto max-w-lg font-body text-base text-muted-foreground sm:text-lg">
              {slides[current].subtext}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: image only */}
      <div className="relative h-[min(42vh,420px)] min-h-[240px] w-full shrink-0 overflow-hidden bg-black md:hidden">
        {slideImage("h-full w-full min-w-0 object-contain object-center")}
        {carouselChrome("mobile")}
      </div>

      {/* Mobile: CTAs below image */}
      <div className="shrink-0 bg-background px-4 py-6 sm:px-6 md:hidden">
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
            <a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer">
              Track Shipment
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild className="w-full border-2 border-primary text-primary hover:bg-primary/5 sm:w-auto">
            <a href="#tools">Get Transit Time</a>
          </Button>
        </div>
      </div>

      {/* Desktop: full-viewport overlay layout */}
      <div className="relative hidden min-h-0 md:absolute md:inset-0 md:block md:h-full">
        {slideImage("h-full w-full min-w-0 object-cover")}
        <div className="absolute inset-0 left-0 right-0 w-full hero-gradient-overlay" />

        <div className="absolute inset-0 left-0 right-0 flex w-full items-center justify-center px-4 sm:px-6">
          <div className="flex w-full max-w-2xl justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full text-center"
              >
                <h1 className="mb-6 whitespace-pre-line font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-7xl">
                  {slides[current].headline}
                </h1>
                <p className="mx-auto mb-10 max-w-lg font-body text-lg text-primary-foreground/80 md:text-xl">
                  {slides[current].subtext}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button variant="hero" size="xl" asChild>
                    <a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer">
                      Track Shipment
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <a href="#tools">Get Transit Time</a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {carouselChrome("desktop")}
      </div>
    </section>
  );
};

export default HeroSection;
