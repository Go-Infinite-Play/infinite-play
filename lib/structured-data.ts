import { contactInfo } from "./constants";

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://infiniteplay.ai/#organization",
        name: "Infinite Play",
        description:
          "I help teams move past the experimentation phase with Claude and build real workflows that save hours every week. Claude implementation consulting for businesses ready to get results.",
        url: "https://infiniteplay.ai",
        founder: {
          "@type": "Person",
          "@id": "https://infiniteplay.ai/#person",
        },
        areaServed: "US",
        serviceType: "Claude Implementation Consulting",
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
        "@id": "https://infiniteplay.ai/#person",
        name: "Jeremy Olken",
        jobTitle: "Claude Implementation Consultant",
        url: "https://infiniteplay.ai",
        sameAs: [contactInfo.linkedin],
        worksFor: {
          "@type": "ProfessionalService",
          "@id": "https://infiniteplay.ai/#organization",
        },
      },
    ],
  };
}
