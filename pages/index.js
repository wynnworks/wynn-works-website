
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Wynn Works LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r8ajdgs8qk");
            `,
          }
        />
      </Head>

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
              <form action="https://formspree.io/f/manoyevg" method="POST" className="grid gap-4 mt-4">
                <input type="hidden" name="_redirect" value="https://wynnworksco.com/thank-you" />
                <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
                <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
                <textarea name="message" placeholder="Your Message" rows="5" className="border p-2 rounded"></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Send Message
                </button>
              </form>
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
    </>
  );
}
