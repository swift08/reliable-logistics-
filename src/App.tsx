import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { DocumentHead } from "@/components/DocumentHead";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ChatAssistFloat } from "@/components/ChatAssistFloat";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background" aria-busy="true" aria-label="Loading page">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    <div className="mt-6 h-4 w-48 max-w-[80%] rounded bg-muted animate-pulse" />
    <div className="mt-3 h-4 w-64 max-w-[90%] rounded bg-muted/80 animate-pulse" />
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <DocumentHead />
      <ErrorBoundary>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/core-strengths" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <ChatAssistFloat />
      <WhatsAppFloat />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
