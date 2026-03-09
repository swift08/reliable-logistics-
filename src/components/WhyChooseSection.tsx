import { motion } from "framer-motion";
import { Headphones, FileText, UserCheck, Users, Plane, Truck } from "lucide-react";

const reasons = [
  {
    icon: Headphones,
    title: "Customer Service",
    description: "24/7 customer service availability by trained customer care staffs to attend queries.",
  },
  {
    icon: FileText,
    title: "Flexible Pricing/ARC",
    description: "Shipments on To Pay/To be billed/Paid Basis. Annual rate contract for high volume corporate customer.",
  },
  {
    icon: UserCheck,
    title: "Key Account Mangement",
    description: "We deploy KAM for high volume corporate customers",
  },
  {
    icon: Users,
    title: "Expert Staff",
    description:
      "Deployment of trained staff for easy shipment documentation to our customers. Experienced and expert personnel for each department in logistics stream.",
  },
  {
    icon: Plane,
    title: "Air/Rail Services",
    description:
      "We are one of the best in AIR / RAIL service as we have dedicated wagon and space hired in Air / Rail Cargo help to deliver on time every time.",
  },
  {
    icon: Truck,
    title: "Ground Shipping",
    description: "Full and dedicated vehicles, Trailer Service, express deliveries, specialized vehicles.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Why Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground font-body mt-2">Top Logistics Solutions in INDIA</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
