import type { Metadata } from 'next'
import BookingWidget from '@/components/booking/BookingWidget'

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Schedule your consultation or treatment at Dermabar Med Spa. Choose from injectables, skin treatments, laser services, and more.',
}

export default function BookPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your consultation or treatment. Our team will confirm
              your appointment and answer any questions you may have.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <BookingWidget />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Prefer to speak with us directly?
            </p>
            <a
              href="tel:+1416-555-0123"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Call (416) 555-0123
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

