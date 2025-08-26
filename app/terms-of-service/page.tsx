export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-gray mb-6">
              These Terms of Service ("Terms") govern your use of the website and services of Internal Logistic LLC ("InLo", "we", "our", "us"). By using our website or requesting our services, you agree to these Terms.
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">1. Services</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>InLo provides digital logistics solutions including freight quotations, booking support, customs documentation, and tracking services</li>
                <li>Services are offered subject to availability and may vary by region</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">2. Use of Website</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>You agree to use our website for lawful purposes only</li>
                <li>You must not attempt to disrupt or misuse the website or its systems</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">3. Quotes and Bookings</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>All shipping quotes are estimates based on information provided by you</li>
                <li>Final prices may vary depending on carrier availability, regulations, and actual cargo details</li>
                <li>InLo is not responsible for errors caused by incomplete or inaccurate information provided by the customer</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">4. Liability</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>InLo acts as a logistics facilitator and does not assume liability for delays, damages, or losses caused by third-party carriers, customs authorities, or force majeure</li>
                <li>Our liability is limited to the extent permitted by applicable law</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">5. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>All content on this website (logos, texts, images, software) is owned by or licensed to InLo</li>
                <li>You may not copy, reproduce, or redistribute content without prior written consent</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">6. Termination</h2>
              <p className="text-gray mb-4">
                We reserve the right to suspend or terminate access to our website or services if you violate these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">7. Governing Law</h2>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>These Terms shall be governed by and construed in accordance with the laws of Delaware, USA</li>
                <li>Any disputes will be subject to the exclusive jurisdiction of the courts of Delaware</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">8. Contact Us</h2>
              <p className="text-gray mb-4">
                For questions about these Terms, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray font-semibold">Internal Logistic LLC</p>
                <p className="text-gray">501 Silverside Road, Suite 105</p>
                <p className="text-gray">Wilmington, DE 19809, USA</p>
                <p className="text-gray">Email: info@internallogisticllc.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
