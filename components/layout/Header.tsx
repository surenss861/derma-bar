'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

type NavItem = 
  | { name: string; href: string; dropdown: Array<{ name: string; href: string }> }
  | { name: string; href: string }

const navigation: NavItem[] = [
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
  { 
    name: 'SHOP', 
    href: '/shop',
    dropdown: [
      { name: 'Skincare Products', href: '/shop/skincare' },
      { name: 'Treatment Packages', href: '/shop/packages' },
      { name: 'Gift Cards', href: '/shop/gift-cards' },
    ]
  },
  { name: 'TRAINING', href: '/training' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const shopDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.85)',
          backdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
        setShopDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen || shopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen, shopDropdownOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-0 border-b border-white/5 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-18 px-4 lg:px-6 xl:px-8">
          {/* Logo - Reduced size, better tracking */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <span className="text-base lg:text-lg xl:text-xl font-black text-white tracking-[0.05em] hover:opacity-90 transition-opacity relative">
                DERMA BAR™
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-white/60"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>

          {/* Center Navigation - Compact spacing */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navigation.map((item) => {
              const hasDropdown = 'dropdown' in item
              const isServices = item.name === 'SERVICES'
              const isShop = item.name === 'SHOP'
              const isDropdownOpen = (isServices && servicesDropdownOpen) || (isShop && shopDropdownOpen)
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (isServices) setServicesDropdownOpen(true)
                    if (isShop) setShopDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (isServices) setServicesDropdownOpen(false)
                    if (isShop) setShopDropdownOpen(false)
                  }}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        className={`px-2 py-2 text-sm font-medium uppercase tracking-wider transition-colors relative ${
                          isActive(item.href)
                            ? 'text-white'
                            : 'text-white/70 hover:text-white'
                        }`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {item.name}
                        <ChevronDown
                          className={`inline-block ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            ref={isServices ? servicesDropdownRef : shopDropdownRef}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-black/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl overflow-hidden z-50"
                          >
                            <div className="py-1.5">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                  onClick={() => {
                                    setServicesDropdownOpen(false)
                                    setShopDropdownOpen(false)
                                  }}
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
                      className={`px-2 py-2 text-sm font-medium uppercase tracking-wider transition-colors relative group ${
                        isActive(item.href)
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      }`}
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 right-0 h-px bg-white/60 transition-transform origin-left ${
                        isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Actions - Premium CTA button */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              className="text-white/60 hover:text-white/90 transition-colors p-2"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              className="text-white/60 hover:text-white/90 transition-colors p-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
            <Link
              href="/book"
              className="px-5 py-2.5 text-sm font-semibold text-white uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 hover:border-white rounded-md transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/book"
              className="px-3 py-1.5 text-xs font-semibold text-white uppercase tracking-wider border border-white/20 hover:bg-white/10 transition-colors rounded"
            >
              Book
            </Link>
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              className="lg:hidden overflow-hidden border-t border-white/10 bg-black/95"
            >
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item) => {
                  const hasDropdown = 'dropdown' in item
                  const isServices = item.name === 'SERVICES'
                  const isShop = item.name === 'SHOP'
                  const isDropdownOpen = (isServices && servicesDropdownOpen) || (isShop && shopDropdownOpen)
                  
                  return (
                    <div key={item.name}>
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() => {
                              if (isServices) setServicesDropdownOpen(!servicesDropdownOpen)
                              if (isShop) setShopDropdownOpen(!shopDropdownOpen)
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors ${
                              isActive(item.href)
                                ? 'text-white bg-white/5'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isDropdownOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isDropdownOpen && hasDropdown && (
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
                                    className="block py-2.5 px-3 text-sm text-white/60 hover:text-white transition-colors"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setServicesDropdownOpen(false)
                                      setShopDropdownOpen(false)
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
                          className={`block px-3 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors ${
                            isActive(item.href)
                              ? 'text-white bg-white/5'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
