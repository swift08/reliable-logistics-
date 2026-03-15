import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

const TRACKER_URL = "https://www.reliable-logistics.com/Logistic/Mobile/Tracker";

const NAV_ORDER = [
  "Home",
  "Services",
  "About",
  "Tools",
  "Track",
  "Contact",
] as const;

const navLinksMap = {
  Home: { href: "/", external: false as const },
  About: { href: "/about", external: false as const },
  Services: { href: "/services", external: false as const },
  Tools: { href: "/#tools", external: false as const },
  Track: { href: TRACKER_URL, external: true as const },
  Contact: { href: "/#contact", external: false as const },
};

const navLinks = NAV_ORDER.map((label) => ({ label, ...navLinksMap[label] }));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderLink = (link: (typeof navLinks)[0]) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </a>
      );
    }
    const isActive = link.href === "/about" ? location.pathname === "/about" : link.href === "/services" ? location.pathname === "/services" : link.href === "/" ? location.pathname === "/" : false;
    return (
      <Link
        to={link.href}
        className={`text-sm font-body font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border w-full"
    >
      <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6">
        <Link to="/" onClick={handleLogoClick} className="flex items-center shrink-0">
          <img src={logoImage} alt="Reliable Logistics" className="h-12 w-auto max-w-[220px] object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <span key={link.label}>{renderLink(link)}</span>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:18001215999" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} className="text-primary" />
            1800-121-5999
          </a>
          <Button variant="default" size="sm">Get Quote</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="w-full px-4 py-4 space-y-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-base font-body font-medium text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-body font-medium text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button variant="default" size="sm" className="w-full">Get Quote</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
