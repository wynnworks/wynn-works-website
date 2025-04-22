
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Wynn Works LLC</h1>
        <p className="text-center text-lg mb-8">Reliable General Services & Construction Solutions</p>

        <div className="grid gap-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              Based in Dallas, TX, Wynn Works LLC delivers dependable general services and construction support to federal, state,
              and local agencies. We focus on fast mobilization, reliable subcontractor partnerships, and consistent service
              delivery across Texas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Core Services</h2>
            <ul className="list-disc list-inside">
              <li>Janitorial & Cleaning</li>
              <li>Landscaping & Grounds Maintenance</li>
              <li>Demolition & Site Prep</li>
              <li>Painting & General Trades</li>
              <li>Hauling & Waste Removal</li>
              <li>Security Services</li>
              <li>Moving & Delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">NAICS Codes</h2>
            <p>561720, 561730, 562111, 236220, 238110, 238320, 238910, 238160, 238330</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>Email: <a href="mailto:info@wynnworksco.com" className="text-blue-600">info@wynnworksco.com</a></p>
            <p>Phone: <a href="tel:5056335951" className="text-blue-600">(505) 633-5951</a></p>
            <p>Location: Dallas, TX</p>
          </section>

          <div className="text-center mt-8">
            <a
              href="/Wynn_Works_Capability_Statement.pdf"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Download Capability Statement
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
