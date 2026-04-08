import { SITE } from "./constants";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["NursingHome", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: "Skagit River AFH",
  description: SITE.description,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/images/logo.svg`,
  },
  image: `${SITE.url}/gallery/dsc00600.webp`,
  telephone: ["+13607232907", "+13609822076"],
  faxNumber: "+13607556066",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.4291,
    longitude: -122.3343,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
      description: "Office hours",
    },
  ],
  specialOpeningHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
    description: "24/7 awake care staff on site",
  },
  areaServed: {
    "@type": "City",
    name: "Mount Vernon",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Skagit County",
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
  },
  numberOfRooms: 6,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "24/7 Awake Staff", value: true },
    { "@type": "LocationFeatureSpecification", name: "RN Delegated Medication Management", value: true },
    { "@type": "LocationFeatureSpecification", name: "Memory Care", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hospice Support", value: true },
    { "@type": "LocationFeatureSpecification", name: "Respite Care", value: true },
    { "@type": "LocationFeatureSpecification", name: "Home-Cooked Meals", value: true },
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Washington State DSHS License",
    value: SITE.license,
  },
  priceRange: "$$",
  paymentAccepted: "Private Pay, Long-Term Care Insurance",
  currenciesAccepted: "USD",
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.legalName,
  url: SITE.url,
  description: `Official website of ${SITE.legalName} in ${SITE.address.city}, ${SITE.address.state}.`,
  publisher: {
    "@id": `${SITE.url}/#business`,
  },
  inLanguage: "en-US",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What levels of care do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide comprehensive care ranging from minimal assistance with daily activities to more intensive support for mobility issues and age-related conditions. We conduct a thorough assessment before admission to ensure we can fully meet your loved one's needs.",
      },
    },
    {
      "@type": "Question",
      name: "How many residents do you care for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a licensed adult family home in Washington State, we care for a small number of residents. This allows us to maintain the high staff-to-resident ratio and personalized attention that sets us apart from larger facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can we visit anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Family visits are always welcome during our visiting hours. We encourage regular visits as they are vital to our residents' well-being. We ask that you schedule tours in advance so we can give you our full attention.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept long-term care insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We accept private pay (check, ACH, or other arrangements) and work with families who use long-term care insurance. We can provide documentation and assist with forms required by your LTC insurance provider.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my loved one's needs change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Care plans are living documents. We review and update them regularly and whenever needs change, in partnership with families and physicians. If a higher level of care is needed, we coordinate closely with healthcare providers to adjust support.",
      },
    },
    {
      "@type": "Question",
      name: "Is there always someone awake at the home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We maintain 24/7 awake staff coverage. There is always an alert, responsive caregiver available day and night for any need that arises.",
      },
    },
  ],
};

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skagitriverafh.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `https://skagitriverafh.com${path}`,
      },
    ],
  };
}
