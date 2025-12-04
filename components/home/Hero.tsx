'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  useEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      // Background subtle animation with parallax
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.08,
          duration: 25,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }

      // Welcome text animation with glow
      if (welcomeRef.current) {
        gsap.from(welcomeRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3,
        })
        
        // Subtle glow pulse
        gsap.to(welcomeRef.current, {
          textShadow: '0 0 20px rgba(255,255,255,0.3)',
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 1.5,
        })
      }

      // Main title split animation with enhanced effects
      if (titleRef.current && typeof window !== 'undefined') {
        // Only manipulate DOM on client side to avoid hydration issues
        const text = titleRef.current.textContent || ''
        if (text && !titleRef.current.querySelector('.hero-letter')) {
          titleRef.current.innerHTML = text
            .split('')
            .map((char, i) => 
              char === ' ' 
                ? '<span>&nbsp;</span>'
                : `<span class="inline-block hero-letter" style="opacity: 0; transform: translateY(60px) rotateX(90deg);">${char}</span>`
            )
            .join('')

          const letters = titleRef.current.querySelectorAll('.hero-letter')
          if (letters.length > 0) {
            gsap.to(letters, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.5,
              stagger: {
                amount: 0.4,
                from: 'center',
              },
              ease: 'back.out(1.4)',
              delay: 0.5,
            })

            // Add subtle glow effect to title
            gsap.to(titleRef.current, {
              textShadow: '0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.1)',
              duration: 3,
              yoyo: true,
              repeat: -1,
              ease: 'sine.inOut',
              delay: 2,
            })
          }
        }
      }

      // CTA button animation with enhanced entrance
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 0.4,
          ease: 'back.out(1.6)',
          delay: 1,
        })
      }

      // Enhanced floating particles with more variety
      const particlesContainer = sectionRef.current?.querySelector('.particles-container')
      const particles = particlesContainer?.querySelectorAll('.particle')
      if (particles && particles.length > 0) {
        Array.from(particles).forEach((particle, i) => {
          const size = 2 + (i % 3)
          gsap.set(particle, {
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.15 + (i % 3) * 0.1,
          })
          
          gsap.to(particle, {
            y: (i % 2 === 0 ? -30 : 30),
            x: (i % 2 === 0 ? 20 : -20),
            rotation: i * 45,
            scale: 1.2,
            duration: 5 + (i * 0.3),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: i * 0.4,
          })
        })
      }

      // Add subtle vignette animation
      const vignette = sectionRef.current?.querySelector('.vignette')
      if (vignette) {
        gsap.to(vignette, {
          opacity: 0.8,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background with Multiple Layers */}
      <motion.div
        ref={bgRef}
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070"
          alt="Derma Bar luxury interior"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Multi-layer dark overlay with sophisticated gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/88 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        {/* Enhanced blur with multiple passes */}
        <div className="absolute inset-0 backdrop-blur-[3px]"></div>
        {/* Vignette effect */}
        <div className="vignette absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="particles-container absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute bg-white/30 rounded-full blur-[1px]"
            style={{
              left: `${8 + (i * 7.5)}%`,
              top: `${15 + (i % 4) * 22}%`,
            }}
          />
        ))}
      </div>

      {/* Content with enhanced styling */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-custom section-padding relative z-10 text-center"
      >
        <div className="max-w-6xl mx-auto">
          {/* Welcome Text with enhanced styling */}
          <motion.div
            ref={welcomeRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span
              className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-white/90 font-light letter-spacing-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Experience
            </motion.span>
          </motion.div>

          {/* Main Title with enhanced typography */}
          <motion.h1
            ref={titleRef}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-white mb-12 leading-[0.9] tracking-[-0.02em]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            DERMA BAR™
          </motion.h1>

          {/* Enhanced CTA Button */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center bg-black px-12 py-6 text-sm md:text-base font-bold text-white uppercase tracking-[0.15em] hover:bg-gray-900 transition-all duration-500 overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: 'linear',
                  }}
                />
                {/* Shimmer overlay */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Book An Appointment
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center cursor-pointer backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors"
        >
          <motion.div
            className="w-1.5 h-4 bg-white/70 rounded-full mt-2.5"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
