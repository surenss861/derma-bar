'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <Link
      href="/book"
      className="fixed bottom-6 right-6 z-50 lg:hidden group"
    >
      <div className="flex items-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-primary-700 transition-all animate-pulse hover:animate-none">
        <Calendar className="h-5 w-5" />
        <span className="font-semibold">Book Now</span>
      </div>
    </Link>
  )
}

