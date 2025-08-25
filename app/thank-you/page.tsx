import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-primary mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray mb-6">
            We've received your quote request and will be in touch shortly. 
            Our team typically responds within 2 hours during business hours.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full btn-primary text-center"
            >
              Return to Home
            </Link>
            
            <p className="text-sm text-gray-500">
              Need immediate assistance? Contact us at{' '}
              <a href="mailto:info@internallogisticllc.com" className="text-accent hover:text-accent-light">
                info@internallogisticllc.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
