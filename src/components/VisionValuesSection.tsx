import { motion } from "framer-motion";
import {
  Eye,
  Building2,
  Award,
  Target,
  Headphones,
  Receipt,
  Users,
  GraduationCap,
  Plane,
  Truck,
  Heart,
  Medal,
  Briefcase,
} from "lucide-react";

const WHY_ITEMS = [
  { icon: Headphones, title: "Customer Service", text: "24/7 support from trained customer care staff." },
  { icon: Receipt, title: "Flexible Pricing / ARC", text: "To Pay, To be billed, or Paid. Annual rate contracts for high-volume corporate clients." },
  { icon: Users, title: "Key Account Management", text: "Dedicated KAM for high-volume corporate customers." },
  { icon: GraduationCap, title: "Expert Staff", text: "Trained personnel for documentation; experienced experts across every logistics function." },
  { icon: Plane, title: "Air / Rail Services", text: "Dedicated wagon and air cargo space for on-time delivery, every time." },
  { icon: Truck, title: "Ground Shipping", text: "Full and dedicated vehicles, trailers, express delivery, and specialized fleet." },
];

const NAV_ITEMS = [
  { id: "about-us", label: "About Us", icon: Building2 },
  { id: "why-choose-us", label: "Why Choose Us", icon: Award },
  { id: "mission", label: "Mission", icon: Target },
  { id: "vision", label: "Vision", icon: Eye },
  { id: "values", label: "Our Values", icon: Heart },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "awards", label: "Awards & certifications", icon: Medal },
  { id: "careers", label: "Careers", icon: Briefcase },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

const VisionValuesSection = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight max-w-3xl mx-auto leading-[1.15]">
            Reliable Logistics{" "}
            <span className="text-primary">Fostering Stronger Connections</span>
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto text-base">
            Our story, our promise, and what we stand for.
          </p>

          <nav className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto" aria-label="Section navigation">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 text-xs sm:text-sm font-medium text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </motion.header>

        <div className="space-y-0">
          <motion.div
            id="about-us"
            {...fadeIn}
            className="grid md:grid-cols-[1fr,1.2fr] gap-8 md:gap-12 items-center py-12 md:py-16 border-b border-border"
          >
            <div className="order-2 md:order-1">
              <span className="inline-block text-[clamp(4rem,12vw,8rem)] font-display font-bold leading-none text-primary/15 select-none">
                2008
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
                Our Journey and Success
              </h3>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
                A wild concept by Mr. Ranganath N, pioneer of Reliable Logistics, with a limited fleet and
                manpower, started in 2008, catering to few corporate customers in metro cities. Today we are a
                full-fledged, multi-modal (Air, Rail & Surface) logistics leader in India, with roots across every
                corner of the country, backed by experienced operations and real-time tracking that gives customers
                control of their shipments like never before.
              </p>
            </div>
          </motion.div>

          <motion.div
            id="why-choose-us"
            {...fadeIn}
            className="py-12 md:py-16 border-b border-border"
          >
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Why Choose Us
              </h3>
              <p className="text-muted-foreground font-body mt-1 text-base">
                Competitive pricing with the best service.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHY_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1 leading-snug">{item.text}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="py-12 md:py-16 border-b border-border"
          >
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              <div id="mission" className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Our Mission
                </h3>
                <blockquote className="pl-6 border-l-4 border-primary text-foreground font-body text-lg md:text-xl leading-relaxed italic">
                  To lead India’s logistics industry with world-class solutions that set new standards for
                  efficiency, reliability, and customer satisfaction, building enduring partnerships through deep
                  client understanding, operational excellence, and unmatched expertise.
                </blockquote>
                <p className="text-muted-foreground font-body mt-6 text-base leading-relaxed">
                  We are equally committed to sustainable logistics: balancing growth with environmental
                  responsibility and positive social impact.
                </p>
              </div>
              <div id="vision" className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Our Vision
                </h3>
                <blockquote className="pl-6 border-l-4 border-primary text-primary font-display font-semibold text-lg md:text-xl leading-relaxed not-italic">
                  "Fostering Stronger Connections"
                </blockquote>
                <p className="text-muted-foreground font-body mt-6 text-base leading-relaxed">
                  To become the most trusted logistics partner, connecting businesses, people, and communities
                  through reliability, innovation, and efficiency. We build relationships that drive growth,
                  collaboration, and exceptional value at every touchpoint.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div id="values" {...fadeIn} className="scroll-mt-24 py-12 md:py-16 border-b border-border">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Our Values</h3>
            <ul className="grid sm:grid-cols-2 gap-4 font-body text-muted-foreground text-sm md:text-base">
              <li className="rounded-xl border border-border bg-card p-4">
                <span className="font-display font-semibold text-foreground">Integrity</span> — Honesty, transparency, and accountability in every shipment we handle.
              </li>
              <li className="rounded-xl border border-border bg-card p-4">
                <span className="font-display font-semibold text-foreground">Customer first</span> — Solutions shaped around your timelines, cargo profile, and growth plans.
              </li>
              <li className="rounded-xl border border-border bg-card p-4">
                <span className="font-display font-semibold text-foreground">Operational rigor</span> — Standardised processes, trained teams, and measurable service quality.
              </li>
              <li className="rounded-xl border border-border bg-card p-4">
                <span className="font-display font-semibold text-foreground">Innovation</span> — Smarter routing, visibility tools, and continuous improvement across modes.
              </li>
            </ul>
          </motion.div>

          <motion.div id="leadership" {...fadeIn} className="scroll-mt-24 py-12 md:py-16 border-b border-border">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Top management &amp; core team</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-base max-w-3xl">
              Reliable Logistics is led by experienced professionals across operations, network planning, finance, and customer
              success. Our core team blends deep domain expertise in air, rail, and surface logistics with a hands-on approach
              to key accounts—so decisions are fast, practical, and aligned with your service expectations.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base max-w-3xl mt-4">
              For leadership enquiries or speaker requests, please reach out through our{" "}
              <a href="/#contact" className="text-primary font-medium hover:underline">
                contact channels
              </a>
              .
            </p>
          </motion.div>

          <motion.div id="awards" {...fadeIn} className="scroll-mt-24 py-12 md:py-16 border-b border-border">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Awards &amp; certifications</h3>
            <ul className="space-y-3 text-muted-foreground font-body text-base max-w-2xl">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-foreground">ISO 9001:2015</strong> — Certified quality management underpinning our
                  nationwide operations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-foreground">Industry recognition</strong> — Trusted by enterprises and growing
                  brands for multi-modal programs across India.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-foreground">Compliance &amp; safety</strong> — Structured documentation, e-compliance
                  hubs, and disciplined handling for sensitive and high-value cargo.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div id="careers" {...fadeIn} className="scroll-mt-24 py-12 md:py-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Careers</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-base max-w-3xl mb-6">
              We are always interested in meeting operations specialists, customer champions, and technology-minded professionals
              who want to build India&apos;s next-generation logistics network.
            </p>
            <a
              href="mailto:cs@reliable-logistics.com?subject=Careers%20%E2%80%94%20Reliable%20Logistics"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Share your profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;
