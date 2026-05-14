import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const servicesBase = "/services";

const linkClass =
  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

export function ServicesNavDropdown({ isActive }: { isActive: boolean }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-body font-medium transition-colors",
              isActive
                ? "bg-primary/12 text-primary shadow-sm ring-1 ring-primary/20"
                : "text-muted-foreground hover:bg-muted/70 hover:text-primary",
            )}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[min(100vw-2rem,22rem)] gap-1 p-3 md:w-[28rem]">
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-3pl`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">3PL Services</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      End-to-end third-party logistics and inventory programs.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-express`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">Express</div>
                    <p className="text-xs text-muted-foreground">Full truck load & part truck load</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="pl-2">
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-express-ftl`} className={cn(linkClass, "py-2")}>
                    <span className="text-xs font-medium text-muted-foreground">↳ Full Truck Load (FTL)</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="pl-2">
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-express-ptl`} className={cn(linkClass, "py-2")}>
                    <span className="text-xs font-medium text-muted-foreground">↳ Part Truck Load (PTL)</span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-speed-trucking`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">Speed Trucking</div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">Time-definite surface express for urgent cargo.</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-air`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">Air Services</div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">Next-day and priority air cargo nationwide.</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-rail`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">Rail Services</div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">Economical rail express with door-to-door options.</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to={`${servicesBase}#module-warehousing`} className={linkClass}>
                    <div className="text-sm font-semibold leading-none">Warehousing Services</div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">Storage, WMS, and distribution across India.</p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
