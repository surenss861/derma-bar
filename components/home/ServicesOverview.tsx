'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Syringe, Sparkles, Waves, Zap, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    name: 'Injectables',
    description: 'Expert Botox and dermal fillers to restore volume and smooth fine lines.',
    href: '/services/injectables',
    icon: Syringe,
    color: 'bg-primary-50 text-primary-600',
    gradient: 'from-primary-50 to-primary-100',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070',
    treatments: ['Botox', 'Fillers', 'Lip Enhancement'],
  },
  {
    name: 'Skin Treatments',
    description: 'Advanced facials, chemical peels, and HydraFacial for radiant skin.',
    href: '/services/skin',
    icon: Sparkles,
    color: 'bg-accent-50 text-accent-600',
    gradient: 'from-accent-50 to-accent-100',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
    treatments: ['HydraFacial', 'Chemical Peels', 'Microneedling'],
  },
  {
    name: 'Body Contouring',
    description: 'Sculpt and tone with non-invasive body contouring treatments.',
    href: '/services/body',
    icon: Waves,
    color: 'bg-gold-50 text-gold-600',
    gradient: 'from-gold-50 to-gold-100',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
    treatments: ['CoolSculpting', 'Body Wraps', 'Cellulite'],
  },
  {
    name: 'Laser Treatments',
    description: 'Laser hair removal, skin resurfacing, and pigmentation correction.',
    href: '/services/laser',
    icon: Zap,
    color: 'bg-primary-50 text-primary-600',
    gradient: 'from-primary-50 to-accent-50',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070',
    treatments: ['Hair Removal', 'IPL', 'Resurfacing'],
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation with stagger
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotation: -5,
        duration: 1,
        delay: index * 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Icon animation
      if (iconRef.current) {
        gsap.from(iconRef.current, {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          delay: index * 0.15 + 0.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Image reveal with mask
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.2,
          duration: 1.2,
          delay: index * 0.15 + 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Parallax hover effect
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
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out',
          })

          // Parallax image effect
          if (imageRef.current) {
            const imageX = ((x - centerX) / centerX) * 20
            const imageY = ((y - centerY) / centerY) * 20
            gsap.to(imageRef.current.querySelector('img'), {
              x: imageX,
              y: imageY,
              scale: 1.15,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'power2.out',
          })

          if (imageRef.current) {
            gsap.to(imageRef.current.querySelector('img'), {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={service.href}
        className="group block h-full rounded-3xl bg-white overflow-hidden border-2 border-gray-100 hover:border-primary-300 hover:shadow-2xl transition-all duration-500 relative"
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
          initial={false}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
        />

        {/* Image Container */}
        <div ref={imageRef} className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent"></div>
          
          {/* Icon Badge */}
          <motion.div
            ref={iconRef}
            className={`absolute top-5 left-5 inline-flex p-3.5 rounded-xl ${service.color} shadow-xl backdrop-blur-sm border border-white/20`}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <service.icon className="h-6 w-6" />
          </motion.div>

          {/* Floating treatment tags */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
              >
                {service.treatments.map((treatment, i) => (
                  <motion.span
                    key={treatment}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 rounded-full border border-white/50"
                  >
                    {treatment}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 bg-white">
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300"
            layout
          >
            {service.name}
          </motion.h3>
          
          <motion.p
            className="text-gray-600 mb-5 text-sm leading-relaxed"
            initial={false}
            animate={{ color: isHovered ? '#4B5563' : '#6B7280' }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* CTA Link */}
          <motion.div
            className="flex items-center text-primary-600 font-semibold text-sm"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="group-hover:underline">Learn More</span>
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      </Link>
    </motion.div>
  )
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section background shimmer
      gsap.to(sectionRef.current, {
        backgroundPosition: '200% 0%',
        duration: 15,
        ease: 'none',
        repeat: -1,
      })

      // Title animation with split text effect
      if (titleRef.current) {
        const words = titleRef.current.textContent?.split(' ') || []
        titleRef.current.innerHTML = words
          .map((word, i) => `<span class="inline-block" style="opacity: 0;">${word}</span>`)
          .join(' ')

        gsap.to(titleRef.current.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Description fade in
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(139, 125, 101, 0.03) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-200/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-6"
          >
            <Star className="h-4 w-4 fill-primary-600" />
            <span>Premium Treatments</span>
          </motion.div>

          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Our Services
          </h2>
          
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive aesthetic treatments tailored to enhance your natural
            beauty and boost your confidence. Experience luxury care with
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10">View All Services</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
