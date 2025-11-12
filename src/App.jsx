import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import CakeSection from './components/CakeSection'
import MessageSection from './components/MessageSection'
import GallerySection from './components/GallerySection'
import FinalSection from './components/FinalSection'

function BackgroundAudio({ play }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const tryPlay = async () => {
      try { if (play) await el.play() } catch {}
    }
    tryPlay()
  }, [play])

  return (
    <audio ref={ref} loop preload="auto" src="https://cdn.pixabay.com/download/audio/2022/03/30/audio_25f2c0894a.mp3?filename=romantic-piano-main-112199.mp3" />
  )
}

export default function App() {
  const [stage, setStage] = useState('hero')

  const handleEnter = () => setStage('cake')
  const handleShowMessage = () => {
    // smooth scroll to message
    const el = document.getElementById('message')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStage('hero')
    setTimeout(() => setStage('cake'), 1200)
  }

  return (
    <div className="min-h-[100dvh] bg-white text-rose-900 selection:bg-rose-200 selection:text-rose-900">
      <BackgroundAudio play={true} />

      <HeroSection show={stage === 'hero'} onEnter={handleEnter} />

      {stage !== 'hero' && (
        <>
          <CakeSection onShowMessage={handleShowMessage} />

          <div id="message">
            <MessageSection />
          </div>

          <GallerySection />

          <FinalSection onReplay={handleReplay} />
        </>
      )}
    </div>
  )
}
