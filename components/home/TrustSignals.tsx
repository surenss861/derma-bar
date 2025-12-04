'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Sparkles, Star, CheckCircle } from 'lucide-react'
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

const pressMentions = [
  { name: 'Vanity Fair', logo: 'VF' },
  { name: 'Allure', logo: 'A' },
  { name: 'Vogue', logo: 'V' },
]

function SignalCard({ signal, index }: { signal: typeof signals[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation - optimized to 200-300ms
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.3,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Icon animation - optimized
      gsap.from(iconRef.current, {
        rotation: -90,
        scale: 0.8,
        duration: 0.25,
        delay: index * 0.1 + 0.1,
        ease: 'back.out(1.5)',
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
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="text-center"
    >
      <div
        ref={iconRef}
        className="inline-flex p-4 rounded-full bg-white/10 border border-white/20 text-white mb-4 hover:bg-white/20 transition-all duration-200"
      >
        <signal.icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">
        {signal.name}
      </h3>
      <p className="text-xs text-white/70 leading-relaxed">{signal.description}</p>
    </motion.div>
  )
}

export default function TrustSignals() {
  const sectionRef = useRef<HTMLElement>(null)
  const pressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Press mentions animation
      if (pressRef.current) {
        gsap.from(pressRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-black text-white border-y border-white/10 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Trust Signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {signals.map((signal, index) => (
            <SignalCard key={signal.name} signal={signal} index={index} />
          ))}
        </div>

        {/* Press Mentions & Social Proof */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              As Featured In
            </p>
            <div ref={pressRef} className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {pressMentions.map((press, index) => (
                <motion.div
                  key={press.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <span className="text-lg font-bold text-white/80">{press.logo}</span>
                  <p className="text-xs text-white/60 mt-1">{press.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rating Display */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-white/70">
              <span className="font-bold text-white">4.9/5</span> average rating from{' '}
              <span className="font-bold text-white">500+</span> verified reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

