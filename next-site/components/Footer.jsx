'use client'

import Link from 'next/link'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/ritual', label: 'Ritual' },
  { href: '/rules', label: 'Rules' },
  { href: '/legends', label: 'Legends' },
  { href: '/life', label: 'Life' },
  { href: '/experience', label: 'Experience' },
]

export default function Footer() {
  return (
    <footer className="bg-sumi py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Logo and tagline */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block">
            <h3 className="text-4xl font-japanese text-kinari mb-4 hover:text-kinari/80 transition-colors">
              相撲
            </h3>
          </Link>
          <p className="text-kinari/50 text-sm leading-loose max-w-md mx-auto">
            1,500 years of sacred tradition.<br />
            The spirit and beauty of Japan, shared with the world.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-kinari/40 text-sm tracking-[0.15em] uppercase hover:text-kinari transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-kinari/20 mx-auto mb-10" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-kinari/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} SUMO Cultural Project
          </p>
        </div>
      </div>
    </footer>
  )
}
