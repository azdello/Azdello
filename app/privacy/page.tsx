export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="text-gray-400">
          At <strong>Azdello</strong>, we respect your privacy and are committed
          to protecting your personal information.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="text-gray-400">
            When you submit a contact form on our website, we may collect
            personal information such as your name, email address, phone number,
            business details, and project information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>To respond to enquiries and provide our services</li>
            <li>To communicate with you about your project</li>
            <li>To improve our website and services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Protection</h2>
          <p className="text-gray-400">
            We take reasonable steps to protect your personal information from
            unauthorised access, misuse, or disclosure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p className="text-gray-400">
            We may use trusted third-party services (such as email providers)
            solely to operate our business. Your data is never sold.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-400">
            If you have any questions about this Privacy Policy, contact us at:
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
