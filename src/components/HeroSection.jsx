import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const FloatingBit = ({ delay = 0, left = '10%' }) => (
  <motion.div
    className="absolute text-pink-300/70"
    style={{ left }}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [20, -40, 20], opacity: [0.2, 0.6, 0.2] }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    <span className="text-2xl">✧</span>
  </motion.div>
)

export default function HeroSection({ show, onEnter }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.section
          className="relative min-h-[100dvh] w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/70 via-rose-50/70 to-white/80 pointer-events-none" />

          <div className="absolute inset-0">
            <FloatingBit delay={0} left="12%" />
            <FloatingBit delay={1.3} left="28%" />
            <FloatingBit delay={2.1} left="64%" />
            <FloatingBit delay={0.7} left="82%" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 min-h-[100dvh]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="backdrop-blur-sm rounded-3xl px-6 py-5 max-w-md"
            >
              <p className="text-rose-500 text-sm tracking-wide mb-2">You finally reached your surprise 💖</p>
              <h1 className="text-3xl leading-snug sm:text-4xl font-semibold text-rose-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
                You made it, my love… and now it’s time to celebrate YOU 🎂💫
              </h1>
            </motion.div>

            <motion.button
              onClick={onEnter}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-6 py-3 shadow-lg shadow-rose-300/50 active:scale-[0.98]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Tap to continue your celebration ✨
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
