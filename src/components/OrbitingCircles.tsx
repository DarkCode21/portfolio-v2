// src/components/OrbitingCircles.tsx
'use client'
import React from 'react'

type Props = {
  children: React.ReactNode
  iconSize?: number
  radius?: number
  reverse?: boolean
  speed?: number
}

export function OrbitingCircles({ children, iconSize = 32, radius = 140, reverse = false }: Props) {
  const items = React.Children.toArray(children)
  const count = items.length || 1

  return (
    <div className="relative">
      {items.map((child, i) => {
        const angle = (i / count) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={i}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              width: iconSize,
              height: iconSize,
              animation: 'orbit 50s linear infinite',
              animationDirection: reverse ? 'reverse' as any : 'normal',
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
