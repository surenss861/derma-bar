import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import CTA from '@/components/ui/CTA'

export const metadata: Metadata = {
  title: 'Injectables - Botox & Dermal Fillers',
  description: 'Expert Botox and dermal filler treatments in Toronto. Restore volume, smooth fine lines, and enhance your natural features with our board-certified injectors.',
}

const treatments = [
  {
    name: 'Botox',
    description: 'Smooth dynamic wrinkles and fine lines with precision Botox injections.',
    benefits: [
      'Reduces forehead lines',
      'Smooths crow\'s feet',
      'Lifts brow position',
      'Results in 3-7 days',
      'Lasts 3-4 months',
    ],
  },
  {
    name: 'Dermal Fillers',
    description: 'Restore lost volume and enhance facial contours with hyaluronic acid fillers.',
    benefits: [
      'Restores cheek volume',
      'Plumps lips naturally',
      'Smooths nasolabial folds',
      'Enhances jawline',
      'Immediate results',
    ],
  },
  {
    name: 'Lip Augmentation',
    description: 'Achieve fuller, more defined lips with expert filler techniques.',
    benefits: [
      'Natural-looking enhancement',
      'Customized to your goals',
      'Minimal downtime',
      'Long-lasting results',
    ],
  },
]

export default function InjectablesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Injectables
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert Botox and dermal filler treatments performed by our
            board-certified nurse injectors. We use only premium products and
            advanced techniques to deliver natural-looking, beautiful results.
          </p>
        </div>

        {/* Treatments */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {treatment.name}
                </h2>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <ul className="space-y-3">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Dermabar for Injectables?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Injectors
              </h3>
              <p className="text-gray-600 text-sm">
                All injections are performed by our board-certified nurse
                injector with 10+ years of experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Premium Products
              </h3>
              <p className="text-gray-600 text-sm">
                We use only FDA-approved, top-tier brands like Allergan and
                Galderma.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Natural Results
              </h3>
              <p className="text-gray-600 text-sm">
                Our approach focuses on enhancing your natural features, not
                changing your appearance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Comfortable Experience
              </h3>
              <p className="text-gray-600 text-sm">
                We use numbing techniques and gentle injection methods for a
                comfortable treatment.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Does Botox hurt?
              </h3>
              <p className="text-gray-600">
                Most clients describe Botox injections as a quick pinch. The
                needles are very fine, and the procedure takes just minutes. We
                can apply a topical numbing cream if needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                How long do results last?
              </h3>
              <p className="text-gray-600">
                Botox typically lasts 3-4 months, while dermal fillers can last
                6-18 months depending on the product and treatment area.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600">
                Botox results appear within 3-7 days, with full effects visible
                at 2 weeks. Dermal fillers show immediate results.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-all"
          >
            Book Your Injectables Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

