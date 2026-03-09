import { Package, MapPin, Clock, Calculator, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const TRACKER_URL = "https://www.reliable-logistics.com/Logistic/Mobile/Tracker";

const tools = [
  { icon: Package, label: "Track Shipment", href: TRACKER_URL },
  { icon: MapPin, label: "Find Location", href: "#tools" },
  { icon: Clock, label: "Transit Time", href: "#tools" },
  { icon: Calculator, label: "Price Calculator", href: "#tools" },
  { icon: CalendarCheck, label: "Schedule Pickup", href: "#tools" },
];

const FeatureBar = () => {
  return (
    <section className="relative z-10 section-padding pt-4 pb-4 md:pt-5 md:pb-5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl shadow-2xl border border-border p-2 md:p-3"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-2 justify-items-center items-center">
            {tools.map((tool, i) => {
              const isExternal = tool.href?.startsWith("http");
              const Wrapper = tool.href ? "a" : "button";
              const wrapperProps = tool.href
                ? { href: tool.href, target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined }
                : {};
              return (
                <motion.div key={tool.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="w-full min-w-0 flex justify-center">
                  <Wrapper
                    {...wrapperProps}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer text-center min-h-[88px] sm:min-h-0 w-full max-w-[180px]"
                  >
                    <tool.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors shrink-0 sm:w-7 sm:h-7" />
                    <span className="text-xs sm:text-sm font-semibold font-body text-foreground group-hover:text-primary-foreground transition-colors break-words whitespace-normal leading-tight">
                      {tool.label}
                    </span>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureBar;
