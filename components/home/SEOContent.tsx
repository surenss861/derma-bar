'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SEOContent() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto prose prose-lg max-w-none"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Premier Medical Aesthetics in Toronto
          </h2>

          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>
              <strong>Derma Bar™</strong> is a premier medical aesthetics clinic
              located in the heart of Toronto&apos;s Danforth neighborhood. We
              specialize in expert <Link href="/services/injectables" className="text-primary-600 hover:text-primary-700 font-semibold">injectables</Link>, advanced{' '}
              <Link href="/services/skin" className="text-primary-600 hover:text-primary-700 font-semibold">skin rejuvenation</Link>, and{' '}
              <Link href="/services/laser" className="text-primary-600 hover:text-primary-700 font-semibold">non-surgical cosmetic treatments</Link> for all skin types.
            </p>

            <p>
              Our skilled medical team uses the latest technology—from{' '}
              <strong>Botox</strong> and <strong>dermal fillers</strong> to{' '}
              <strong>laser treatments</strong> and <strong>skin tightening</strong>—to
              restore, refresh, and refine your natural beauty. Whether you want to
              smooth fine lines, enhance facial contours, or achieve radiant, healthy
              skin, we create personalized treatment plans tailored to your unique goals.
            </p>

            <p>
              <strong>Why choose Derma Bar™ for your aesthetic needs?</strong> Our
              board-certified providers bring years of experience in medical aesthetics
              to every consultation. We combine cutting-edge technology with expert
              knowledge to deliver safe, natural, and transformative results. Located
              at <strong>2145 Danforth Ave, Toronto</strong>, we&apos;re easily
              accessible and committed to providing a luxury spa experience with
              clinical excellence.
            </p>

            <div className="bg-primary-50 rounded-xl p-6 mt-8 border-l-4 border-primary-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Specializations
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Injectables:</strong>{' '}
                  <Link href="/services/injectables" className="text-primary-600 hover:text-primary-700">Botox</Link>,{' '}
                  <Link href="/services/injectables" className="text-primary-600 hover:text-primary-700">Dermal Fillers</Link>,{' '}
                  <Link href="/services/injectables" className="text-primary-600 hover:text-primary-700">Lip Augmentation</Link>
                </li>
                <li>
                  • <strong>Skin Treatments:</strong>{' '}
                  <Link href="/services/skin" className="text-primary-600 hover:text-primary-700">HydraFacial</Link>,{' '}
                  <Link href="/services/skin" className="text-primary-600 hover:text-primary-700">Chemical Peels</Link>,{' '}
                  <Link href="/services/skin" className="text-primary-600 hover:text-primary-700">Microneedling</Link>
                </li>
                <li>
                  • <strong>Laser Services:</strong>{' '}
                  <Link href="/services/laser" className="text-primary-600 hover:text-primary-700">Laser Hair Removal</Link>,{' '}
                  <Link href="/services/laser" className="text-primary-600 hover:text-primary-700">IPL Photofacial</Link>,{' '}
                  <Link href="/services/laser" className="text-primary-600 hover:text-primary-700">Skin Resurfacing</Link>
                </li>
                <li>
                  • <strong>Body Contouring:</strong> Non-invasive sculpting and
                  toning treatments
                </li>
              </ul>
            </div>

            <p className="mt-6">
              Ready to begin your journey?{' '}
              <Link href="/book" className="text-primary-600 hover:text-primary-700 font-semibold">
                Book your consultation
              </Link>{' '}
              today and discover how Derma Bar™ can help you achieve your aesthetic
              goals with confidence and care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

