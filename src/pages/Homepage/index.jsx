import React from 'react'
import { CommunitySection } from './_components/Fond'
import { HeroBanner } from '../../components/HeroBanner'
import { ContactSection } from './_components/Contact'
const index = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        <header>
          <HeroBanner />
        </header>
        <CommunitySection />
        <ContactSection />
      </main>
    </>
  )
}

export default index