"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import CustomerTransform from "./CustomerTransform"
import FinancialTransform from "./FinancialTransform"
import OperationalTransform from "./OperationalTransform"
import WorkforceTransform from "./WorkforceTransform"

export default function TransformStacks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

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

  const cardTransforms = cards.map((_, index) => {
    return {
      translateY: useTransform(
        scrollYProgress,
        [index * 0.25, (index + 1) * 0.25],
        [100, 0],
      ),
      opacity: useTransform(
        scrollYProgress,
        [index * 0.25, (index + 1) * 0.25],
        [0, 1],
      ),
    }
  })

  return (
    <div ref={containerRef} className="relative min-h-[400vh] w-full">
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
    </div>
  )
} 