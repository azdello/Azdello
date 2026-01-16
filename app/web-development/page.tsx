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
    </main>
  );
}
