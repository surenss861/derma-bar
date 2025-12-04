'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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
    name: 'Injectables',
    description: 'Expert Botox and dermal fillers to restore volume and smooth fine lines.',
    href: '/services/injectables',
    icon: Syringe,
    color: 'bg-primary-50 text-primary-600',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070',
  },
  {
    name: 'Skin Treatments',
    description: 'Advanced facials, chemical peels, and HydraFacial for radiant skin.',
    href: '/services/skin',
    icon: Sparkles,
    color: 'bg-accent-50 text-accent-600',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
  },
  {
    name: 'Body Contouring',
    description: 'Sculpt and tone with non-invasive body contouring treatments.',
    href: '/services/body',
    icon: Waves,
    color: 'bg-gold-50 text-gold-600',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
  },
  {
    name: 'Laser Treatments',
    description: 'Laser hair removal, skin resurfacing, and pigmentation correction.',
    href: '/services/laser',
    icon: Zap,
    color: 'bg-primary-50 text-primary-600',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070',
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotation: -2,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Image reveal mask
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.2,
          delay: index * 0.1 + 0.3,
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
          const rotateX = ((y - centerY) / centerY) * -8
          const rotateY = ((x - centerX) / centerX) * 8

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out',
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
          })
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
    <div ref={cardRef} className="transform-gpu">
      <Link
        href={service.href}
        className="group block h-full rounded-2xl bg-white overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      >
                <div ref={imageRef} className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
          <div className={`absolute top-4 left-4 inline-flex p-3 rounded-lg ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
            <service.icon className="h-5 w-5" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {service.description}
          </p>
                  <motion.div
                    className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
        </div>
      </Link>
    </div>
  )
}

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive aesthetic treatments tailored to enhance your natural
            beauty and boost your confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

