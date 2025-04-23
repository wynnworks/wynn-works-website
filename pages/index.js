
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wynn Works LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r8dc2ibgaz");`,
          }}
        />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <section className="bg-[url('/city.jpg')] bg-cover bg-center text-white py-20 text-center shadow">
          <h1 className="text-5xl font-bold">Wynn Works LLC</h1>
          <p className="text-xl mt-2">Reliable General Services & Construction Solutions</p>
        </section>
        <section className="max-w-5xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/about.jpg" alt="About Us" className="rounded-xl shadow" />
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p>
                Based in Dallas, TX, Wynn Works LLC delivers dependable general services and construction support to federal,
                state, and local agencies. We focus on fast mobilization, reliable subcontractor partnerships, and consistent
                service delivery across Texas.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Core Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>🧹<p>Cleaning</p></div>
              <div>🌿<p>Landscaping</p></div>
              <div>🪓<p>Demolition</p></div>
              <div>🎨<p>Painting</p></div>
              <div>🚛<p>Hauling</p></div>
              <div>🛡<p>Security</p></div>
              <div>📦<p>Moving</p></div>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto py-10 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">NAICS Codes</h2>
          <p>561720, 561730, 562111, 236220, 238110, 238320, 238910, 238160, 238330</p>
        </section>
        <section className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <form action="https://formspree.io/f/manoyevg" method="POST" className="grid gap-4">
            <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
            <textarea name="message" placeholder="Your Message" rows="4" className="border p-2 rounded"></textarea>
            <input type="hidden" name="_redirect" value="https://wynnworksco.com/thank-you" />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
          <a href="/Wynn_Works_Capability_Statement.pdf" target="_blank" className="block mt-6 text-blue-600 hover:underline">
            Download Capability Statement
          </a>
        </section>
      </main>
    </>
  );
}
