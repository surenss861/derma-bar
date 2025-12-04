'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDismissed, setIsDismissed] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Always show on mobile, show after scroll on desktop
      const shouldShow = window.innerWidth < 1024 ? true : window.scrollY > 200
      setIsVisible(shouldShow && !isDismissed)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isDismissed])

  // Subtle pulse animation
  useEffect(() => {
    if (buttonRef.current && isVisible) {
      const interval = setInterval(() => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out',
        })
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Desktop: Full button */}
            <Link href="/book" className="hidden lg:block">
              <motion.div
                ref={buttonRef}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-black border-2 border-white text-white px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative overflow-hidden group"
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
                <span className="font-bold uppercase tracking-wider text-sm relative z-10">
                  Book Appointment
                </span>
              </motion.div>
            </Link>

            {/* Mobile: Compact button */}
            <Link href="/book" className="lg:hidden block">
              <motion.div
                ref={buttonRef}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-16 h-16 bg-black border-2 border-white text-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <Calendar className="h-6 w-6 relative z-10" />
              </motion.div>
            </Link>

            {/* Dismiss button (mobile only) */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsDismissed(true)
              }}
              className="lg:hidden absolute -top-2 -right-2 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

