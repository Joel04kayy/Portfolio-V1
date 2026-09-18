'use client'

import { useEffect, useState } from 'react'

export default function Template({ children }) {
  const [transitionDirection, setTransitionDirection] = useState(null)

  useEffect(() => {
    const direction = window.sessionStorage.getItem('page-transition-direction')

    if (!direction) return

    window.sessionStorage.removeItem('page-transition-direction')
    setTransitionDirection(direction)

    const frame = requestAnimationFrame(() => {
      document.documentElement.dataset.pageTransitionDirection = direction
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={`page-transition ${transitionDirection ? `page-transition-${transitionDirection}` : ''}`}>
      {children}
    </div>
  )
}
