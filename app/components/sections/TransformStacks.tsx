"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import CustomerTransform from "./CustomerTransform"
import FinancialTransform from "./FinancialTransform"
import OperationalTransform from "./OperationalTransform"
import WorkforceTransform from "./WorkforceTransform"
import Image from "next/image"

export default function TransformStacks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Move useTransform hooks outside of callbacks
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  // Create all transforms upfront
  const translateY0 = useTransform(scrollYProgress, [0, 0.25], [100, 0])
  const translateY1 = useTransform(scrollYProgress, [0.25, 0.5], [100, 0])
  const translateY2 = useTransform(scrollYProgress, [0.5, 0.75], [100, 0])
  const translateY3 = useTransform(scrollYProgress, [0.75, 1], [100, 0])

  const opacity0 = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
  const opacity3 = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  const cardTransforms = [
    { translateY: translateY0, opacity: opacity0 },
    { translateY: translateY1, opacity: opacity1 },
    { translateY: translateY2, opacity: opacity2 },
    { translateY: translateY3, opacity: opacity3 },
  ]

  const cards = [
    {
      title: "Customer Transform",
      Component: CustomerTransform,
    },
    {
      title: "Financial Transform",
      Component: FinancialTransform,
    },
    {
      title: "Operational Transform",
      Component: OperationalTransform,
    },
    {
      title: "Workforce Transform",
      Component: WorkforceTransform,
    },
  ]

  return (
    <section ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          scale: imageScale,
          opacity: imageOpacity
        }}
      >
        <Image
          src="/transform-bg.jpg"
          alt="Transform background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Transform Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage our expertise to navigate digital transformation and build a stronger, 
            more resilient business for the future.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-0">
        {cards.map((card, index) => {
          const { translateY, opacity } = cardTransforms[index]
          const { Component } = card

          return (
            <motion.div
              key={index}
              style={{
                translateY,
                opacity,
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex: index,
              }}
            >
              <Component />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
} 