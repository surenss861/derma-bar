import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import Testimonials from '@/components/home/Testimonials'
import TrustSignals from '@/components/home/TrustSignals'
import FeatureSection from '@/components/home/FeatureSection'
import FounderIntro from '@/components/home/FounderIntro'
import SEOContent from '@/components/home/SEOContent'
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery'
import TrainingPreview from '@/components/home/TrainingPreview'
import CTA from '@/components/ui/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <FounderIntro />
      <ServicesOverview />
      <BeforeAfterGallery />
      <Testimonials />
      <SEOContent />
      <FeatureSection />
      <TrainingPreview />
      <CTA
        title="Ready to Begin Your Journey?"
        description="Book your consultation today and discover personalized treatments tailored to your unique beauty goals."
        primaryButton={{ text: 'Book Appointment', href: '/book' }}
        secondaryButton={{ text: 'Learn More', href: '/about' }}
      />
    </>
  )
}

