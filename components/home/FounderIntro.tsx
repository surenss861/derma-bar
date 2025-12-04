'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FounderIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-6">
              <span>Meet Our Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Led by Teresa Distasio, RN
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>Toronto&apos;s trusted expert</strong> in injectables, skin
              rejuvenation, and advanced laser treatments. With over a decade of
              experience in medical aesthetics, Teresa brings clinical excellence
              and personalized care to every client.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Derma Bar™, we believe confidence starts with self-care.
              Experience safe, effective treatments in a modern, welcoming space,
              and let us help you achieve the beauty that feels authentically you.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>Discover Derma Bar™ in the heart of Toronto.</strong> Located
              at 2145 Danforth Ave, we&apos;re dedicated to enhancing natural beauty
              through advanced, results-driven treatments tailored to all skin types.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition-all"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 border-2 border-gray-200 hover:border-primary-300 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

