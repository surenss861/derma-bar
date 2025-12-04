'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Sparkles, Syringe, Waves, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const navigation = [
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Injectables', href: '/services/injectables', icon: Syringe, description: 'Botox & Fillers' },
      { name: 'Skin Treatments', href: '/services/skin', icon: Sparkles, description: 'Facials & Peels' },
      { name: 'Body Contouring', href: '/services/body', icon: Waves, description: 'Sculpt & Tone' },
      { name: 'Laser Treatments', href: '/services/laser', icon: Zap, description: 'Hair Removal & Resurfacing' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
    const navLinks = headerRef.current?.querySelectorAll('.nav-link')
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-md'
          : 'bg-white/90 backdrop-blur-md'
      }`}
      style={{ height: scrolled ? '70px' : '96px' }}
    >
      <nav className="container-custom section-padding h-full" aria-label="Global">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link ref={logoRef} href="/" className="-m-1.5 p-1.5 group relative">
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
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setServicesDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                        isActive(item.href)
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-primary-600"
                        initial={{ width: 0 }}
                        animate={{ width: isActive(item.href) ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200 group"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                                  <subItem.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                    {subItem.name}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-600"
                      initial={{ width: 0 }}
                      animate={{ width: isActive(item.href) ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            <motion.a
              href="tel:+1416-555-0123"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span>(416) 555-0123</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book"
                className="relative inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 overflow-hidden group"
              >
                <motion.span
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
                <span className="relative z-10">Book Appointment</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 border-t border-gray-200 mt-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                            isActive(item.href)
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              servicesDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 mt-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setServicesDropdownOpen(false)
                                  }}
                                >
                                  <subItem.icon className="h-4 w-4" />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <motion.a
                    href="tel:+1416-555-0123"
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navigation.length * 0.1 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>(416) 555-0123</span>
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navigation.length * 0.1 + 0.1 }}
                  >
                    <Link
                      href="/book"
                      className="block w-full rounded-lg bg-primary-600 px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
