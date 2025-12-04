'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function BookingWidget() {
  return (
    <div className="booking-widget">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=YOUR_ACUITY_ID"
        title="Schedule Appointment"
        frameBorder="0"
        className="w-full min-h-[800px]"
        id="acuity-iframe"
      />
      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}

