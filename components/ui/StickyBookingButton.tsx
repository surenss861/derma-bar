'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)
  const hasPulsed = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300
      setIsVisible(shouldShow)
      
      // Pulse animation after 3 seconds of being visible
      if (shouldShow && !hasPulsed.current && buttonRef.current) {
        setTimeout(() => {
          if (buttonRef.current) {
            gsap.to(buttonRef.current, {
              scale: 1.1,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: 'power2.out',
            })
            hasPulsed.current = true
          }
        }, 3000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <Link href="/book" className="block">
            <motion.div
              ref={buttonRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-primary-700 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'linear',
                }}
              />
              <Calendar className="h-5 w-5 relative z-10" />
              <span className="font-semibold relative z-10">Book Now</span>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

