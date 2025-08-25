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
              About Internal Logistic LLC
            </h2>
            
            <p className="text-lg text-gray mb-6 leading-relaxed">
              We're a digital-first freight partner focused on instant quotations, automated docs, 
              and online status visibility—bringing marketplace-level clarity to every shipment.
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
            <h3 className="text-xl font-semibold text-primary mb-6">
              Company Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Registered Address</h4>
                <p className="text-gray">
                  501 Silverside Road, Suite 105<br />
                  Wilmington, DE 19809<br />
                  United States
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                <p className="text-gray">
                  Email: info@internallogisticllc.com<br />
                  Phone: +1 (xxx) xxx-xxxx
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
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-gray">Online Booking</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">150+</div>
                  <div className="text-sm text-gray">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99%</div>
                  <div className="text-sm text-gray">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
