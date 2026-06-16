"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

const events = [
  {
    date: "Mar 25",
    year: "2026",
    title: "The Silent Toxin",
    image: "/events/silenttoxin.jpeg",
    description:
      "A mystery-driven biomedical challenge exploring hidden toxins, diagnosis, and critical thinking through immersive problem-solving.",

  },
  {
    date: "Feb",
    year: "2026",
    title: "ElectroBio: Project Expo",
    image: "/events/electro-bio.jpg.jpeg",
    description:
      "An innovation showcase where participants presented biomedical engineering projects blending electronics, healthcare, and futuristic technology.",
  },
  {
    date: "Feb 10",
    year: "2026",
    title: "Crypt-a-Pharm",
    image: "/events/cryptapharmm.jpg.jpeg",
    description:
      "A pharmaceutical decoding challenge combining medical clues, chemistry, and strategy in a high-energy competitive experience.",
  },
  {
    date: "Sep 26",
    year: "2025",
    title: "404: Cure Not Found",
    image: "/events/curenotfound.jpg.jpeg",
    description:
      "A biomedical mystery event where participants searched for missing cures through diagnosis puzzles, research clues, and medical reasoning.",
  },
  {
    date: "Jul 23",
    year: "2025",
    title: "Bio Bluff",
    image: "/events/bioblufff.jpg.jpeg",
    description:
      "An interactive challenge of scientific deception, deduction, and biomedical trivia where participants separated facts from convincing bluffs.",
  },
  {
    date: "Jun",
    year: "2025",
    title: "Inventrek",
    image: "/events/iventrek.jpg.jpeg",
    description:
      "A creativity-driven innovation event encouraging participants to ideate futuristic biomedical solutions and breakthrough healthcare concepts.",
  },
  {
    date: "Apr 7",
    year: "2025",
    title: "Lab-on-a-Chip for Brain Medicine",
    image: "/events/labonchip.jpg.jpeg",
    description:
      "An insightful session exploring advanced lab-on-chip technologies and their revolutionary applications in neuroscience and precision medicine.",
  },
  {
    date: "Mar 6",
    year: "2025",
    title: "BioConnect",
    image: "/events/bioconnect.jpg.jpeg",
    description:
      "A networking and collaboration experience bringing together curious minds passionate about biomedical engineering and healthcare innovation.",
    
  },
  
  {
    date: "Sep 29",
    year: "2024",
    title: "Lab of Lunacy",
    image: "/events/laboflunacy.jpeg",
    description:
      "A biomedical escape room where participants solved medical mysteries and experimental challenges hidden within a mad scientist’s lab.",

  },

  {
    date: "Sep 21",
    year: "2024",
    title: "Circuit of Lies",
    image: "/events/circuitoflies.jpeg",
    description:
    "Circuit of Lies was a hands-on workshop where participants built a lie detector from scratch and tested it on themselves and friends. With no prior. experience needed, they learned the science behind lie detection, circuit design, and biosignals, making it a thrilling blend of electronics, physiology, and fun"
  },
  
  {
    date: "Aug 21",
    year: "2024",
    title: "CASA",
    image: "/events/casa.jpg.jpeg",
    description:
      "An engaging biomedical initiative focused on collaboration, awareness, and interactive learning through creative scientific activities.",
  },
  {
    date: "Jul 8",
    year: "2024",
    title: "Nexum: Potential to Cure Unlocked",
    image: "/events/nexum.jpg.jpeg",
    description:
      "An exploration of emerging biomedical breakthroughs and innovative pathways shaping the future of diagnosis and treatment.",
  },
  {
    date: "Jun 26",
    year: "2024",
    title: "Road to Recovery",
    image: "/events/roadtorecovery.jpg.jpeg",
    description:
      "A healthcare-focused event highlighting patient recovery journeys, medical innovation, and the science behind rehabilitation.",
  },
  {
    date: "Mar 19",
    year: "2024",
    title: "CrisisX 2.0",
    image : "/events/crisisx2024.jpeg",
    description:
    "CrisisX 2.0 is a medical emergency simulation event that gives students a look into the daily lives of healthcare professionals and motivates them to innovate to make emergency healthcare more efficient and convenient"
  },
  {
    date: "Jun 7",
    year: "2023",
    title: "CrisisX",
    image: "/events/crisisx2023.jpeg",
    description: 
    "An immersive emergency-response challenge where participants tackled critical healthcare scenarios, explored the role of technology in patient care, and developed decision-making skills under pressure. CrisisX blended innovation, teamwork, and real-world medical problem-solving into a dynamic learning experience."

  },
]

export default function EventsRolodex() {

  const [active, setActive] = useState(0)
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
})
  const isAnimating = useRef(false)
 

  useEffect(() => {

    const handleWheel = (e: WheelEvent) => {

  e.preventDefault()

      if (isAnimating.current) return

      isAnimating.current = true

      if (e.deltaY > 0) {

        setActive((prev) =>
          prev < events.length - 1 ? prev + 1 : prev
        )

      } else {

        setActive((prev) =>
          prev > 0 ? prev - 1 : prev
        )

      }

      setTimeout(() => {
        isAnimating.current = false
      }, 900)
    }

   window.addEventListener("wheel", handleWheel, {
  passive: false,
})

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }

  }, [])
  useEffect(() => {

  const handleMouseMove = (e: MouseEvent) => {

    const x =
      (e.clientX / window.innerWidth - 0.5) * 3

    const y =
      (e.clientY / window.innerHeight - 0.5) * 3

    setMousePosition({
      x,
      y,
    })
  }

  window.addEventListener(
    "mousemove",
    handleMouseMove
  )

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    )
  }

}, [])



  return (

    <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">

 

      {/* RIGHT TIMELINE */}

      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30">

        <div className="flex flex-col gap-1 items-end">

          {events.map((event, i) => {

            const isActive = i === active

            return (

              <motion.button
                key={i}
                onClick={() => setActive(i)}
                 whileHover={{
    x: -6,
  }}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  x: isActive ? -10 : 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex items-center gap-4"
              >

                <div
                  className={`
                    text-right transition-all duration-500
                   ${isActive
  ? "text-pink-300"
  : "text-zinc-600"}

                  `}
                >

                  <div className="text-[9px] tracking-[0.25em] uppercase">
                    {event.date}
                  </div>

                  <div className="text-[10px]">
                    {event.year}
                  </div>

                </div>

                <div
                  className={`
                    rounded-full transition-all duration-500
                    ${isActive
  ? "w-10 h-[2px] bg-white"
  : "w-6 h-[1px] bg-zinc-700"}
                  `}
                />

              </motion.button>
            )
          })}

        </div>

      </div>

      {/* CARD STACK */}

      <div
        className="relative w-[500px] h-[620px]"
        style={{
          perspective: "2500px",
        }}
      >

{events.map((event, i) => {

  const offset = i - active

  return (

    <motion.div
              key={i}
              animate={{
  y: offset * 35,

  scale: 1 - Math.abs(offset) * 0.05,
    

  rotateY:
    offset === 0
      ? mousePosition.x * 0.3
      : 0,

  rotateX:
    offset === 0
      ? -2 - mousePosition.y
      : -2,

  z: -Math.abs(offset) * 180,

  opacity:
    Math.abs(offset) > 5
      ? 0
      : 1,
}}
              transition={{
  y: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },

  scale: {
        duration: 0.9,
      },
}}
              className="
  absolute inset-0
  rounded-[38px]
  overflow-hidden
  border border-pink-400/20
  bg-zinc-950/90
backdrop-blur-md
  shadow-xl
" 
              style={{
                zIndex: 100 - Math.abs(offset),
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >

              {/* GLOW */}

            
              {/* CONTENT */}

             <div className="relative z-10 flex flex-col h-full p-8 overflow-hidden">

              <div className="flex-1 overflow-y-auto pr-2">

  <div className="inline-flex items-center gap-2 text-pink-200 text-xs tracking-[0.35em] uppercase border border-white/10 bg-pink-500/10 rounded-full px-4 py-2">
    IEEE EMBS
  </div>

  <div className="mt-7">

    
  <>
  

<img
  src={event.image}
  alt={event.title}
  className="w-full rounded-2xl mb-8 object-cover max-h-[260px]"
/>
</>

 

    <h2 className="text-white text-4xl font-black leading-[1.05]">
      {event.title}
    </h2>

    <p className="mt-3 text-zinc-300 leading-[1.7] text-[15px] max-w-[95%]">
      {event.description}
    </p>

  </div>

</div>

<div className="mt-auto pt-5">

  <div className="w-full h-px bg-cyan-400/20 mb-4" />

  <div className="flex items-center justify-between">

    <p className="text-cyan-200 text-lg">
      {event.date}, {event.year}
    </p>

    <p className="text-zinc-500 text-sm">
      Scroll to navigate
    </p>

  </div>

</div>

</div>
     

                      </motion.div>
          )
        })}

      </div>

    </section>  
  )
}