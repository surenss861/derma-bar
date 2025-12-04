import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import Testimonials from '@/components/home/Testimonials'
import TrustSignals from '@/components/home/TrustSignals'
import FeatureSection from '@/components/home/FeatureSection'
import FounderIntro from '@/components/home/FounderIntro'
import SEOContent from '@/components/home/SEOContent'
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery'
import TrainingPreview from '@/components/home/TrainingPreview'
import FeaturedTreatments from '@/components/home/FeaturedTreatments'
import FAQ from '@/components/ui/FAQ'
import CTA from '@/components/ui/CTA'

const homePageFAQs = [
  {
    question: 'What should I expect during my first consultation?',
    answer: 'Your first consultation at Derma Bar™ includes a comprehensive skin analysis, discussion of your aesthetic goals, and a personalized treatment plan. Our expert providers will answer all your questions and ensure you feel comfortable and informed before any treatment.',
  },
  {
    question: 'How do I prepare for my treatment?',
    answer: 'Preparation varies by treatment type. For injectables, we recommend avoiding blood-thinning medications and supplements for 1-2 weeks prior. For laser treatments, avoid sun exposure and certain skincare products. We\'ll provide detailed pre-treatment instructions during your consultation.',
  },
  {
    question: 'Are treatments safe?',
    answer: 'Yes, all treatments at Derma Bar™ are performed by board-certified medical professionals using FDA-approved products and Health Canada-compliant protocols. We prioritize safety and use the latest medical-grade technology to ensure optimal results with minimal risk.',
  },
  {
    question: 'How long do results last?',
    answer: 'Results vary by treatment. Botox typically lasts 3-4 months, dermal fillers 6-18 months, while laser treatments can provide long-term results with proper maintenance. We\'ll discuss expected duration during your consultation.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options including CareCredit, Affirm, and payment plans to make treatments accessible. Ask about financing during your consultation.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <FounderIntro />
      <ServicesOverview />
      <FeaturedTreatments />
      <BeforeAfterGallery />
      <Testimonials />
      <FeatureSection />
      <TrainingPreview />
      <SEOContent />
      <FAQ items={homePageFAQs} />
      <CTA
        title="Ready to Begin Your Journey?"
        description="Book your consultation today and discover personalized treatments tailored to your unique beauty goals."
        primaryButton={{ text: 'Book Appointment', href: '/book' }}
        secondaryButton={{ text: 'Learn More', href: '/about' }}
      />
    </>
  )
}

