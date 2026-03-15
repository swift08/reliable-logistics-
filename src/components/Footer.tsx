import { Package, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import logoImage from "@/assets/logo.png";

const MAP_LINK = "https://maps.app.goo.gl/CSQsc7HKQ4jdwirn6";
const MAP_EMBED_QUERY = "SER+Logistics+Park,+Survey+No.34,+Madanayakanahalli,+Dasanapura+Hobli,+Bengaluru+562162";

const Footer = () => {
  return (
    <footer id="contact" className="bg-section-dark text-section-dark-foreground scroll-mt-20">
      <div className="bg-white text-gray-900">
        <div className="section-container px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 md:divide-x md:divide-gray-200 items-start justify-items-center md:justify-items-stretch">
            <div className="text-center md:text-left w-full min-w-0">
              <p className="font-display font-bold text-lg text-red-600">ISO 9001:2015</p>
              <p className="text-sm font-body text-gray-900">Certified Company</p>
            </div>
            <div className="text-center md:text-left md:pl-8 w-full min-w-0">
              <p className="font-display font-bold text-lg text-red-600">1800-121-5999</p>
            </div>
            <div className="text-center md:text-left md:pl-8 w-full min-w-0">
              <p className="font-body text-gray-900 text-sm">+91 8023717521</p>
              <p className="font-body text-gray-900 text-sm">+91 8023718477</p>
            </div>
            <div className="text-center md:text-left md:pl-8 w-full min-w-0">
              <a href="mailto:customersupport@reliable-logistics.com" className="font-body text-gray-900 hover:underline block text-sm break-all">customersupport@reliable-logistics.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className="min-w-0">
            <div className="flex items-center justify-start mb-4">
              <img src={logoImage} alt="Reliable Logistics" className="h-10 w-auto max-w-[160px] object-contain" />
            </div>
            <p className="text-section-dark-foreground/60 font-body text-sm leading-relaxed text-left">
              Fostering stronger connections. We look forward to building a long-lasting and mutually rewarding business relationship with your esteemed organization.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="font-display font-bold text-base mb-4 text-left">Company</h4>
            <ul className="space-y-2 text-sm font-body text-section-dark-foreground/60">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-display font-bold text-base mb-4 text-left">Quick Tools</h4>
            <ul className="space-y-2 text-sm font-body text-section-dark-foreground/60">
              <li><a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2"><Package size={14} /> Track Shipment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><MapPin size={14} /> Find Location</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transit Time Finder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Price Calculator</a></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-display font-bold text-base mb-4 text-left">Contact</h4>
            <ul className="space-y-3 text-sm font-body text-section-dark-foreground/60">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> Toll Free: 1800-121-5999</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> +91 8023717521</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> +91 8023718477</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary shrink-0" /> <a href="mailto:customersupport@reliable-logistics.com" className="hover:text-primary transition-colors">customersupport@reliable-logistics.com</a></li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-primary shrink-0" /> Mon to Sat 10:00 to 19:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-section-dark-foreground/10 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 min-w-0">
            <h4 className="font-display font-bold text-base mb-4 flex items-center gap-2 text-left">
              <MapPin size={18} className="text-primary shrink-0" /> Location
            </h4>
            <address className="text-sm font-body text-section-dark-foreground/80 not-italic space-y-1 text-left">
              <p>SER Logistics Park, 1st Floor,</p>
              <p>Survey No. 34, Madanayakanahalli Dasanapura Hobli,</p>
              <p>Off Tumkur Road,</p>
              <p className="text-primary font-semibold">Bengaluru-562162</p>
            </address>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-body text-primary hover:underline"
            >
              <ExternalLink size={14} /> Open in Google Maps
            </a>
          </div>
          <div className="lg:col-span-3 min-w-0">
            <p className="font-display font-bold text-base mb-2 text-left">Find us</p>
            <div className="rounded-lg overflow-hidden border border-section-dark-foreground/20 bg-section-dark-foreground/5 h-[140px] sm:h-[160px] w-full max-w-md">
              <iframe
                src={`https://www.google.com/maps?q=${MAP_EMBED_QUERY}&output=embed`}
                title="Reliable Logistics - SER Logistics Park, Bengaluru - Google Maps"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm font-body text-primary hover:underline"
            >
              <ExternalLink size={14} /> Open in Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 mt-8 pt-6 text-center">
          <p className="text-sm font-body text-section-dark-foreground/40">
            © 2026 Reliable Logistics Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
