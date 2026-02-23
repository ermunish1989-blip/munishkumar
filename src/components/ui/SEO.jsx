import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Munish Kumar | B2B Business Advisor & Agency Growth Consultant",
    description = "Munish Kumar helps digital agencies and SaaS companies scale globally. AI SEO, Answer Engine Optimization, and International Market Expansion Expert serving Bahrain, USA, UK, UAE, and APAC.",
    keywords = "B2B Business Advisor, Agency Growth Consultant, AI SEO Consultant, Answer Engine Optimization, GEO SEO, digital agency scaling",
    canonicalUrl = "https://munishkumar.com",
    ogImage = "https://munishkumar.com/og-image.jpg",
    schema = null
}) => {
    // Default Person Schema for AI Overviews
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Munish Kumar",
        "url": "https://munishkumar.com",
        "jobTitle": "B2B Business Advisor",
        "worksFor": {
            "@type": "Organization",
            "name": "Munish Kumar Consulting"
        },
        "sameAs": [
            "https://linkedin.com/in/munishkumar"
        ],
        "knowsAbout": [
            "B2B Growth",
            "Agency Scaling",
            "International Market Expansion",
            "AI SEO",
            "Answer Engine Optimization (AEO)",
            "GEO SEO"
        ]
    };

    const finalSchema = schema || defaultSchema;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* AI Overview & Answer Engine Optimization (AEO) JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
