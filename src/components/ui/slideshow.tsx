"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { src: "/embs-25.png", alt: "embs 2025" },
  { src: "/embs-1.jpeg", alt: "embs 2024" },
  { src: "/embs2.jpeg", alt: "embs 2023" },
  { src: "/embs3.jpeg"},
  { src: "/embs4.jpeg"},
  // add as many images as you want here
]

// How long each slide stays visible, in milliseconds
const SLIDE_DURATION = 3000

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // When we reach the last slide, wrap back to 0
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    // Cleanup: clear the interval when the component unmounts
    // so it doesn't keep running in the background
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex-1 flex justify-center items-center">
      {/* 
      */}
      <div className="relative w-full max-w-md aspect-video">
        <AnimatePresence mode="sync">
          <motion.img
            // Key is critical — when the key changes, AnimatePresence
            // treats it as a new element entering and the old one exiting.
            // Without a unique key, React reuses the same img element
            // and no animation happens at all.
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            // absolute so all slides occupy the same space and overlap
            className="absolute inset-0 border-amber-50 border-4 backdrop-blur-2xl rounded-2xl object-cover"
            // starting state when this slide enters
            initial={{ opacity: 0 }}
            // state while it's visible
            animate={{ opacity: 1 }}
            // state as it leaves (when the next slide takes over)
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
      </div>
    </div>
  )
}