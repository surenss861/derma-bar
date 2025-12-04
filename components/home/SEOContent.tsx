'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SEOContent() {
  return (
    <section className="py-20 lg:py-28 bg-black text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto prose prose-lg max-w-none"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 text-center uppercase tracking-tight">
            Premier Medical Aesthetics in Toronto
          </h2>

          <div className="text-white/80 space-y-6 leading-relaxed">
            <p>
              <strong>Derma Bar™</strong> is a premier medical aesthetics clinic
              located in the heart of Toronto&apos;s Danforth neighborhood. We
              specialize in expert               <Link href="/services/injectables" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 font-semibold transition-colors">injectables</Link>, advanced{' '}
              <Link href="/services/skin" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 font-semibold transition-colors">skin rejuvenation</Link>, and{' '}
              <Link href="/services/laser" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 font-semibold transition-colors">non-surgical cosmetic treatments</Link> for all skin types.
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

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8 border-l-4 border-white/30">
              <h3 className="text-xl font-bold text-white mb-3">
                Our Specializations
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  • <strong className="text-white">Injectables:</strong>{' '}
                  <Link href="/services/injectables" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Botox</Link>,{' '}
                  <Link href="/services/injectables" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Dermal Fillers</Link>,{' '}
                  <Link href="/services/injectables" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Lip Augmentation</Link>
                </li>
                <li>
                  • <strong className="text-white">Skin Treatments:</strong>{' '}
                  <Link href="/services/skin" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">HydraFacial</Link>,{' '}
                  <Link href="/services/skin" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Chemical Peels</Link>,{' '}
                  <Link href="/services/skin" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Microneedling</Link>
                </li>
                <li>
                  • <strong className="text-white">Laser Services:</strong>{' '}
                  <Link href="/services/laser" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Laser Hair Removal</Link>,{' '}
                  <Link href="/services/laser" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">IPL Photofacial</Link>,{' '}
                  <Link href="/services/laser" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60">Skin Resurfacing</Link>
                </li>
                <li>
                  • <strong>Body Contouring:</strong> Non-invasive sculpting and
                  toning treatments
                </li>
              </ul>
            </div>

            <p className="mt-6">
              Ready to begin your journey?{' '}
              <Link href="/book" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 font-semibold transition-colors">
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

