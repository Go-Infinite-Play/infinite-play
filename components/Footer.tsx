import { contactInfo } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background/60 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <span>
          © {year} Infinite Play LLC · {contactInfo.location}
        </span>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-background transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
