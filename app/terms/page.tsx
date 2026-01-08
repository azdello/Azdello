export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <p className="text-gray-400 mb-6">
        Welcome to Azdello. By accessing or using our website and services,
        you agree to be bound by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Services
      </h2>
      <p className="text-gray-400 mb-6">
        Azdello provides web design, development, and digital services.
        All services are subject to availability and agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Intellectual Property
      </h2>
      <p className="text-gray-400 mb-6">
        All content on this website is the property of Azdello and may not
        be reproduced without written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Limitation of Liability
      </h2>
      <p className="text-gray-400 mb-6">
        Azdello shall not be liable for any indirect or consequential damages
        arising from the use of our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Governing Law
      </h2>
      <p className="text-gray-400 mb-6">
        These terms are governed by the laws of Australia.
      </p>
    </section>
  );
}
