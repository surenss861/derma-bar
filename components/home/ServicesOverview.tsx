'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Syringe, Sparkles, Waves, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    name: 'INJECTABLES MENU',
    description: 'Smooth wrinkles, restore volume, and enhance your natural beauty with our expert injectables for a youthful, refreshed look.',
    href: '/services/injectables',
    icon: Syringe,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070',
  },
  {
    name: 'SKIN MENU',
    description: 'Achieve radiant, healthy skin with treatments that target acne, aging, and pigmentation for a glowing complexion.',
    href: '/services/skin',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
  },
  {
    name: 'BODY MENU',
    description: 'Sculpt, tone, and tighten with non-invasive treatments designed to enhance your body\'s natural contours.',
    href: '/services/body',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
  },
  {
    name: 'TEETH WHITENING',
    description: 'Brighten your smile with professional whitening for fast, noticeable results.',
    href: '/services/teeth-whitening',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070',
  },
  {
    name: 'WAXING',
    description: 'Enjoy smooth, hair-free skin with precise, long-lasting waxing services.',
    href: '/services/waxing',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced card entrance - ensure visible first
      if (cardRef.current) {
        gsap.set(cardRef.current, { opacity: 1 })
        gsap.from(cardRef.current, {
          opacity: 0.3,
          y: 80,
          scale: 0.92,
          rotation: -2,
          duration: 1.2,
          delay: index * 0.12,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Image reveal with enhanced effect
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.3,
          opacity: 0.7,
          duration: 1.4,
          delay: index * 0.12 + 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Content fade in
      if (contentRef.current) {
        Array.from(contentRef.current.children).forEach((child) => {
          gsap.set(child, { opacity: 1 })
        })
        gsap.from(contentRef.current.children, {
          opacity: 0.3,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          delay: index * 0.12 + 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Enhanced parallax hover with 3D effect
      if (cardRef.current) {
        const card = cardRef.current
        
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = ((y - centerY) / centerY) * -10
          const rotateY = ((x - centerX) / centerX) * 10

          gsap.to(card, {
            rotateX,
            rotateY,
            z: 20,
            transformPerspective: 1200,
            duration: 0.4,
            ease: 'power2.out',
          })

          if (imageRef.current) {
            const imageX = ((x - centerX) / centerX) * 40
            const imageY = ((y - centerY) / centerY) * 40
            gsap.to(imageRef.current.querySelector('img'), {
              x: imageX,
              y: imageY,
              scale: 1.25,
              duration: 0.6,
              ease: 'power2.out',
            })
          }
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            duration: 0.8,
            ease: 'power3.out',
          })

          if (imageRef.current) {
            gsap.to(imageRef.current.querySelector('img'), {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
            })
          }
        }

        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          card.removeEventListener('mousemove', handleMouseMove)
          card.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      className="transform-gpu"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={service.href}
        className="group block h-full bg-black border border-white/10 hover:border-white/40 overflow-hidden transition-all duration-700 relative shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
      >
        {/* Enhanced Image with better overlays */}
        <div ref={imageRef} className="relative h-72 lg:h-96 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-1000"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Multi-layer gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50"></div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-700"></div>
        </div>

        {/* Enhanced Content */}
        <div ref={contentRef} className="p-8 lg:p-10 bg-black relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-colors"></div>
          
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-white transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-white/75 mb-8 leading-relaxed text-base lg:text-lg">
            {service.description}
          </p>
          <motion.div
            className="inline-flex items-center text-white font-bold uppercase tracking-widest text-xs lg:text-sm group-hover:text-white transition-colors"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
            <ArrowRight className="ml-3 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Enhanced shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
      </Link>
    </motion.div>
  )
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      // Enhanced title animation
      if (titleRef.current && sectionRef.current) {
        gsap.set(titleRef.current, { opacity: 1 })
        gsap.from(titleRef.current, {
          opacity: 0.3,
          y: 50,
          scale: 0.94,
          duration: 1.2,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Underline animation
      if (underlineRef.current && sectionRef.current) {
        gsap.from(underlineRef.current, {
          scaleX: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-white rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-900 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        </div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Enhanced Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight mb-6">
            SERVICES
          </h2>
          <motion.div
            ref={underlineRef}
            className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
            style={{ width: '300px' }}
          />
        </motion.div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
