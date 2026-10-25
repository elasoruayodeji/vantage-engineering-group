import { Helmet } from 'react-helmet-async';
import { SITE_URL, COMPANY_NAME, SHORT_NAME, TAGLINE } from '../data/content';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const defaultTitle = `${SHORT_NAME} | Engineering & Infrastructure Solutions`;
const defaultDescription = `Explore integrated civil, structural, MEP, industrial, energy, and infrastructure engineering services from ${SHORT_NAME} in Lagos, Nigeria.`;
const defaultImage = 'https://images.unsplash.com/photo-1764449321624-913ca52646c6?auto=format&fit=crop&w=1200&q=80';

export default function SEO({
  title,
  description = defaultDescription,
  canonical,
  image = defaultImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SHORT_NAME}` : defaultTitle;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NG" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content={author || COMPANY_NAME} />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />
      <meta name="theme-color" content="#0A1628" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

// Default Organization Schema for all pages
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  alternateName: SHORT_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: TAGLINE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24 Meridian Business Avenue',
    addressLocality: 'Victoria Island, Lagos',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-807-569-0088',
    contactType: 'customer service',
    email: 'elasoruayodeji@gmail.com',
    availableLanguage: ['English'],
  },
  sameAs: [],
  areaServed: [
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Place', name: 'West Africa' },
  ],
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EngineeringBusiness',
  name: COMPANY_NAME,
  image: defaultImage,
  url: SITE_URL,
  telephone: '+234-807-569-0088',
  email: 'elasoruayodeji@gmail.com',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24 Meridian Business Avenue',
    addressLocality: 'Victoria Island, Lagos',
    addressRegion: 'Lagos State',
    postalCode: '100001',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.4281,
    longitude: 3.4219,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [],
};

// Breadcrumb Schema helper
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
