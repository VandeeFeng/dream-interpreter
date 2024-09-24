'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Cloud {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
}

export default function VanGoghClouds() {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    const newClouds: Cloud[] = Array.from({ length: 30 }, (_, i) => ({ // Increased number of clouds
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      color: `rgb(${Math.random() * 50 + 200}, ${Math.random() * 50 + 200}, ${Math.random() * 100 + 155})`
    }))
    setClouds(newClouds)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: cloud.size,
            height: cloud.size,
            backgroundColor: cloud.color,
            x: cloud.x,
            y: cloud.y,
            rotate: cloud.rotation,
          }}
          animate={{
            x: [cloud.x, cloud.x + (Math.random() - 0.5) * 100],
            y: [cloud.y, cloud.y + (Math.random() - 0.5) * 100],
            rotate: [cloud.rotation, cloud.rotation + 360],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: Math.random() * 10 + 5, // Reduced duration to make clouds move faster
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
