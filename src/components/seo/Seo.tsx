import { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../../assets/chfLogo.png'
interface MetaTag {
    name?: string;
    property?: string;
    content: string;
}

interface SEOProps {
    title?: string;
    titleTemplate?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    author?: string;
    twitterHandle?: string;
    lang?: string;
    robots?: string;
    canonical?: string;
    meta?: MetaTag[];
}

const SITE_DEFAULTS: Required<Omit<SEOProps, 'meta'>> & { meta: MetaTag[] } = {
    title: 'Chitrapur Heritage Foundation USA',
    titleTemplate: '%s | Chitrapur Heritage Foundation USA',
    description:
        'CHF USA is a nonprofit committed to preserving and promoting the cultural heritage, values, and sustainable development of the Chitrapur Saraswat community in the USA.',
    keywords:
        'Chitrapur Heritage, Saraswat community, culture preservation, nonprofit USA, sustainable development, Chitrapur events',
    url: 'https://chfusa.org/',
    image: `https://chfusa.org${logo}`,
    author: 'Chitrapur Heritage Foundation USA',
    twitterHandle: '@CHFUSA',
    lang: 'en',
    robots: 'index,follow',
    canonical: 'https://chfusa.org/',
    meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
};


function buildJsonLd(props: Required<Omit<SEOProps, 'meta'>>): string {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": props.title,
        "url": props.url,
        "description": props.description,
        "author": {
            "@type": "Person",
            "name": props.author,
        },
        "image": props.image,
    });
}

export function HelmetRoot({ children }: { children: ReactNode }) {
    return <HelmetProvider>{children}</HelmetProvider>;
}

export default function SEO({
    title,
    titleTemplate,
    description,
    keywords,
    url,
    image,
    author,
    twitterHandle,
    lang,
    robots,
    canonical,
    meta,
}: SEOProps) {
    const final = {
        title: title ?? SITE_DEFAULTS.title,
        titleTemplate: titleTemplate ?? SITE_DEFAULTS.titleTemplate,
        description: description ?? SITE_DEFAULTS.description,
        keywords: keywords ?? SITE_DEFAULTS.keywords,
        url: url ?? SITE_DEFAULTS.url,
        image: image ?? SITE_DEFAULTS.image,
        author: author ?? SITE_DEFAULTS.author,
        twitterHandle: twitterHandle ?? SITE_DEFAULTS.twitterHandle,
        lang: lang ?? SITE_DEFAULTS.lang,
        robots: robots ?? SITE_DEFAULTS.robots,
        canonical: canonical ?? SITE_DEFAULTS.canonical,
        meta: meta ?? SITE_DEFAULTS.meta,
    };

    const jsonLd = buildJsonLd(final);

    return (
        <Helmet defaultTitle={SITE_DEFAULTS.title} titleTemplate={final.titleTemplate}>
            <html lang={final.lang} />
            <title>{final.title}</title>

            <meta name="description" content={final.description} />
            <meta name="keywords" content={final.keywords} />
            <meta name="author" content={final.author} />
            <meta name="robots" content={final.robots} />

            <link rel="canonical" href={final.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={final.title} />
            <meta property="og:description" content={final.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={final.url} />
            <meta property="og:image" content={final.image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={final.title} />
            <meta name="twitter:description" content={final.description} />
            <meta name="twitter:image" content={final.image} />
            {final.twitterHandle && (
                <meta name="twitter:creator" content={final.twitterHandle} />
            )}

            {/* Structured Data */}
            <script type="application/ld+json">{jsonLd}</script>

            {/* Extra meta tags (merged defaults + props) */}
            {final.meta.map((m, i) =>
                m.property ? (
                    <meta key={`extra-meta-${i}`} property={m.property} content={m.content} />
                ) : (
                    <meta key={`extra-meta-${i}`} name={m.name} content={m.content} />
                )
            )}
        </Helmet>
    );
}