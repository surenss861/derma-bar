'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ShoppingCart, ChevronDown, Facebook, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const leftNavigation = [
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
]

const rightNavigation = [
  { name: 'TRAINING', href: '/training' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.85)',
          backdropFilter: isScrolled ? 'blur(24px)' : 'blur(12px)',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10"
    >
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20 xl:h-24 px-4 lg:px-6 xl:px-8">
          {/* Left: Social Media Icons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>

          {/* Left Navigation: SERVICES, SHOP */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-end pr-32 xl:pr-40">
            {leftNavigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setServicesDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors relative ${
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
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
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
                    className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors relative group ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform origin-left ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Center: Logo (Mobile) */}
          <div className="lg:hidden flex-1 flex justify-center">
            <Link href="/" className="text-lg font-black text-white tracking-tight">
              DERMA BAR™
            </Link>
          </div>

          {/* Center: Logo (Desktop - Absolute) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/" className="text-lg xl:text-xl font-black text-white tracking-tight hover:opacity-90 transition-opacity">
              DERMA BAR™
            </Link>
          </div>

          {/* Right Navigation: TRAINING, CONTACT */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-start pl-32 xl:pl-40">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform origin-left ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <button
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Link
              href="/book"
              className="px-5 xl:px-7 py-2.5 xl:py-3 text-xs xl:text-sm font-bold text-white uppercase tracking-widest border-2 border-white/30 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/book"
              className="px-4 py-2 text-xs font-bold text-white uppercase tracking-wider border border-white/30 hover:bg-white/10 transition-colors"
            >
              Book
            </Link>
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {[...leftNavigation, ...rightNavigation].map((item) => (
                  <div key={item.name}>
                    {'dropdown' in item && item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
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
                        className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                          isActive(item.href)
                            ? 'text-white bg-white/5'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
