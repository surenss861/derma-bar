import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Shield, Sparkles } from 'lucide-react'
import CTA from '@/components/ui/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dermabar Med Spa - Toronto\'s premier medical aesthetic clinic. Expert providers, advanced technology, and personalized care.',
}

const values = [
  {
    name: 'Expertise',
    description: 'Board-certified providers with years of experience in medical aesthetics.',
    icon: Award,
  },
  {
    name: 'Personalized Care',
    description: 'Every treatment plan is customized to your unique goals and needs.',
    icon: Users,
  },
  {
    name: 'Safety First',
    description: 'Highest standards of safety and hygiene in every procedure.',
    icon: Shield,
  },
  {
    name: 'Advanced Technology',
    description: 'Latest devices and proven techniques for optimal results.',
    icon: Sparkles,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Dermabar
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Premier medical aesthetic clinic in Toronto, dedicated to enhancing
            your natural beauty through expert care, advanced technology, and
            personalized treatment plans.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dermabar Med Spa was founded with a vision to bring clinical
              excellence and luxury together. Located in the heart of Toronto&apos;s
              Danforth neighborhood, we provide a serene, professional
              environment where clients can feel confident and comfortable.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of board-certified providers brings years of experience
              and a commitment to staying at the forefront of aesthetic
              medicine. We believe in enhancing your natural features, not
              changing who you are.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every treatment is performed with precision, care, and attention
              to detail. We take the time to understand your goals and create a
              personalized plan that delivers beautiful, natural-looking
              results.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.name}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section Placeholder */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Our expert team is dedicated to providing you with exceptional care
            and beautiful results.
          </p>
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-gray-600">
              Team member profiles coming soon. Our board-certified providers
              bring extensive experience and a passion for aesthetic excellence.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CTA
          title="Experience the Dermabar Difference"
          description="Book your consultation today and discover how we can help you achieve your aesthetic goals."
          primaryButton={{ text: 'Book Consultation', href: '/book' }}
          secondaryButton={{ text: 'View Services', href: '/services' }}
        />
      </div>
    </div>
  )
}

