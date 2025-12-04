import type { Metadata } from 'next'
import Link from 'next/link'
import { Syringe, Sparkles, Waves, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive aesthetic treatments including Botox, dermal fillers, laser hair removal, HydraFacial, and more at Dermabar Med Spa.',
}

const serviceCategories = [
  {
    name: 'Injectables',
    description: 'Expert Botox and dermal fillers to restore volume, smooth fine lines, and enhance your natural features.',
    href: '/services/injectables',
    icon: Syringe,
    treatments: ['Botox', 'Dermal Fillers', 'Lip Augmentation', 'Jawline Contouring'],
  },
  {
    name: 'Skin Treatments',
    description: 'Advanced facials, chemical peels, and HydraFacial for radiant, healthy-looking skin.',
    href: '/services/skin',
    icon: Sparkles,
    treatments: ['HydraFacial', 'Chemical Peels', 'Fusion Facial', 'Microneedling'],
  },
  {
    name: 'Body Contouring',
    description: 'Sculpt and tone with non-invasive body contouring treatments.',
    href: '/services/body',
    icon: Waves,
    treatments: ['CoolSculpting', 'Body Wraps', 'Cellulite Treatment'],
  },
  {
    name: 'Laser Treatments',
    description: 'Laser hair removal, skin resurfacing, and pigmentation correction.',
    href: '/services/laser',
    icon: Zap,
    treatments: ['Laser Hair Removal', 'IPL Photofacial', 'Laser Skin Resurfacing'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive aesthetic treatments tailored to enhance your natural
            beauty. Our expert team uses advanced technology and proven methods
            to deliver exceptional results.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {serviceCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block p-8 lg:p-10 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-4 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                    <category.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {category.treatments.map((treatment) => (
                      <li
                        key={treatment}
                        className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200"
                      >
                        {treatment}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a consultation to discuss your aesthetic goals and create a
            personalized treatment plan.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-all"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

