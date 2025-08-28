'use client'

export default function About() {
  const trustElements = [
    'Digital-first freight partner',
    'Instant quotations',
    'Automated documentation',
    'Online status visibility',
    'Marketplace-level clarity',
    'Global network coverage'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              About Intelogistic
            </h2>
            
            <p className="text-lg text-gray mb-6 leading-relaxed">
              We're a digital-first freight partner focused on instant quotations, automated docs, 
              and online status visibility—bringing marketplace-level clarity to every shipment. 
              Global coverage across EU, US and Asia with proven track record in B2B logistics.
            </p>
            
            <p className="text-gray mb-8 leading-relaxed">
              Our mission is to simplify global logistics through technology, transparency, and 
              exceptional service. We eliminate the traditional barriers of phone calls, waiting times, 
              and unclear pricing structures.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {trustElements.map((element, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray text-sm">{element}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/logo/logo.png" 
                alt="Intelogistic Logo" 
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                Company Information
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Company Information</h4>
                <p className="text-gray">
                  Intelogistic<br />
                  State of formation: Delaware, USA<br />
                  File No.: [insert company file number]<br />
                  EIN: [xx-xxxxxxx]
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Registered Office</h4>
                <p className="text-gray">
                  501 Silverside Road, Suite 105<br />
                  Wilmington, DE 19809, USA
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                <p className="text-gray">
                  Email: info@internallogisticllc.com<br />
                  Phone: +1 302 555 0199
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Business Hours</h4>
                <p className="text-gray">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 2:00 PM EST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-primary mb-2">Compliance & Security</h4>
                <p className="text-sm text-gray">
                  We comply with US/EU sanctions and AML requirements. No cash handling. KYC required for all clients. Dual-use shipments only with licenses.
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-gray">Online Booking</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Global</div>
                  <div className="text-sm text-gray">Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Proven</div>
                  <div className="text-sm text-gray">Track Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
