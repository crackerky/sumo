'use client'

import { motion } from 'framer-motion'

export default function CinematicSection({
  children,
  className = '',
  bg = 'kinari',
  fullHeight = true,
  id
}) {
  const bgClasses = {
    kinari: 'bg-kinari',
    gofun: 'bg-gofun',
    shironeri: 'bg-shironeri',
    sumi: 'bg-sumi',
  }

  return (
    <section
      id={id}
      className={`
        relative
        ${fullHeight ? 'min-h-screen' : 'py-32 md:py-40 lg:py-48'}
        flex items-center justify-center
        ${bgClasses[bg]}
        ${className}
      `}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}

export function FadeInText({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function LargeText({ children, className = '' }) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export function BodyText({ children, className = '' }) {
  return (
    <p className={`text-base md:text-lg text-usuzumi leading-loose max-w-2xl ${className}`}>
      {children}
    </p>
  )
}

export function Divider({ className = '' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`w-16 h-px bg-shu origin-left ${className}`}
    />
  )
}

export function ImagePlaceholder({ label, className = '', aspect = 'video' }) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${aspectClasses[aspect]} bg-shironeri flex items-center justify-center ${className}`}
    >
      <span className="text-lg md:text-xl font-japanese text-sumi/20">{label}</span>
    </motion.div>
  )
}
