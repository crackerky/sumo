'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, showFooter = true }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-kinari">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {showFooter && <Footer />}
    </div>
  )
}
