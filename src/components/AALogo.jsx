import React from 'react'
import { motion } from 'framer-motion'

/**
 * AALogo — uses the real Attar Ayoub logo image (transparent background).
 *
 * @param {number}  size      width in px  (height auto, preserves aspect ratio)
 * @param {boolean} glow      pulsing purple+gold glow animation (default true)
 * @param {boolean} showText  unused — kept for API compatibility
 */
export default function AALogo({ size = 48, glow = true, showText = true }) {
  const glowAnim = glow
    ? {
        filter: [
          'drop-shadow(0 0 4px rgba(123,63,228,0.6)) drop-shadow(0 0 8px rgba(245,166,35,0.3))',
          'drop-shadow(0 0 12px rgba(168,85,247,0.9)) drop-shadow(0 0 20px rgba(252,211,77,0.6))',
          'drop-shadow(0 0 4px rgba(123,63,228,0.6)) drop-shadow(0 0 8px rgba(245,166,35,0.3))',
        ],
      }
    : {}

  return (
    <motion.img
      src="/logo_attar_ayoub_v4.png"
      alt="Attar Ayoub logo"
      width={size}
      style={{ width: size, height: 'auto', display: 'inline-block', flexShrink: 0 }}
      animate={glowAnim}
      transition={glow ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } : {}}
      draggable={false}
    />
  )
}
