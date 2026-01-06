'use client'

import { motion } from 'framer-motion'

export default function Section({
  id,
  children,
  className = '',
  bg = 'kinari', // kinari, gofun, shironeri
}) {
  const bgClasses = {
    kinari: 'bg-kinari',
    gofun: 'bg-gofun',
    shironeri: 'bg-shironeri',
  }

  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 lg:py-40 ${bgClasses[bg]} ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ tag, title, titleJp, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <span className="section-tag block mb-4">
          {tag}
        </span>
      )}

      <h2 className="section-title mb-3">
        {title}
      </h2>

      {titleJp && (
        <p className="text-usuzumi text-sm tracking-[0.2em] mb-6">
          {titleJp}
        </p>
      )}

      {/* 朱の線 */}
      {center && (
        <div className="shu-line mx-auto mb-6" />
      )}

      {subtitle && (
        <p className="text-usuzumi text-sm md:text-base max-w-xl mx-auto leading-loose">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function Container({ children, className = '', narrow = false }) {
  return (
    <div className={`${narrow ? 'max-w-3xl' : 'max-w-5xl'} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
