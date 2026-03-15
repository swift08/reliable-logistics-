import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Reliable Logistics Ranganath and this team have handled my shipping demands for 10 years, reliably and professionally. Yet no matter how much they grow RL feels like my own in-house shipping department. Really a great company.",
    author: "Mr. Sundar Reddy",
  },
  {
    quote:
      "Customer service is a priority with the Reliable Logistics team. We feel we have logistics partner and not a run of the mill transportation supplier. The amazing team!! Very helpful and considerate with a sense of urgency. Consignment are 99 on time and the rates are very competitive.",
    author: "Shri. Rajan Verma",
  },
  {
    quote:
      "We count on vendors being our partners with same sense of urgency as we have. I personally count on Reliable Logistics team as my number ONE partner. There hasn't been a time when Reliable Logsitics hasn't delivered let that be routine or hot rush hour they deliver every time on time",
    author: "Shri. Vijay Bhaskar",
  },
];

// Duplicate for seamless loop
const testimonialsLoop = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Trusted Clients
          </h2>
          <p className="text-muted-foreground font-body mt-2">Testimonials from our esteemed clients</p>
        </motion.div>

        {/* News ticker: horizontal scroll */}
        <div className="relative w-full [contain:layout_paint]">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" aria-hidden />
          <motion.div
            className="flex gap-6 md:gap-8 shrink-0 w-[max-content] py-2"
            style={{ willChange: "transform" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {testimonialsLoop.map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className="w-[300px] md:w-[360px] shrink-0 bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col h-[380px] md:h-[420px]"
              >
                <Quote size={32} className="text-primary/40 mb-4 shrink-0" />
                <p className="text-foreground font-body text-sm leading-relaxed flex-1 mb-6 line-clamp-6 md:line-clamp-7 overflow-hidden">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-display font-semibold text-foreground text-sm shrink-0">{t.author}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
