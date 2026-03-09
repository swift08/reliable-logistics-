import { Package, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const MAP_LINK = "https://maps.app.goo.gl/CSQsc7HKQ4jdwirn6";
const MAP_EMBED_QUERY = "Survey+No.+34,+Madanayakanahalli,+Dasanapura+Hobli,+Bengaluru+562123";

const Footer = () => {
  return (
    <footer id="contact" className="bg-section-dark text-section-dark-foreground scroll-mt-20">
      {/* Certification & contact strip */}
      <div className="bg-white text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 py-6 w-full max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-lg text-red-600">ISO 9001:2015</p>
              <p className="text-sm font-body text-gray-900">Certified Company</p>
            </div>
            <div className="text-center md:text-left md:pl-8">
              <p className="text-sm font-body text-gray-500 uppercase tracking-wide mb-1">Call us</p>
              <p className="font-body text-gray-900">Toll Free: 1800-121-5999</p>
              <p className="font-body text-gray-900 text-sm">(+91) 080-2371 7521 / 23718477</p>
            </div>
            <div className="text-center md:text-left md:pl-8">
              <p className="text-sm font-body text-gray-500 uppercase tracking-wide mb-1">Email us</p>
              <a href="mailto:customersupport@reliable-logistics.com" className="font-body text-gray-900 hover:underline block">customersupport@reliable-logistics.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">R</span>
              </div>
              <span className="font-display font-bold text-xl">Reliable Logistics Solutions Pvt. Ltd.</span>
            </div>
            <p className="text-section-dark-foreground/60 font-body text-sm leading-relaxed">
              Delivering more than packages. Delivering trust. Your reliable logistics partner across India.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-body text-section-dark-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Quick Tools</h4>
            <ul className="space-y-2 text-sm font-body text-section-dark-foreground/60">
              <li><a href="https://www.reliable-logistics.com/Logistic/Mobile/Tracker" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2"><Package size={14} /> Track Shipment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><MapPin size={14} /> Find Location</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transit Time Finder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Price Calculator</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-body text-section-dark-foreground/60">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> Toll Free: 1800-121-5999</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> (+91) 080-2371 7521 / 23718477</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary shrink-0" /> <a href="mailto:customersupport@reliable-logistics.com" className="hover:text-primary transition-colors">customersupport@reliable-logistics.com</a></li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-primary shrink-0" /> Mon – Sat 10:00 – 19:00</li>
            </ul>
          </div>
        </div>

        {/* Head Office & Mini Map */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base mb-4">Head Office</h4>
            <address className="text-sm font-body text-section-dark-foreground/80 not-italic space-y-2">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                Survey No. 34, Madanayakanahalli, Dasanapura Hobli, Off Tumkur Road, Next to SER Logistics Park, Behind Bhoruka English School, Bengaluru 562123.
              </p>
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
          <div className="lg:col-span-3">
            <p className="font-display font-bold text-base mb-2">Find us</p>
            <div className="rounded-lg overflow-hidden border border-section-dark-foreground/20 bg-section-dark-foreground/5 h-[140px] sm:h-[160px] max-w-md">
              <iframe
                src={`https://www.google.com/maps?q=${MAP_EMBED_QUERY}&output=embed`}
                title="Reliable Logistics Head Office - Google Maps"
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

        <div className="border-t border-section-dark-foreground/10 mt-6 pt-6 text-center">
          <p className="text-sm font-body text-section-dark-foreground/40">
            © 2026 Reliable Logistics Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
