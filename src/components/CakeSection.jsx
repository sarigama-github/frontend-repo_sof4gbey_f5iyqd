import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ConfettiBurst({ show }) {
  const pieces = Array.from({ length: 50 })
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {pieces.map((_, i) => {
            const left = Math.random() * 100
            const delay = Math.random() * 0.2
            const duration = 1.2 + Math.random() * 0.8
            const rotate = (Math.random() * 2 - 1) * 180
            const size = 6 + Math.random() * 6
            const colors = ['#fb7185', '#f472b6', '#fda4af', '#fbcfe8', '#fde68a']
            const bg = colors[i % colors.length]
            return (
              <motion.span
                key={i}
                className="absolute rounded"
                style={{ left: `${left}%`, width: size, height: size, backgroundColor: bg }}
                initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
                animate={{ y: ['0%', '110%'], x: [0, (Math.random() * 2 - 1) * 60], rotate }}
                transition={{ duration, delay, ease: 'easeOut' }}
              />
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function CakeSection({ onShowMessage }) {
  const [blown, setBlown] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (blown) {
      setShowConfetti(true)
      const t1 = setTimeout(() => setShowConfetti(false), 1600)
      const t2 = setTimeout(() => setShowCTA(true), 2000)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [blown])

  const handleBlow = () => {
    if (!blown) setBlown(true)
  }

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center px-5 py-16 bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{background:'radial-gradient(1200px 500px at 50% -100px, rgba(255,236,179,0.5), transparent 60%)'}} />
      </div>

      <div className="w-full max-w-sm text-center relative">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-rose-500 text-sm mb-2">
          Tap the cake to make a wish ✨
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-[600] text-2xl text-rose-800 mb-6">
          <span className="font-[cursive] drop-shadow">Happy 16th Birthday, My Princess 💞</span>
        </motion.h2>

        <motion.div
          onClick={handleBlow}
          className="relative mx-auto"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: [0.95, 1, 0.98, 1], opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Cake plate */}
          <div className="relative">
            <div className="mx-auto h-3 w-44 rounded-full bg-gradient-to-r from-rose-200 via-amber-200 to-rose-200 blur-sm" />

            {/* Cake body */}
            <div className="mx-auto mt-2 w-60 h-36 rounded-t-[28px] bg-gradient-to-b from-pink-300 to-rose-400 shadow-xl relative overflow-visible">
              {/* Icing drips */}
              <div className="absolute -top-4 inset-x-0 mx-auto w-64 h-10 bg-gradient-to-b from-rose-100 to-pink-100 rounded-t-[32px]" />
              <div className="absolute top-4 inset-x-4 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-rose-200 rounded-b-full" />
                ))}
              </div>

              {/* Candles */}
              <div className="absolute -top-18 left-1/2 -translate-x-1/2 flex gap-4">
                {[0,1,2].map((c) => (
                  <div key={c} className="relative flex flex-col items-center">
                    <div className="w-1.5 h-6 bg-gradient-to-b from-rose-200 to-rose-400 rounded-sm shadow-sm" />
                    {/* Flame */}
                    <motion.span
                      className="absolute -top-4 w-3 h-4 rounded-full"
                      style={{ background: 'radial-gradient(circle at 50% 30%, #ffd166, #ff9f1c 60%, rgba(255,159,28,0.0) 70%)', filter: 'blur(0.2px)' }}
                      initial={{ opacity: 1, scale: 1 }}
                      animate={blown ? { opacity: 0, scale: 0.6 } : { opacity: [0.8, 1, 0.9, 1], scale: [1, 1.05, 0.98, 1] }}
                      transition={{ duration: blown ? 0.4 : 1, repeat: blown ? 0 : Infinity }}
                    />
                  </div>
                ))}
              </div>

              {/* Sprinkles */}
              <div className="absolute inset-0">
                {[...Array(40)].map((_, i) => (
                  <span key={i} className="absolute w-1.5 h-1.5 bg-rose-200 rounded-full opacity-70" style={{ top: `${10 + Math.random()*70}%`, left: `${Math.random()*90}%`, transform: `rotate(${Math.random()*360}deg)` }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <ConfettiBurst show={showConfetti} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: blown ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-rose-700"
        >
          You just made a wish… and I hope it comes true 💖
        </motion.p>

        <AnimatePresence>
          {showCTA && (
            <motion.button
              onClick={onShowMessage}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-6 py-3 shadow-lg shadow-rose-300/50 active:scale-[0.98]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Tap to read your message 💌
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
