'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface CTAProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(bgRef.current, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Content animation
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`py-24 lg:py-32 relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Luxury spa treatment"
          fill
          className="object-cover scale-110"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-900/80"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButton.href}
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl hover:bg-gray-50 hover:shadow-2xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                {secondaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

