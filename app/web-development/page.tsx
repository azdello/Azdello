import Link from "next/link";

export const metadata = {
  title: "Web Development Melbourne | High-Performance Websites – Azdello",
  description:
    "Professional web development services in Melbourne. Fast, secure, and conversion-focused websites built to grow your business."
};

export default function WebDevelopmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">
      
      {/* H1 */}
      <h1 className="text-4xl font-bold mb-6">
        Web Development Services in Melbourne
      </h1>

      <p className="text-gray-400 max-w-3xl mb-12">
        Azdello provides professional web development services in Melbourne,
        helping businesses build fast, secure, and scalable websites designed
        to convert visitors into customers.
      </p>

      {/* Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Websites Built to Perform, Not Just Look Good
        </h2>
        <p className="text-gray-400">
          We focus on clean design, performance optimisation, and intuitive
          navigation to ensure users find what they need quickly—without
          unnecessary animations or distractions that slow them down.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Our Web Development Approach
        </h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Fast-loading, SEO-ready websites</li>
          <li>• Mobile-first responsive design</li>
          <li>• Secure and scalable architecture</li>
          <li>• Conversion-focused layouts</li>
        </ul>
      </section>

      {/* Local relevance */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Serving Businesses Across Melbourne
        </h2>
        <p className="text-gray-400">
          We work with startups, small businesses, and growing companies across
          Melbourne, VIC, delivering web development solutions that support
          long-term growth and visibility.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build a Website That Converts?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s create a high-performance website tailored to your business.
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-10 py-4 rounded-full font-semibold"
        >
          Start Your Project
        </Link>
      </section>
{/* Local SEO Map */}
<section className="mt-32 max-w-5xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4">
    Web Development Services in Melbourne
  </h2>

  <iframe
    src="https://www.google.com/maps?q=Melbourne+VIC&output=embed"
    width="100%"
    height="300"
    loading="lazy"
    className="rounded-2xl border border-neutral-800"
  />

  <p className="text-gray-400 text-sm mt-4 max-w-3xl">
    Azdello provides professional web development services across Melbourne,
    helping local businesses grow with fast, secure, and scalable websites.
  </p>
</section>
{/* Suburb Coverage */}
<section className="mt-20 max-w-5xl mx-auto">
  <h3 className="text-xl font-semibold mb-3">
    Serving Businesses Across Melbourne Suburbs
  </h3>

  <p className="text-gray-400 text-sm max-w-3xl">
    We work with businesses across Southbank, Docklands, Richmond, Carlton,
    St Kilda, Brunswick, Footscray, and surrounding Melbourne suburbs.
  </p>
</section>

    {/* FAQ Section */}
<section className="mt-32 max-w-4xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6">
    Web Development FAQs
  </h2>

  <div className="space-y-6 text-gray-400 text-sm">
    <p>
      <strong>How much does web development cost in Melbourne?</strong><br />
      Web development projects in Melbourne typically range from $600 to
      $8,000 depending on features, design complexity, and business goals.
    </p>

    <p>
      <strong>How long does it take to build a website?</strong><br />
      Most business websites are completed within 2–4 weeks, depending on
      requirements and feedback cycles.
    </p>

    <p>
      <strong>Do you build SEO-friendly websites?</strong><br />
      Yes. All Azdello websites are built with SEO best practices, fast loading
      times, and clean code structures.
    </p>

    <p>
      <strong>Do you offer ongoing support?</strong><br />
      Yes. We provide optional maintenance, updates, and performance
      optimisation after launch.
    </p>
  </div>
</section>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does web development cost in Melbourne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web development projects in Melbourne typically range from $1,500 to $8,000 depending on scope and features."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most business websites are completed within 2–4 weeks depending on requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build SEO-friendly websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all Azdello websites are built with SEO best practices and performance optimisation."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
}
