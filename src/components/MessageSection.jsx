import React from 'react'
import { motion } from 'framer-motion'

export default function MessageSection() {
  const paragraphs = [
    'Your special birthday message from me will appear here ❤️',
  ]

  return (
    <section className="relative px-5 py-16 bg-gradient-to-b from-amber-50 via-rose-50 to-white">
      <div className="max-w-md mx-auto text-center">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-b from-rose-200/60 to-amber-200/60 rounded-3xl blur-xl" aria-hidden />
          <div className="relative rounded-3xl p-6 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center bg-no-repeat">
            <div className="backdrop-blur-[2px] bg-rose-50/90 rounded-2xl p-5 shadow-lg">
              <h3 className="font-[cursive] text-2xl text-rose-700 mb-4">A Note For You 💌</h3>
              <div className="space-y-4 text-rose-900/90">
                {paragraphs.map((p, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.2 }} className="leading-relaxed">
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
          {/* floating hearts */}
          <motion.div className="absolute -top-6 -right-4 text-rose-400" animate={{ y: [0,-6,0], opacity: [0.8,1,0.8] }} transition={{ duration: 3, repeat: Infinity }}>
            ❤️
          </motion.div>
          <motion.div className="absolute -bottom-6 -left-4 text-rose-300" animate={{ y: [0,6,0], opacity: [0.7,1,0.7] }} transition={{ duration: 3.2, repeat: Infinity }}>
            💖
          </motion.div>
        </div>
      </div>
    </section>
  )
}
