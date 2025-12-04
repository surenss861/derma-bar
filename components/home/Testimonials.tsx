'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: 'Brittany Newlove',
    location: 'Toronto',
    rating: 5,
    text: 'I had my first Hydra facial at Derma Bar and from the moment I walked in the environment was welcoming, clean and felt high end. Their customer service is exceptional and I loved how they took the time to explain each step of the process and customize the treatment to my skin concerns. The red light therapy at the end was an amazing touch. I left visibly glowing and will be going back in the future. Best facial and a lovely group of women who work there. 10/10 would recommend Christina',
    service: 'HydraFacial',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    timeAgo: '5 months ago',
    quote: 'I left visibly glowing',
  },
  {
    name: 'Sabrina Perciballi',
    location: 'Toronto',
    rating: 5,
    text: 'Today I got Lumecca and dermaplaning done and I couldn\'t be happier with my service. Staff were friendly and the space was aesthetic, inviting and very clean. Teresa was very knowledgeable about the service and the skin in general. I felt comfortable and relaxed the entire treatment, such a wonderful experience. Before leaving I booked 3 more treatments and I can\'t wait!! Thank you Teresa!',
    service: 'Lumecca & Dermaplaning',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
    timeAgo: '3 months ago',
    quote: 'such a wonderful experience',
  },
  {
    name: 'Laura Katergos',
    location: 'Toronto',
    rating: 5,
    text: 'All of the girls at this clinic are fantastic and incredibly knowledgeable in what they do. I\'ve had a couple services here and I\'ve walked away happy and loving the results every time! They are so friendly and happy to answer any questions. What I love most is that they don\'t push services on you. They are proud of the work they do, and I\'ve never felt pressured to do more than what I\'ve asked.',
    service: 'Multiple Treatments',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000',
    timeAgo: '1 month ago',
    quote: 'loving the results every time!',
  },
  {
    name: 'Kiana Sharifpour',
    location: 'Toronto',
    rating: 5,
    text: 'I had a head spa session with Tayyaba, and it was very refreshing and relaxing. She was warm, welcoming, and provided an excellent head massage, followed by a soothing shampoo and treatments. My scalp felt completely relieved afterward. Highly recommend!!',
    service: 'Head Spa',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000',
    timeAgo: '1 month ago',
    quote: 'Highly recommend!!',
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced card entrance
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        rotation: -1,
        duration: 1,
        delay: index * 0.15,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Quote icon animation
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 0.8,
          delay: index * 0.15 + 0.3,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative bg-black border border-white/10 hover:border-white/40 p-7 lg:p-9 transition-all duration-500 group h-full flex flex-col shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
      
      <Quote ref={quoteRef} className="absolute top-7 right-7 h-10 w-10 text-white/8 group-hover:text-white/25 transition-all duration-500" />
      
      {/* Enhanced Stars */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + i * 0.1 }}
          >
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
          </motion.div>
        ))}
      </div>

      {/* Quote Title with enhanced styling */}
      <h3 className="text-xl lg:text-2xl font-black text-white mb-5 italic leading-tight group-hover:text-white transition-colors">
        &ldquo;{testimonial.quote}&rdquo;
      </h3>

      {/* Review Text with better typography */}
      <p className="text-white/75 mb-8 leading-relaxed text-sm lg:text-base flex-grow">
        {testimonial.text}
      </p>

      {/* Enhanced Author Info */}
      <div className="border-t border-white/10 pt-6 mt-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="56px"
            />
          </div>
          <div className="flex-grow min-w-0">
            <p className="font-bold text-white text-sm lg:text-base">{testimonial.name}</p>
            <p className="text-xs lg:text-sm text-white/60 mt-1">{testimonial.timeAgo}</p>
          </div>
        </div>
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
          {testimonial.service}
        </span>
      </div>

      {/* Hover shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
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
      if (underlineRef.current) {
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

      // Enhanced CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          scale: 0.92,
          y: 20,
          duration: 1,
          delay: 0.8,
          ease: 'back.out(1.7)',
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/4 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-900/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
            TESTIMONIALS
          </h2>
          <motion.div
            ref={underlineRef}
            className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
            style={{ width: '300px' }}
          />
        </motion.div>

        {/* Enhanced Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.96 }}>
            <a
              href="https://g.page/r/..."
              target="_blank"
              rel="noopener noreferrer"
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
                  repeatDelay: 2.5,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                View More Testimonials
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-600 group-hover:text-yellow-600 transition-colors" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
