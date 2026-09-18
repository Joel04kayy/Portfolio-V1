'use client';

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const navRef = useRef(null)
  const [selectedHref, setSelectedHref] = useState(pathname)
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    setSelectedHref(pathname)

    const selectedItem = navRef.current?.querySelector('[data-selected="true"]')
    if (selectedItem) {
      syncBubbleToElement(selectedItem)
    }
  }, [pathname])

  const syncBubbleToElement = (element) => {
    if (!navRef.current || !element) return

    const navRect = navRef.current.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    setHoverStyle({
      left: elementRect.left - navRect.left,
      width: elementRect.width,
      opacity: 1,
    })
  }

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: 'https://www.nextbuildpcs.com/', label: 'Next Build PCs', external: true },
    { href: '/contact', label: 'Contact' },
  ]

  const handleMouseMove = (event) => {
    if (!navRef.current) return

    const navRect = navRef.current.getBoundingClientRect()
    const x = event.clientX - navRect.left

    const hoveredItem = Array.from(navRef.current.querySelectorAll('[data-nav-item]')).find((node) => {
      const rect = node.getBoundingClientRect()
      return x >= rect.left - navRect.left && x <= rect.right - navRect.left
    })

    const selectedItem = navRef.current.querySelector('[data-selected="true"]')

    if (!hoveredItem) {
      if (selectedItem) {
        syncBubbleToElement(selectedItem)
      } else {
        setHoverStyle((prev) => ({ ...prev, opacity: 0 }))
      }
      return
    }

    const hoveredRect = hoveredItem.getBoundingClientRect()
    setHoverStyle({
      left: hoveredRect.left - navRect.left,
      width: hoveredRect.width,
      opacity: 1,
    })
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div className="relative mx-auto max-w-5xl rounded-full border border-white/15 bg-white/8 px-3 py-2 shadow-[0_8px_25px_rgba(9,25,40,0.18)] backdrop-blur-2xl sm:px-5 sm:py-3">
        <div className="relative flex items-center justify-between gap-3">
          <Link
            href="/"
            className={`nav-home shrink-0 ${
              pathname === '/' ? 'text-blue-300' : 'text-gray-200'
            }`}
            onClick={(event) => {
              setSelectedHref('/')
              requestAnimationFrame(() => {
                const target = event.currentTarget
                if (navRef.current && target) {
                  syncBubbleToElement(target)
                }
              })
            }}
          >
            <Image
              src="/JKlogo.png"
              alt="Home"
              width={60}
              height={60}
              className="h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] lg:h-[54px] lg:w-[54px]"
            />
          </Link>

          <div
            ref={navRef}
            onMouseEnter={() => {
              const selectedItem = navRef.current?.querySelector('[data-selected="true"]')
              if (selectedItem) syncBubbleToElement(selectedItem)
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              const selectedItem = navRef.current?.querySelector('[data-selected="true"]')
              if (selectedItem) {
                syncBubbleToElement(selectedItem)
              } else {
                setHoverStyle((prev) => ({ ...prev, opacity: 0 }))
              }
            }}
            className="relative flex items-center justify-end gap-1.5 rounded-full border border-white/10 bg-slate-950/20 p-1.5 sm:gap-2 md:gap-2.5"
          >
            <div
              className="pointer-events-none absolute inset-y-1.5 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.12),rgba(148,163,184,0.18))] shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_0_18px_rgba(255,255,255,0.2)] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: hoverStyle.left,
                width: hoverStyle.width,
                opacity: hoverStyle.opacity,
              }}
            />

            {navItems.map((item) => {
              const isActive = item.external ? false : selectedHref === item.href

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-nav-item="true"
                    className="nav-link relative z-10 inline-flex items-center justify-center rounded-full px-2 py-1.5 text-[10px] font-medium text-gray-200 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white hover:scale-[1.02] sm:px-3 sm:text-[11px] md:px-4 md:text-[0.95rem] lg:text-[1rem]"
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive}
                  data-nav-item="true"
                  data-selected={isActive}
                  onClick={(event) => {
                    setSelectedHref(item.href)
                    requestAnimationFrame(() => {
                      const target = event.currentTarget
                      if (navRef.current && target) {
                        syncBubbleToElement(target)
                      }
                    })
                  }}
                  className={`nav-link relative z-10 inline-flex items-center justify-center rounded-full px-2 py-1.5 text-[10px] font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] sm:px-3 sm:text-[11px] md:px-4 md:text-[0.95rem] lg:text-[1rem] ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 