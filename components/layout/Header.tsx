'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      
      // Shrink header on scroll
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          height: isScrolled ? '70px' : '96px',
          duration: 0.3,
          ease: 'power2.out',
        })
        
        // Shrink logo
        if (logoRef.current) {
          gsap.to(logoRef.current, {
            scale: isScrolled ? 0.85 : 1,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Logo entrance animation
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power3.out',
      })
    }

    // Nav links animation
    const navLinks = headerRef.current?.querySelectorAll('a[href^="/"]')
    if (navLinks) {
      gsap.from(navLinks, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power2.out',
      })
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom section-padding" aria-label="Global">
        <div className="flex items-center justify-between" style={{ height: scrolled ? '70px' : '96px' }}>
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link ref={logoRef} href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">Dermabar Med Spa</span>
              <Image
                src="/Derma+Bar+Logo-156w.webp"
                alt="Dermabar Med Spa Logo"
                width={156}
                height={60}
                className="h-12 w-auto lg:h-16 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            <a
              href="tel:+1416-555-0123"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(416) 555-0123</span>
            </a>
            <Link
              href="/book"
              className="rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 hover:shadow-lg hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+1416-555-0123"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(416) 555-0123</span>
                  </a>
                  <Link
                    href="/book"
                    className="block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-primary-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

