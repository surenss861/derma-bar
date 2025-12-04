'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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

function SignalCard({ signal, index }: { signal: typeof signals[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Icon rotation animation
      gsap.from(iconRef.current, {
        rotation: -180,
        scale: 0,
        duration: 0.6,
        delay: index * 0.15 + 0.2,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div
        ref={iconRef}
        className="inline-flex p-3 rounded-full bg-primary-50 text-primary-600 mb-4 hover:bg-primary-100 transition-colors duration-300"
      >
        <signal.icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">
        {signal.name}
      </h3>
      <p className="text-xs text-gray-600">{signal.description}</p>
    </motion.div>
  )
}

export default function TrustSignals() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Background shimmer effect
      gsap.to(sectionRef.current, {
        backgroundPosition: '200% 0%',
        duration: 10,
        ease: 'none',
        repeat: -1,
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(139, 125, 101, 0.05) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent animate-shimmer" />
      </div>
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {signals.map((signal, index) => (
            <SignalCard key={signal.name} signal={signal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

