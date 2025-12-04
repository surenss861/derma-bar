'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAP() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      // Cleanup ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return containerRef
}

export { gsap, ScrollTrigger }

