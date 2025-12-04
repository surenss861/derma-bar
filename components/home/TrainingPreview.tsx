'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Award } from 'lucide-react'

export default function TrainingPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/20 rounded-full mix-blend-multiply filter blur-3xl -z-0"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Professional Training</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Become a Certified Professional in No Time!
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Derma Bar™, our dedicated team is here to help you build and grow
              your own empire! Our master technicians are industry-leading trainers,
              who have trained Registered Nurses, Doctors, and a variety of
              professionals.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer extensive training teaching our students the most up-to-date
              protocols and procedures, Health Canada guidelines, and education. Derma
              Bar™ strives in providing our students with the utmost, valid training.
              Not only do we offer ongoing and a lifetime of support, the courses
              students have taken are complimentary for the rest of their career!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Expert Trainers</p>
                  <p className="text-sm text-gray-600">Industry-leading professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Certified Programs</p>
                  <p className="text-sm text-gray-600">Health Canada compliant</p>
                </div>
              </div>
            </div>

            <Link
              href="/training"
              className="group inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition-all"
            >
              Explore Training Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070"
              alt="Professional training session at Dermabar"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

