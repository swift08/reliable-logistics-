import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const leadership = [
  { name: "Rajesh Kumar", email: "rajesh.kumar@reliable-logistics.com", designation: "Chief Executive Officer", photo: "/placeholder.svg" },
  { name: "Priya Sharma", email: "priya.sharma@reliable-logistics.com", designation: "Chief Operations Officer", photo: "/placeholder.svg" },
  { name: "Amit Patel", email: "amit.patel@reliable-logistics.com", designation: "Chief Financial Officer", photo: "/placeholder.svg" },
];

const departments = [
  { name: "Accounts", photo: "/placeholder.svg" },
  { name: "Operations", photo: "/placeholder.svg" },
  { name: "Customer Service", photo: "/placeholder.svg" },
  { name: "Warehouse & Logistics", photo: "/placeholder.svg" },
];

const OurTeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Leadership & Departments
          </h2>
          <p className="text-muted-foreground font-body mt-2 max-w-2xl mx-auto">
            Meet the heads of our organization and the teams that keep us moving.
          </p>
        </motion.div>

        {/* Leadership - company heads */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-foreground mb-8 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-muted border-2 border-border">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg">{person.name}</h4>
                <p className="text-primary font-body text-sm font-medium mt-1">{person.designation}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm font-body mt-3 transition-colors"
                >
                  <Mail size={14} />
                  {person.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Departments - group + name */}
        <div>
          <h3 className="text-xl font-display font-bold text-foreground mb-8 text-center">Departments</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-muted border border-border mb-3">
                  <img
                    src={dept.photo}
                    alt={dept.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{dept.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
