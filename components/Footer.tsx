import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden />
            <span className="font-heading font-semibold text-[15px] tracking-tight text-foreground">
              {footerContent.brand}
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            {footerContent.tagline}
          </p>
        </div>
        {footerContent.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => {
                const external = "external" in link && link.external;
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </span>
        <span className="text-xs text-muted-foreground">
          Based in Denver, CO
        </span>
      </div>
    </footer>
  );
}
