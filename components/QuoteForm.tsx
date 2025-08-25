'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  mode: z.enum(['Sea', 'Air', 'Road', 'Rail'], {
    required_error: 'Please select a transportation mode'
  }),
  incoterms: z.string().optional(),
  origin: z.string().min(2, 'Origin is required'),
  destination: z.string().min(2, 'Destination is required'),
  cargo: z.string().min(2, 'Cargo description is required'),
  weightKg: z.number().min(1, 'Weight must be at least 1 kg'),
  dimensions: z.string().optional(),
  readyDate: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to the Privacy Policy')
})

type QuoteFormData = z.infer<typeof quoteFormSchema>

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema)
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote-form" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Get Your Instant Rate
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Fill out the form below and receive your quote within minutes. 
              No phone calls required—everything is handled online.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Thank you! We've received your quote request and will be in touch shortly.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-800 font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Business Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="input-field"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Shipment Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mode" className="block text-sm font-medium text-primary mb-2">
                    Transportation Mode *
                  </label>
                  <select
                    {...register('mode')}
                    id="mode"
                    className={`input-field ${errors.mode ? 'border-red-500' : ''}`}
                    aria-describedby={errors.mode ? 'mode-error' : undefined}
                  >
                    <option value="">Select mode</option>
                    <option value="Sea">Sea Freight</option>
                    <option value="Air">Air Freight</option>
                    <option value="Road">Road Transport</option>
                    <option value="Rail">Rail Transport</option>
                  </select>
                  {errors.mode && (
                    <p id="mode-error" className="mt-1 text-sm text-red-600">
                      {errors.mode.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="incoterms" className="block text-sm font-medium text-primary mb-2">
                    Incoterms
                  </label>
                  <select
                    {...register('incoterms')}
                    id="incoterms"
                    className="input-field"
                  >
                    <option value="">Select incoterms</option>
                    <option value="EXW">EXW - Ex Works</option>
                    <option value="FCA">FCA - Free Carrier</option>
                    <option value="CPT">CPT - Carriage Paid To</option>
                    <option value="CIP">CIP - Carriage and Insurance Paid To</option>
                    <option value="DAP">DAP - Delivered at Place</option>
                    <option value="DPU">DPU - Delivered at Place Unloaded</option>
                    <option value="DDP">DDP - Delivered Duty Paid</option>
                    <option value="FAS">FAS - Free Alongside Ship</option>
                    <option value="FOB">FOB - Free on Board</option>
                    <option value="CFR">CFR - Cost and Freight</option>
                    <option value="CIF">CIF - Cost, Insurance and Freight</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-primary mb-2">
                    Origin (City/Port/Airport) *
                  </label>
                  <input
                    {...register('origin')}
                    type="text"
                    id="origin"
                    className={`input-field ${errors.origin ? 'border-red-500' : ''}`}
                    placeholder="e.g., Port of New York"
                    aria-describedby={errors.origin ? 'origin-error' : undefined}
                  />
                  {errors.origin && (
                    <p id="origin-error" className="mt-1 text-sm text-red-600">
                      {errors.origin.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-primary mb-2">
                    Destination (City/Port/Airport) *
                  </label>
                  <input
                    {...register('destination')}
                    type="text"
                    id="destination"
                    className={`input-field ${errors.destination ? 'border-red-500' : ''}`}
                    placeholder="e.g., Port of Rotterdam"
                    aria-describedby={errors.destination ? 'destination-error' : undefined}
                  />
                  {errors.destination && (
                    <p id="destination-error" className="mt-1 text-sm text-red-600">
                      {errors.destination.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-primary mb-2">
                  Cargo Description *
                </label>
                <textarea
                  {...register('cargo')}
                  id="cargo"
                  rows={3}
                  className={`input-field ${errors.cargo ? 'border-red-500' : ''}`}
                  placeholder="Describe your cargo (e.g., Household appliances, 8 pallets)"
                  aria-describedby={errors.cargo ? 'cargo-error' : undefined}
                />
                {errors.cargo && (
                  <p id="cargo-error" className="mt-1 text-sm text-red-600">
                    {errors.cargo.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="weightKg" className="block text-sm font-medium text-primary mb-2">
                    Weight (kg) *
                  </label>
                  <input
                    {...register('weightKg', { valueAsNumber: true })}
                    type="number"
                    id="weightKg"
                    min="1"
                    className={`input-field ${errors.weightKg ? 'border-red-500' : ''}`}
                    placeholder="1200"
                    aria-describedby={errors.weightKg ? 'weight-error' : undefined}
                  />
                  {errors.weightKg && (
                    <p id="weight-error" className="mt-1 text-sm text-red-600">
                      {errors.weightKg.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="dimensions" className="block text-sm font-medium text-primary mb-2">
                    Dimensions / Volume
                  </label>
                  <input
                    {...register('dimensions')}
                    type="text"
                    id="dimensions"
                    className="input-field"
                    placeholder="e.g., 8 pallets, 2.4m x 1.2m x 1.8m"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="readyDate" className="block text-sm font-medium text-primary mb-2">
                  Ready Date
                </label>
                <input
                  {...register('readyDate')}
                  type="date"
                  id="readyDate"
                  className="input-field"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  {...register('consent')}
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray">
                  I agree to the{' '}
                  <a href="/privacy-policy" className="text-accent hover:text-accent-light underline">
                    Privacy Policy
                  </a>{' '}
                  and consent to being contacted regarding my quote request. *
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="mt-1 text-sm text-red-600">
                  {errors.consent.message}
                </p>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Instant Quote'}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. We'll respond to your quote request within 2 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
