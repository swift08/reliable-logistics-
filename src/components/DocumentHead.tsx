import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Reliable Logistics";
const BASE_URL = typeof import.meta.env.VITE_BASE_URL === "string" && import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL.replace(/\/$/, "")
  : "https://www.reliable-logistics.com";

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${SITE_NAME} | India's Trusted Multi-Modal Logistics Partner | Air, Rail & Road`,
    description:
      "Reliable Logistics Solutions Pvt. Ltd. – ISO 9001:2015 certified. Door-to-door delivery, air freight, rail express, 3PL warehousing. 14,000+ locations. Toll-free 1800-121-5999.",
  },
  "/about": {
    title: `About Us | ${SITE_NAME} – Our Journey, Mission & Vision`,
    description:
      "Since 2008, Reliable Logistics has grown into a full-fledged multi-modal logistics leader. Our mission, vision and why leading enterprises choose us.",
  },
  "/core-strengths": {
    title: `Core Strengths | ${SITE_NAME} – ISO Certified, 24/7, Pan India`,
    description:
      "Our core strengths: ISO 9001:2015 certification, 24/7 availability, air and rail services, expert staff, warehousing and dedicated customer support.",
  },
  "/services": {
    title: `Logistics Services | ${SITE_NAME} – Air, Rail, Road & Warehousing`,
    description:
      "End-to-end logistics: door pickup & delivery, multi-modal freight, real-time tracking, 24/7 support, 3PL warehousing. Air, rail and surface transport across India.",
  },
};

const DEFAULT_META = {
  title: `${SITE_NAME} | India's Trusted Multi-Modal Logistics Partner`,
  description:
    "ISO 9001:2015 certified logistics. Air, rail & road. 14,000+ locations. Toll-free 1800-121-5999.",
};

export const DocumentHead = () => {
  const { pathname } = useLocation();
  const meta = ROUTE_META[pathname] ?? DEFAULT_META;

  useEffect(() => {
    document.title = meta.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const url = pathname === "/" ? BASE_URL : `${BASE_URL}${pathname}`;
      canonical.setAttribute("href", url);
    }
  }, [pathname, meta.title, meta.description]);

  return null;
};
