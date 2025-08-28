export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Cookie Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-gray mb-6">
              This Cookie Policy explains how Intelogistic ("we", "our", "us") uses cookies and similar technologies on our website.
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">What Are Cookies</h2>
              <p className="text-gray mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">How We Use Cookies</h2>
              <p className="text-gray mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Security Cookies:</strong> Help protect against fraud and ensure security</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Types of Cookies We Use</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-primary mb-2">Essential Cookies</h3>
                <p className="text-gray text-sm mb-2">These cookies are necessary for the website to work properly.</p>
                <ul className="list-disc pl-6 text-gray text-sm">
                  <li>Session management</li>
                  <li>Form submission security</li>
                  <li>Basic website functionality</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-primary mb-2">Analytics Cookies</h3>
                <p className="text-gray text-sm mb-2">These cookies help us understand how visitors interact with our website.</p>
                <ul className="list-disc pl-6 text-gray text-sm">
                  <li>Page views and navigation</li>
                  <li>Form completion rates</li>
                  <li>Website performance metrics</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Functional Cookies</h3>
                <p className="text-gray text-sm mb-2">These cookies remember your preferences and settings.</p>
                <ul className="list-disc pl-6 text-gray text-sm">
                  <li>Language preferences</li>
                  <li>Form data (temporarily)</li>
                  <li>User interface preferences</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Managing Cookies</h2>
              <p className="text-gray mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                <li><strong>Third-Party Tools:</strong> Use browser extensions to manage cookies</li>
                <li><strong>Opt-Out:</strong> Some analytics providers offer opt-out mechanisms</li>
              </ul>
              <p className="text-gray mb-4">
                Please note that blocking certain cookies may affect the functionality of our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Third-Party Cookies</h2>
              <p className="text-gray mb-4">
                We may use third-party services that place their own cookies:
              </p>
              <ul className="list-disc pl-6 text-gray mb-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Email Services:</strong> Form submission and communication tools</li>
                <li><strong>Security Services:</strong> Protection against spam and fraud</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Updates to This Policy</h2>
              <p className="text-gray mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
              <p className="text-gray mb-4">
                If you have any questions about our use of cookies, please contact us:
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
