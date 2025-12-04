'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Tag } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const featuredTreatments = [
  {
    name: 'New Client Special',
    description: 'Get 20% off your first treatment. Book your consultation today.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070',
    href: '/book',
    badge: 'Limited Time',
    color: 'from-purple-900/30 to-pink-900/20',
  },
  {
    name: 'HydraFacial Package',
    description: 'Purchase 3 treatments and save 15%. Perfect for maintaining glowing skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
    href: '/services/skin',
    badge: 'Best Value',
    color: 'from-blue-900/30 to-purple-900/20',
  },
  {
    name: 'Botox & Fillers Combo',
    description: 'Combine Botox and dermal fillers for comprehensive facial rejuvenation.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
    href: '/services/injectables',
    badge: 'Popular',
    color: 'from-pink-900/30 to-purple-900/20',
  },
]

function TreatmentCard({ treatment, index }: { treatment: typeof featuredTreatments[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.6)',
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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <Link href={treatment.href} className="block h-full">
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Multi-layer gradients */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 ${treatment.color}`}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60"></div>
          
          {/* Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-bold text-white uppercase tracking-wider">
              <Tag className="h-4 w-4" />
              {treatment.badge}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 uppercase tracking-tight">
              {treatment.name}
            </h3>
            <p className="text-white/85 mb-6 text-base lg:text-lg leading-relaxed">
              {treatment.description}
            </p>
            <motion.div
              className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* Hover shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'linear',
            }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default function FeaturedTreatments() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      if (titleRef.current && sectionRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: 'back.out(1.6)',
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
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/4 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight mb-6">
            Featured Treatments
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
            style={{ width: '300px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredTreatments.map((treatment, index) => (
            <TreatmentCard key={treatment.name} treatment={treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

