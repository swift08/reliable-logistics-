import { useState } from "react";
import { MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const CS_EMAIL = "cs@reliable-logistics.com";

function whatsAppHref(): string {
  const digits = import.meta.env.VITE_WHATSAPP_PHONE?.replace(/\D/g, "");
  if (digits) return `https://wa.me/${digits}`;
  return "https://wa.me/9118001215999";
}

export function ChatAssistFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="default"
        size="icon"
        className="fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[100] h-14 w-14 rounded-full shadow-lg ring-2 ring-white/30 hover:scale-105 md:bottom-24 md:right-6"
        onClick={() => setOpen(true)}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-display text-xl">How can we help?</SheetTitle>
            <SheetDescription className="text-left font-body">
              Connect with Reliable Logistics for quotes, tracking help, or general enquiries. We respond during business
              hours.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 flex flex-col gap-3 font-body">
            <a
              href="tel:18001215999"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Toll free</span>
                <span className="font-semibold">1800-121-5999</span>
              </span>
            </a>
            <a
              href={`mailto:${CS_EMAIL}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
                <span className="break-all font-semibold">{CS_EMAIL}</span>
              </span>
            </a>
            <a
              href={whatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <ExternalLink className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</span>
                <span className="font-semibold">Chat on WhatsApp</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground pt-2">
              Mon–Sat, 10:00–19:00 IST. For shipment tracking, use <span className="font-medium text-foreground">Track</span>{" "}
              in the menu.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
