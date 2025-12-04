'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const navigation = {
  services: [
    { name: 'Injectables', href: '/services/injectables' },
    { name: 'Skin Treatments', href: '/services/skin' },
    { name: 'Body Contouring', href: '/services/body' },
    { name: 'Laser Hair Removal', href: '/services/laser' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Financing', href: '/financing' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>
      <div className="container-custom section-padding relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="space-y-6 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-black text-white tracking-tight">
                  DERMA BAR™
                </span>
              </Link>
              <div className="space-y-4">
                <p className="text-sm text-white/80 leading-relaxed max-w-md">
                  Derma Bar™ is a premier medical aesthetics clinic dedicated to enhancing natural beauty through advanced, results-driven treatments in the heart of Toronto.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Services
              </h3>
              <ul role="list" className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Company
              </h3>
              <ul role="list" className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Contact & Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      2145 Danforth Ave<br />
                      Toronto, ON M4C 1K1
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+1416-555-0123"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    (416) 555-0123
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@dermabar.ca"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    info@dermabar.ca
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/70">
                      Mon-Fri: 10am-7pm<br />
                      Sat: 9am-5pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map & Financing */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Google Map */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Find Us
                </h3>
                <div className="aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5!2d-79.3!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Financing Options */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Financing Options
                </h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                  We offer flexible payment options to make your aesthetic goals accessible. 
                  Ask about our financing plans during your consultation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-semibold text-white/80">
                    CareCredit
                  </div>
                  <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-semibold text-white/80">
                    Affirm
                  </div>
                  <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-semibold text-white/80">
                    Payment Plans
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/60 text-center md:text-left">
                &copy; {new Date().getFullYear()} Derma Bar™. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

