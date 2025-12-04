'use client'

import { X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2.5 px-4 z-50">
      <div className="container-custom mx-auto flex items-center justify-center gap-3 text-sm">
        <span className="hidden sm:inline">✨</span>
        <span>
          Holiday Event: Up to $500 in savings on Dermabar gift cards.{' '}
          <Link
            href="/shop"
            className="underline font-semibold hover:text-primary-100 transition-colors"
          >
            Learn more →
          </Link>
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto sm:ml-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

