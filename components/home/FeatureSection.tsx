'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  'Expert Board-Certified Providers',
  'Advanced Medical-Grade Technology',
  'Personalized Treatment Plans',
  'Luxury Spa Experience',
  'Proven Results & Safety Standards',
]

export default function FeatureSection() {
  return (
    <section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
              alt="Professional aesthetic treatment room"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Why Choose Dermabar?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Experience the perfect blend of clinical expertise and luxury care.
              Our state-of-the-art facility and expert team are dedicated to
              helping you achieve your aesthetic goals safely and effectively.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20 text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-white/90 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-lg bg-black border-2 border-white px-6 py-3 text-base font-bold text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Book Consultation
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 border-2 border-white/30 px-6 py-3 text-base font-bold text-white uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

