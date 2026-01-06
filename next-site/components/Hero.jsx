'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-kinari"
    >
      {/* 控えめな装飾線 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-sumi/10 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 py-20">
        {/* 縦書きの装飾（左） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <p className="tategaki text-usuzumi text-xs tracking-[0.5em]">
            日本の伝統文化
          </p>
        </motion.div>

        {/* 縦書きの装飾（右） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <p className="tategaki text-usuzumi text-xs tracking-[0.5em]">
            千五百年の歴史
          </p>
        </motion.div>

        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-japanese text-sumi">
            <span className="block text-7xl md:text-8xl lg:text-9xl font-medium tracking-wider mb-4">
              相撲
            </span>
            <span className="block text-lg md:text-xl tracking-[0.5em] text-usuzumi font-light">
              SUMO
            </span>
          </h1>
        </motion.div>

        {/* 朱の線 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-shu mx-auto mb-8"
        />

        {/* サブタイトル */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-usuzumi text-sm md:text-base max-w-md mx-auto mb-12 tracking-wider leading-loose"
        >
          Japan's Sacred Sport & Cultural Heritage
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ y: -2 }}
          className="btn-outline"
        >
          詳しく見る
        </motion.button>
      </div>

      {/* 下部のスクロール案内 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-usuzumi text-xs tracking-[0.3em] mb-4">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-sumi/30"
        />
      </motion.div>
    </section>
  )
}
