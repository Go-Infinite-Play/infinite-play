import { contactInfo, siteConfig } from "./constants";

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        founder: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
        },
        areaServed: "US",
        serviceType: "AI consulting, training, and custom systems",
        priceRange: "$$-$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Denver",
          addressRegion: "CO",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: contactInfo.email,
          contactType: "sales",
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Jeremy Olken",
        jobTitle: "Founder, Infinite Play",
        url: siteConfig.url,
        sameAs: [contactInfo.linkedin],
        worksFor: {
          "@type": "ProfessionalService",
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
}
