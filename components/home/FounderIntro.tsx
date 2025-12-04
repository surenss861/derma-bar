'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FounderIntro() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Heading split text animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Paragraphs staggered animation
      const paragraphs = paragraphsRef.current?.children
      if (paragraphs) {
        gsap.from(paragraphs, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Buttons animation
      gsap.from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden relative">
      {/* Background shimmer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-6"
            >
              <span>Meet Our Founder</span>
            </div>

            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Led by Teresa Distasio, RN
            </h2>

            <div ref={paragraphsRef}>
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
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 border-2 border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

