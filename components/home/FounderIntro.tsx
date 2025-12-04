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
  const welcomeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const ownerRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      // Section fade in with scale - ensure it's visible first
      if (sectionRef.current) {
        gsap.set(sectionRef.current, { opacity: 1 })
        gsap.from(sectionRef.current, {
          opacity: 0.3,
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
      }

      // Welcome text animation with underline reveal
      if (welcomeRef.current) {
        gsap.set(welcomeRef.current, { opacity: 1 })
        gsap.from(welcomeRef.current, {
          opacity: 0.3,
          y: 30,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Title animation with enhanced effects
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1 })
        gsap.from(titleRef.current, {
          opacity: 0.3,
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

      // Underline animation
      if (underlineRef.current) {
        gsap.from(underlineRef.current, {
          scaleX: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Paragraphs staggered with word-by-word reveal
      const paragraphs = paragraphsRef.current?.children
      if (paragraphs) {
        Array.from(paragraphs).forEach((para, paraIndex) => {
          gsap.set(para, { opacity: 1 })
          gsap.from(para, {
            opacity: 0.3,
            y: 25,
            duration: 0.9,
            stagger: 0.15,
            delay: 0.7 + paraIndex * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        })
      }

      // Owner signature with elegant entrance
      if (ownerRef.current) {
        gsap.from(ownerRef.current, {
          opacity: 0,
          x: -40,
          duration: 1,
          delay: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Background elements animation
      const bgElements = sectionRef.current?.querySelectorAll('.bg-element')
      if (bgElements) {
        bgElements.forEach((el, i) => {
          gsap.from(el, {
            scale: 0,
            opacity: 0,
            duration: 2,
            delay: i * 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-element absolute top-0 right-0 w-[500px] h-[500px] bg-white/3 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="bg-element absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-900/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Text with enhanced styling */}
          <motion.div
            ref={welcomeRef}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.15em] mb-4 text-white/95">
              Welcome To
            </h2>
          </motion.div>

          {/* Main Title with underline */}
          <div className="mb-12">
            <motion.h1
              ref={titleRef}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight mb-4 leading-[0.95] text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
              }}
            >
              DERMA BAR™
            </motion.h1>
            <motion.div
              ref={underlineRef}
              className="h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left"
              style={{ width: '200px' }}
            />
          </div>

          {/* Content Paragraphs with enhanced typography */}
          <div ref={paragraphsRef} className="space-y-8 mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-2xl text-white/95 leading-relaxed font-light"
            >
              Derma Bar™ is a premier medical aesthetics clinic dedicated to enhancing natural beauty through advanced, results-driven treatments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-xl text-white/90 leading-relaxed"
            >
              We specialize in expert{' '}
              <Link href="/services/injectables" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors">
                injectables
              </Link>
              , advanced{' '}
              <Link href="/services/skin" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors">
                skin rejuvenation
              </Link>
              , and{' '}
              <Link href="/services" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors">
                non-surgical cosmetic treatments
              </Link>
              {' '}for all skin types. Our skilled medical team uses the latest technology—from{' '}
              <span className="text-white font-semibold">Botox</span> and{' '}
              <span className="text-white font-semibold">dermal fillers</span> to{' '}
              <span className="text-white font-semibold">laser treatments</span> and{' '}
              <span className="text-white font-semibold">skin tightening</span>—to restore, refresh, and refine your natural beauty. Whether you want to smooth fine lines, enhance facial contours, or achieve radiant, healthy skin, we create personalized treatment plans tailored to your unique goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-xl text-white/90 leading-relaxed"
            >
              At Derma Bar™, we believe confidence starts with self-care. Experience safe, effective treatments in a modern, welcoming space, and let us help you achieve the beauty that feels authentically you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-xl text-white/85 leading-relaxed italic"
            >
              Discover Derma Bar™ in the heart of Toronto.
            </motion.p>
          </div>

          {/* Enhanced Owner Signature */}
          <motion.div
            ref={ownerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/15 pt-8"
          >
            <p className="text-lg sm:text-xl font-light text-white/90 tracking-wider">
              — <span className="font-medium">TERESA DISTASIO</span>, OWNER
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
