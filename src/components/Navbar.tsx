import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRACKER_URL = "https://www.reliable-logistics.com/Logistic/Mobile/Tracker";

const navLinks = [
  { label: "Home", href: "/", external: false },
  { label: "About", href: "/#about", external: false },
  { label: "Services", href: "/#services", external: false },
  { label: "Core Strengths", href: "/core-strengths", external: false },
  { label: "Track", href: TRACKER_URL, external: true },
  { label: "Contact", href: "/#contact", external: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
    const isActive = link.href === "/core-strengths" ? location.pathname === "/core-strengths" : link.href === "/" && location.pathname === "/";
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">R</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Reliable</span>
        </Link>

        {/* Desktop */}
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

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
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
