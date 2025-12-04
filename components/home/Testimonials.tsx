'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Brittany Newlove',
    location: 'Toronto',
    rating: 5,
    text: 'I left visibly glowing! The HydraFacial was incredible, and Christina provided excellent customer service. The red light therapy was the perfect addition. 10/10 would recommend!',
    service: 'HydraFacial',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    timeAgo: '5 months ago',
  },
  {
    name: 'Sabrina Perciballi',
    location: 'Toronto',
    rating: 5,
    text: 'Such a wonderful experience! The Lumecca and dermaplaning treatment was amazing. The staff is so friendly, and the space is aesthetic and clean. I\'ve already booked 3 more treatments!',
    service: 'Lumecca & Dermaplaning',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
    timeAgo: '3 months ago',
  },
  {
    name: 'Laura Katergos',
    location: 'Toronto',
    rating: 5,
    text: 'Loving the results every time! The staff is knowledgeable and never pushy about services. They\'re genuinely proud of their work, and it shows in the results.',
    service: 'Multiple Treatments',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000',
    timeAgo: '1 month ago',
  },
  {
    name: 'Kiana Sharifpour',
    location: 'Toronto',
    rating: 5,
    text: 'The head spa session with Tayyaba was so refreshing and relaxing! The head massage, shampoo, and treatments left my scalp feeling completely relieved. Highly recommend!!',
    service: 'Head Spa',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000',
    timeAgo: '1 month ago',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0"></div>
      
      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from clients who trust Dermabar with their beauty
            journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-primary-100 group-hover:text-primary-200 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-400 text-gold-400"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-700">{testimonial.rating}.0</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm relative z-10 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">Google Review</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                    {testimonial.service}
                  </span>
                  <p className="text-xs text-gray-500">{testimonial.timeAgo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Read More Reviews
            <Star className="ml-2 h-5 w-5 fill-gold-400 text-gold-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

