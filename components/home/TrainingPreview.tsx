'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Award, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TrainingPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced section fade in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.98,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Enhanced image reveal with parallax
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.2,
          opacity: 0.8,
          duration: 1.5,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Enhanced title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 1.2,
          delay: 0.5,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Enhanced content staggered
      const paragraphs = contentRef.current?.querySelectorAll('p')
      if (paragraphs) {
        gsap.from(paragraphs, {
          opacity: 0,
          y: 25,
          duration: 0.9,
          stagger: 0.15,
          delay: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Features animation
      if (featuresRef.current) {
        const features = featuresRef.current.children
        gsap.from(features, {
          opacity: 0,
          x: -30,
          duration: 0.8,
          stagger: 0.15,
          delay: 1,
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
    <section ref={sectionRef} className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
      {/* Enhanced Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/4 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-900/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Enhanced Image Column */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[550px] lg:h-[700px] order-2 lg:order-1 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070"
              alt="Professional training session at Dermabar"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              quality={95}
              unoptimized={false}
              onError={(e) => {
                console.error('Training image failed to load:', e)
              }}
            />
            {/* Multi-layer gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/60"></div>
            {/* Decorative border */}
            <div className="absolute inset-0 border-2 border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>
          </motion.div>

          {/* Enhanced Content Column */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-10 leading-[1.1]"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
              }}
            >
              Become a Certified Professional in No Time!
            </h2>

            <p className="text-lg sm:text-xl lg:text-xl text-white/90 mb-7 leading-relaxed">
              At Derma Bar™, our dedicated team is here to help you build and grow
              your own empire! Our master technicians are industry-leading trainers,
              who have trained Registered Nurses, Doctors, and a variety of
              professionals.
            </p>

            <p className="text-lg sm:text-xl lg:text-xl text-white/90 mb-10 leading-relaxed">
              We offer extensive training teaching our students the most up-to-date
              protocols and procedures, Health Canada guidelines, and education. Derma
              Bar™ strives in providing our students with the utmost, valid training.
              Not only do we offer ongoing and a lifetime of support, the courses
              students have taken are complimentary for the rest of their career! Derma Bar™ takes students career just as serious as our own.
            </p>

            {/* Enhanced Features Grid */}
            <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1 text-lg">Expert Trainers</p>
                  <p className="text-sm text-white/70">Industry-leading professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1 text-lg">Certified Programs</p>
                  <p className="text-sm text-white/70">Health Canada compliant</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/training"
                className="group relative inline-flex items-center justify-center bg-black px-10 py-5 text-base font-bold text-white uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
                <span className="relative z-10 flex items-center gap-3">
                  Explore Training Opportunities
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

