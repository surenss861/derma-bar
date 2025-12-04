import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="py-12 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/Derma+Bar+Logo-156w.webp"
                  alt="Dermabar Med Spa Logo"
                  width={156}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 font-medium max-w-md">
                  Derma Bar™ is a premier medical aesthetics studio delivering safe,
                  natural, and results-driven treatments. Our expert clinicians use
                  advanced medical technology to enhance beauty with confidence and care.
                </p>
                <p className="text-sm text-gray-600 max-w-md">
                  Our philosophy is rooted in the idea that true beauty is not defined
                  by trends or standards but by confidence, self-care, and personal
                  expression. We are committed to enhancing and celebrating natural
                  beauty, ensuring that every client feels radiant in their own skin.
                </p>
                <p className="text-sm text-gray-600 max-w-md">
                  Located in the heart of the Upper Toronto Beaches, Derma Bar is
                  dedicated to providing a personalized approach to skincare and
                  aesthetics, combining cutting-edge technology with expert knowledge.
                </p>
              </div>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">
                    2145 Danforth Ave<br />
                    Toronto, ON M4C 1K1
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:+1416-555-0123"
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    (416) 555-0123
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:info@dermabar.ca"
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    info@dermabar.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Dermabar Med Spa. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

