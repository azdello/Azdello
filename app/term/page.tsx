export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-6">
        Terms & Conditions
      </h1>

      <p className="mb-6">
        By using the Azdello website and services, you agree to the following
        terms and conditions.
      </p>

      <h2 className="text-xl text-white font-semibold mt-8 mb-3">
        Services
      </h2>
      <p>
        Azdello provides web design and development services. Project scope,
        timelines, and pricing are agreed upon individually.
      </p>

      <h2 className="text-xl text-white font-semibold mt-8 mb-3">
        Payments
      </h2>
      <p>
        Payments must be made according to agreed invoices and milestones.
        Failure to pay may result in service suspension.
      </p>

      <h2 className="text-xl text-white font-semibold mt-8 mb-3">
        Liability
      </h2>
      <p>
        Azdello is not liable for any indirect or consequential damages arising
        from the use of our services.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
