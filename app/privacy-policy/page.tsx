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
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Information We Collect</h2>
              <p className="text-gray mb-4">
                When you submit a quote request through our website, we collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Name and contact information (email, phone)</li>
                <li>Company information</li>
                <li>Shipment details (origin, destination, cargo, weight)</li>
                <li>Transportation preferences</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-gray mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li>Process your quote request</li>
                <li>Communicate with you about your shipment</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Information Sharing</h2>
              <p className="text-gray mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except as necessary to provide our logistics services or as required by law.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Data Security</h2>
              <p className="text-gray mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
              <p className="text-gray mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray">
                Email: info@internallogisticllc.com<br />
                Address: 501 Silverside Road, Suite 105, Wilmington, DE 19809, USA
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
