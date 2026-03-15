import { motion } from "framer-motion";
import { Settings, Shield, Vote, Handshake, Plane, Award } from "lucide-react";

const achievements = [
  {
    icon: Settings,
    title: "16+ YEARS WITH ABB INDIA LTD AND HITACHI",
    description: "Uninterrupted and continued relationship. Achieved high audit scores in Global and Domestic evaluations.",
  },
  {
    icon: Shield,
    title: "OPERATION SINDHOOR",
    description: "In association with BEL: Logistic support to Indian Armed Forces (Air Force, Navy, and Border units) for critical deliveries.",
  },
  {
    icon: Vote,
    title: "NATIONWIDE EVM DELIVERY FOR BEL",
    description: "Successfully executed delivery operations for the 2014 & 2019 General Lok Sabha Elections.",
  },
  {
    icon: Handshake,
    title: "TRUSTED BY CLIENTS",
    description: "High retention rate since inception. Sustained through long-term relationships grounded in trust, consistency, and performance.",
  },
  {
    icon: Plane,
    title: "DEDICATED SUPPORT TO BEL & HAL",
    description: "3 years of continuous operations for Tejas & Engine Divisions.",
  },
  {
    icon: Award,
    title: "REPEATED INDUSTRY RECOGNITION & CERTIFICATIONS",
    description: "For reliability, turnaround time, and customer service. Certificate of Appreciation from ABB India & Bharat Electronics Ltd (Ministry of Defence). Honored for outstanding logistics support and service excellence.",
  },
];

const TrackRecordSection = () => {
  return (
    <section className="section-padding bg-background scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground uppercase tracking-tight">
            Notable Track Record
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
