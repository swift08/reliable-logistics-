import { motion } from "framer-motion";
import { Plane, Truck, Train, PackageCheck, Warehouse, Layers } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "AIR FREIGHT",
    description:
      "We are specialist's in assured delivery next day before noon at prime locations and all major destinations during business days and Hours.",
  },
  {
    icon: Truck,
    title: "GROUND FREIGHT",
    description:
      "We are specialized in handling the over dimensioned cargo with superior quality. We offer FTL (Full Truck Load) service on PAN INDIA basis.",
  },
  {
    icon: Train,
    title: "TRAIN FREIGHT",
    description:
      "Our speciality is door to door delivery service even with our rail service. Our Hassel free, fast clearance and lesser transit time, above all its highly economical and very competitive in price.",
  },
  {
    icon: PackageCheck,
    title: "VALUE ADDED SERVICES",
    description: "COD shipments, DACC, Special Deliveries, TO PAY Deliveries",
  },
  {
    icon: Warehouse,
    title: "WAREHOUSE",
    description: "Large warehousing spaces available in our branches and hubs across in INDIA",
  },
  {
    icon: Layers,
    title: "MULTI MODE",
    description: "Multi mode services with Air, Rail, Road FTL & LCV",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            We have wide network of offices in all major locations to help you with the services we offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="feature-card group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
