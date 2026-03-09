import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Reliable Logistics Ranganath and this team have handled my shipping demands for 10 years – reliably and professionally. Yet no matter how much they grow RL feels like my own in-house shipping department. Really a great company.",
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

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Trusted Clients
          </h2>
          <p className="text-muted-foreground font-body mt-2">Testimonials from our esteemed clients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col"
            >
              <Quote size={32} className="text-primary/40 mb-4" />
              <p className="text-foreground font-body leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-display font-semibold text-foreground">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
