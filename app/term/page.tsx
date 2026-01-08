export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>

        <p className="text-gray-400">
          By accessing or using the Azdello website, you agree to be bound by
          these Terms and Conditions.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-gray-400">
            Azdello provides digital services including web design, development,
            and consulting. All services are subject to agreement and scope.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">No Guarantees</h2>
          <p className="text-gray-400">
            While we aim to deliver high-quality results, we do not guarantee
            specific outcomes such as revenue, rankings, or performance unless
            explicitly agreed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p className="text-gray-400">
            All content on this website is the property of Azdello unless stated
            otherwise and may not be reused without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-gray-400">
            Azdello is not liable for any indirect or consequential damages
            arising from the use of this website or our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes</h2>
          <p className="text-gray-400">
            We reserve the right to update these terms at any time without prior
            notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-400">
            Questions about these terms can be sent to:
            <br />
            <span className="text-white font-medium">
              azdelloservices@gmail.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
