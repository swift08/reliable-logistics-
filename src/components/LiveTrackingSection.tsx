import { motion } from "framer-motion";
import { ClipboardCheck, Warehouse, Truck, Building2, MapPin, CheckCircle } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, label: "Shipment Booked", time: "9:00 AM" },
  { icon: Warehouse, label: "Shipment Received at Booking Branch", time: "10:00 AM" },
  { icon: Truck, label: "Shipment In transit", time: "11:30 AM" },
  { icon: Building2, label: "Shipment Received at destination branch", time: "1:00 PM" },
  { icon: MapPin, label: "Out for delivery", time: "2:15 PM" },
  { icon: CheckCircle, label: "Delivered", time: "3:45 PM" },
];

const LiveTrackingSection = () => {
  return (
    <section className="py-6 px-4 md:py-8 md:px-6 bg-background h-full min-h-[320px] md:min-h-[380px] flex flex-col">
      <div className="w-full max-w-full flex-1 flex flex-col">
        <div className="max-w-2xl w-full flex flex-col flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-4"
          >
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Live Delivery Journey
            </h2>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Track every step of your shipment with our real-time visual timeline.
            </p>
          </motion.div>

          <div className="w-full flex-1 flex flex-col justify-center">
            <div className="w-full">
            <div className="relative flex flex-nowrap gap-0 overflow-x-auto pb-1 md:overflow-visible [-webkit-overflow-scrolling:touch]">
              <div
                className="absolute left-0 right-0 top-4 h-0.5 bg-border rounded-full min-w-full"
                aria-hidden="true"
              />
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex-1 flex flex-col items-center min-w-[72px] md:min-w-0 shrink-0 md:shrink px-0.5 md:px-1"
                >
                  <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ring-2 ring-background">
                    <StepIcon size={14} className="text-primary-foreground" />
                  </div>
                  <div className="mt-3 w-full min-h-[72px] md:min-h-[80px] flex flex-col justify-center">
                    <div className="feature-card py-2 px-1.5 md:px-2 text-center">
                      <h3 className="font-display font-bold text-foreground text-[10px] md:text-xs leading-snug">
                        {step.label}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTrackingSection;
