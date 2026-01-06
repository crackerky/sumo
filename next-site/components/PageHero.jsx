'use client'

import { motion } from 'framer-motion'

export default function PageHero({
  japanese,
  english,
  subtitle,
  showScrollIndicator = true
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-kinari overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1C1C1C 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Japanese Title */}
          <h1 className="font-japanese text-sumi mb-6">
            <span className="block text-7xl md:text-8xl lg:text-9xl font-medium tracking-wider">
              {japanese}
            </span>
          </h1>

          {/* English Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-usuzumi font-light uppercase mb-8"
          >
            {english}
          </motion.p>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-base text-usuzumi/70 max-w-md mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[0.2em] text-usuzumi/50 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-sumi/30 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
