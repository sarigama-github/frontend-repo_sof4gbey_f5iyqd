import React from 'react'
import { motion } from 'framer-motion'

const sampleImages = [
  { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop', caption: 'Day 1 💫' },
  { url: 'https://images.unsplash.com/photo-1518562180175-34a163b1a9b7?q=80&w=1200&auto=format&fit=crop', caption: 'My sunshine ☀️' },
  { url: 'https://images.unsplash.com/photo-1520719627573-5e2c1a6610f0?q=80&w=1200&auto=format&fit=crop', caption: 'Our smiles ❤️' },
]

export default function GallerySection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-md mx-auto">
        <h3 className="text-center text-2xl font-semibold text-rose-800 mb-6 italic">Our Moments Together 💕</h3>
        <p className="text-center text-rose-600 text-sm mb-4">Replace these with your photos later. You can tap a card to zoom.</p>

        <div className="grid grid-cols-2 gap-3">
          {sampleImages.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
              <motion.span initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="absolute bottom-2 left-2 text-white text-xs bg-rose-600/70 px-2 py-1 rounded-full backdrop-blur">
                {img.caption}
              </motion.span>
              <div className="absolute -inset-1 rounded-2xl blur-md bg-rose-300/30 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-sm text-rose-700/80">
          <p className="mb-2">Upload slots:</p>
          <ul className="list-disc list-inside">
            <li>Image 1 URL</li>
            <li>Image 2 URL</li>
            <li>Image 3 URL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
