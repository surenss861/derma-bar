'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ShoppingCart, ChevronDown, Facebook, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const navigation = [
  { 
    name: 'SERVICES', 
    href: '/services',
    dropdown: [
      { name: 'Injectables', href: '/services/injectables' },
      { name: 'Skin Treatments', href: '/services/skin' },
      { name: 'Body Contouring', href: '/services/body' },
      { name: 'Laser Treatments', href: '/services/laser' },
    ]
  },
  { name: 'SHOP', href: '/shop' },
  { name: 'TRAINING', href: '/training' },
  { name: 'NEWS', href: '/news' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.85)',
          backdropFilter: isScrolled ? 'blur(24px)' : 'blur(12px)',
          borderBottomWidth: isScrolled ? '1px' : '1px',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Logo entrance
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
    }
  }, [])

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
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
    >
      <nav className="container-custom section-padding" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20 xl:h-24">
          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-2 xl:gap-x-4 flex-1 justify-center">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setServicesDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group ${
                        isActive(item.href)
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`inline-block ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: isActive(item.href) ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                {subItem.name}
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
                    className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-white"
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

          {/* Enhanced Logo - Centered */}
          <div ref={logoRef} className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/" className="group">
              <span className="text-lg lg:text-xl xl:text-2xl font-black text-white tracking-tight group-hover:opacity-90 transition-all duration-300 relative">
                DERMA BAR™
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-3 xl:gap-x-4 ml-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors relative p-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center bg-black px-5 xl:px-7 py-2.5 xl:py-3 text-xs xl:text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 border-2 border-white/30 hover:border-white overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
                <span className="relative z-10 whitespace-nowrap">Book Appointment</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-6 w-6" />
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
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-2 pt-4 pb-4 space-y-1">
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
                          className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                            isActive(item.href)
                              ? 'text-white bg-white/5'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
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
                              className="overflow-hidden pl-4 mt-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-2.5 px-3 text-sm text-white/70 hover:text-white transition-colors"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setServicesDropdownOpen(false)
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                          isActive(item.href)
                            ? 'text-white bg-white/5'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                  <Link
                    href="/book"
                    className="block w-full bg-black px-3 py-2.5 text-center text-sm font-semibold text-white uppercase tracking-wider border border-white/20 hover:bg-gray-900 transition-colors"
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
