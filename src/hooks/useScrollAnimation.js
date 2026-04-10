import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean `inView`.
 * `inView` becomes true once the element enters the viewport
 * and stays true (one-shot trigger for entrance animations).
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // fire once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

/**
 * Returns the current active section id based on scroll position.
 * Pass an array of section ids.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}
