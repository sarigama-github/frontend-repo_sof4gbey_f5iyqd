import React from 'react'
import { motion } from 'framer-motion'

export default function FinalSection({ onReplay }) {
  return (
    <section className="px-5 py-20 bg-gradient-to-b from-rose-50 to-white text-center">
      <div className="max-w-md mx-auto">
        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-xl text-rose-800">
          “No words can ever describe how much I love you… Happy 16th Birthday, my forever girl 💖”
        </motion.p>
        <motion.div className="mt-6 text-2xl" animate={{ opacity: [0.6,1,0.6], scale: [1,1.06,1] }} transition={{ duration: 2.4, repeat: Infinity }}>
          ✨
        </motion.div>

        <button onClick={onReplay} className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-6 py-3 shadow-lg shadow-rose-300/50 active:scale-[0.98]">
          Replay the surprise ✨
        </button>
      </div>
    </section>
  )
}
