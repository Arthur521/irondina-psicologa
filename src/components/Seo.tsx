import { SITE, faqItems } from "../site";

export function Seo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Psychologist",
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        image: `${SITE.url}${SITE.ogImage}`,
        telephone: SITE.phoneIntl,
        jobTitle: SITE.jobTitle,
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: SITE.city,
          containedInPlace: { "@type": "State", name: "Goiás" },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        knowsAbout: [
          "Terapia familiar",
          "Terapia de casal e família",
          "Psicologia sistêmica",
          "Conflitos familiares",
          "Terapia individual",
        ],
        availableLanguage: ["Portuguese"],
      },
      {
        "@type": "WebSite",
        name: `${SITE.name} | Psicologia Sistêmica`,
        url: SITE.url,
        inLanguage: "pt-BR",
        description: SITE.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
