'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Soft fade-in on scroll
export function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

// Background gradient shimmer
export function useGradientShimmer(elementRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        backgroundPosition: '200% 0%',
        duration: 8,
        ease: 'none',
        repeat: -1,
      })
    }, elementRef)

    return () => ctx.revert()
  }, [elementRef])
}

// Image reveal mask
export function useImageReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

// Scroll-triggered count-up
export function useCountUp(
  endValue: number,
  duration: number = 2,
  prefix: string = '',
  suffix: string = ''
) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return

    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
          }
        },
        onComplete: () => {
          hasAnimated.current = true
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [endValue, duration, prefix, suffix])

  return ref
}

// Parallax hover effect
export function useParallaxHover(elementRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -5
      const rotateY = ((x - centerX) / centerX) * 5

      gsap.to(element, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef])
}

