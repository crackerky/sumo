'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout showFooter={false}>
      {/* Full-screen Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-kinari overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1C1C1C 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Main Japanese Title */}
            <h1 className="font-japanese text-sumi mb-8">
              <span className="block text-8xl md:text-9xl lg:text-[12rem] font-medium tracking-wider">
                相撲
              </span>
            </h1>

            {/* English Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl tracking-[0.4em] text-usuzumi font-light uppercase mb-12"
            >
              The Ancient Art
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm md:text-base text-usuzumi/60 max-w-lg mx-auto leading-relaxed mb-16"
            >
              1,500 years of sacred tradition. Where sport meets spirituality,
              and every movement tells a story of ancient Japan.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
              >
                <span>Begin the Journey</span>
                <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-xs tracking-[0.3em] text-usuzumi/40 uppercase">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-sumi/20 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Preview Section - Minimal */}
      <section className="min-h-screen flex items-center justify-center bg-gofun">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-japanese text-sumi leading-relaxed mb-12">
              More than a sport.<br />
              A living tradition.
            </p>

            <p className="text-usuzumi text-base md:text-lg leading-loose max-w-2xl mx-auto mb-16">
              Sumo is Japan&apos;s oldest sport, born from Shinto ritual and steeped in
              centuries of ceremony. It is a world where 150-kilogram athletes
              become artists, and every match is a prayer.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 bg-sumi text-kinari text-sm tracking-[0.2em] uppercase hover:bg-sumi/90 transition-colors"
            >
              Discover Sumo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-32 bg-kinari">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-sm tracking-[0.3em] uppercase text-usuzumi mb-16"
          >
            Explore
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { href: '/ritual', title: '儀式', subtitle: 'The Sacred Ritual', desc: 'Ancient ceremonies that connect sumo to its divine origins' },
              { href: '/rules', title: '規則', subtitle: 'The Rules', desc: 'Simple objectives, complex techniques' },
              { href: '/legends', title: '横綱', subtitle: 'The Legends', desc: 'The greatest champions in sumo history' },
              { href: '/life', title: '生活', subtitle: 'The Life', desc: 'A day in the world of a sumo wrestler' },
              { href: '/experience', title: '体験', subtitle: 'Experience', desc: 'Witness the tournaments live' },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block p-8 bg-gofun hover:bg-shironeri transition-colors group"
                >
                  <span className="text-4xl font-japanese text-sumi group-hover:text-shu transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-sm tracking-[0.15em] uppercase text-usuzumi mt-2 mb-4">
                    {item.subtitle}
                  </span>
                  <span className="block text-sm text-usuzumi/70 leading-relaxed">
                    {item.desc}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-sumi text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-japanese text-kinari mb-6">
              相撲
            </h2>
            <p className="text-kinari/50 text-sm leading-loose max-w-md mx-auto mb-10">
              1,500 years of sacred tradition.<br />
              The spirit and beauty of Japan, shared with the world.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 border border-kinari/30 text-kinari text-sm tracking-[0.2em] uppercase hover:bg-kinari hover:text-sumi transition-colors"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
