'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users, Sparkles } from 'lucide-react'

const signals = [
  {
    name: 'Expert Providers',
    description: 'Board-certified injectors with years of experience',
    icon: Users,
  },
  {
    name: 'Award-Winning',
    description: 'Recognized excellence in medical aesthetics',
    icon: Award,
  },
  {
    name: 'Safe & Trusted',
    description: 'HIPAA-compliant with highest safety standards',
    icon: Shield,
  },
  {
    name: 'Advanced Technology',
    description: 'Latest devices and proven treatment methods',
    icon: Sparkles,
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-primary-50 text-primary-600 mb-4">
                <signal.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {signal.name}
              </h3>
              <p className="text-xs text-gray-600">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

