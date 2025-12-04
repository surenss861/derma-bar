'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Results, Real Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the difference our expert treatments make. Every client is unique,
            and so are their results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            {/* Carousel */}
            <div className="relative h-[500px] lg:h-[600px]">
              {transformations.map((transformation, index) => (
                <motion.div
                  key={transformation.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${
                    index === currentIndex ? 'z-10' : 'z-0'
                  }`}
                >
                  <div className="grid grid-cols-2 h-full">
                    {/* Before */}
                    <div className="relative">
                      <Image
                        src={transformation.before}
                        alt={`Before ${transformation.treatment}`}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold uppercase tracking-wider">
                          Before
                        </span>
                      </div>
                    </div>
                    {/* After */}
                    <div className="relative">
                      <Image
                        src={transformation.after}
                        alt={`After ${transformation.treatment}`}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-primary-600/40 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold uppercase tracking-wider">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Previous transformation"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Next transformation"
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </button>
            </div>

            {/* Slide Info */}
            <div className="bg-white p-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {transformations[currentIndex].treatment}
                  </h3>
                  <p className="text-gray-600">
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
                          ? 'w-8 bg-primary-600'
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
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
            <p className="text-sm text-gray-600 mb-4">
              Individual results may vary. Consultations required.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
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

