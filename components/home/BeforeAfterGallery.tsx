'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const transformations = [
  {
    id: 1,
    treatment: 'Botox',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000',
    description: 'Smoother forehead and crow\'s feet',
  },
  {
    id: 2,
    treatment: 'Dermal Fillers',
    before: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000',
    after: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1000',
    description: 'Restored cheek volume and enhanced contours',
  },
  {
    id: 3,
    treatment: 'HydraFacial',
    before: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000',
    after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000',
    description: 'Radiant, glowing complexion',
  },
  {
    id: 4,
    treatment: 'Laser Resurfacing',
    before: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000',
    description: 'Improved skin texture and tone',
  },
]

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Fade in section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
    setSliderPosition(50) // Reset slider position
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
    setSliderPosition(50) // Reset slider position
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/30 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Real Results, Real Transformations
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            See the difference our expert treatments make. Every client is unique,
            and so are their results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Interactive Before/After Slider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] lg:h-[600px]"
              >
                <div
                  ref={sliderRef}
                  className="relative h-full cursor-col-resize"
                  onMouseMove={handleMouseMove}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onTouchMove={handleTouchMove}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                >
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={transformations[currentIndex].before}
                      alt={`Before ${transformations[currentIndex].treatment}`}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                  </div>

                  {/* After Image with clip */}
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <Image
                      src={transformations[currentIndex].after}
                      alt={`After ${transformations[currentIndex].treatment}`}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-primary-600/30 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold uppercase tracking-wider">
                        After
                      </span>
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-20"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="flex gap-1">
                        <ChevronLeft className="h-4 w-4 text-gray-600" />
                        <ChevronRight className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                    aria-label="Previous transformation"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-900" />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                    aria-label="Next transformation"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-900" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Info */}
            <div className="bg-black p-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {transformations[currentIndex].treatment}
                  </h3>
                  <p className="text-white/70">
                    {transformations[currentIndex].description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-white/60 mb-4">
              Individual results may vary. Consultations required.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center text-white font-semibold hover:text-white/80 transition-colors"
            >
              View Full Gallery
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

