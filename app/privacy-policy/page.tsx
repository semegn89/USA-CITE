export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-gray mb-6">
              Intelogistic ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-gray mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Personal details (name, email, phone, company) when you fill out our forms</li>
                <li>Shipment information (origin, destination, cargo details, weight, dates)</li>
                <li>Technical data (IP address, browser type, cookies, analytics data)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">2. How We Use Information</h2>
              <p className="text-gray mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Provide instant shipping quotes and logistics services</li>
                <li>Communicate with you regarding requests, bookings, and support</li>
                <li>Improve our website and services through analytics</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">3. Sharing of Information</h2>
              <p className="text-gray mb-4">
                We do not sell your personal data.
              </p>
              <p className="text-gray mb-4">
                We may share data with:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Service providers (IT, hosting, analytics, payment, communication)</li>
                <li>Regulatory authorities if legally required</li>
                <li>Business partners directly involved in your shipment</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">4. Data Security</h2>
              <p className="text-gray mb-4">
                We apply reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">5. Data Retention</h2>
              <p className="text-gray mb-4">
                We retain personal data only as long as necessary to fulfill the purposes above or to comply with applicable laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">6. Your Rights</h2>
              <p className="text-gray mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">7. Contact Us</h2>
              <p className="text-gray mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
                             <div className="bg-gray-50 p-4 rounded-lg">
                 <p className="text-gray font-semibold">Intelogistic</p>
                 <p className="text-gray">501 Silverside Road, Suite 105</p>
                 <p className="text-gray">Wilmington, DE 19809, USA</p>
                 <p className="text-gray">Email: info@intelogistic.com</p>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
