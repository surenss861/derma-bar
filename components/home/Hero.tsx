'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'

if (typeof window !== 'undefined') {
  gsap.registerPlugin()
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated background parallax
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 10,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Floating particles animation
      if (particlesRef.current) {
        const particles = particlesRef.current.children
        gsap.to(particles, {
          y: (i) => (i % 2 === 0 ? -30 : 30),
          x: (i) => (i % 2 === 0 ? 20 : -20),
          rotation: (i) => (i * 45),
          duration: (i) => 3 + (i * 0.5),
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
        })
      }

      // Text reveal animation with GSAP
      const heading = contentRef.current?.querySelector('h1')
      if (heading) {
        const words = heading.textContent?.split(' ') || []
        heading.innerHTML = words.map((word, i) => 
          `<span class="inline-block" style="opacity: 0; transform: translateY(30px);">${word}</span>`
        ).join(' ')
        
        gsap.to(heading.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.3,
        })
      }

      // Button pulse animation
      const buttons = contentRef.current?.querySelectorAll('a, button')
      if (buttons) {
        gsap.to(buttons, {
          scale: 1,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Image with Parallax */}
      <motion.div
        ref={bgRef}
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070"
          alt="Professional medical aesthetic treatment"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-accent-900/20"></div>
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-600/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>

      {/* Floating particles/decorative elements */}
      <div ref={particlesRef} className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="h-8 w-8 text-primary-300/30" />
          </motion.div>
        ))}
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          ],
          backgroundPosition: ['-200% 0', '200% 0'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      <motion.div
        ref={contentRef}
        style={{ opacity }}
        className="container-custom section-padding relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white shadow-lg">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span>Elevating Your Natural Beauty</span>
              </div>
            </motion.div>

            {/* Main Heading with animated gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                Clinical Excellence
              </motion.span>
              <motion.span
                className="block text-primary-300 mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                Meets Luxury
              </motion.span>
            </motion.h1>

            {/* Description with fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: 'easeOut'
              }}
              className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Premier medical aesthetic clinic in Toronto offering expert
              injectables, advanced laser treatments, and professional skincare.
              <motion.span
                className="block mt-2 text-primary-200 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Experience personalized care that enhances your natural beauty.
              </motion.span>
            </motion.p>

            {/* CTA Buttons with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book"
                  className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+1416-555-0123"
                  className="group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  (416) 555-0123
                </a>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200"
            >
              {['Board-Certified', 'Award-Winning', 'Toronto Location'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.3 + i * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="h-2 w-2 rounded-full bg-primary-300"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

