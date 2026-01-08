'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, SumoImage } from '../components/CinematicSection'

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        japanese="相撲とは"
        english="What is Sumo"
        subtitle="The world's oldest organized sport, where giants become artists"
      />

      {/* Origin Story */}
      <CinematicSection bg="gofun">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Origins</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-8 leading-tight">
              Born from<br />the Gods
            </h2>
            <p className="text-usuzumi leading-loose mb-6">
              According to Japanese mythology, the very right to rule the Japanese islands
              was decided by a sumo match between the gods Takemikazuchi and Takeminakata.
            </p>
            <p className="text-usuzumi leading-loose">
              This divine origin story, recorded in Japan&apos;s oldest texts, established sumo
              as more than mere competition—it became a sacred offering to the gods,
              performed at Shinto shrines for over 1,500 years.
            </p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <SumoImage src="/ukiyoe-wrestlers.jpg" alt="Ancient Sumo Ukiyo-e" aspect="video" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* The Sacred Sport */}
      <CinematicSection bg="kinari">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Shinto Roots</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi mb-12 leading-tight">
              Where Sport<br />Meets Spirit
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              Every element of sumo—from the salt thrown to purify the ring,
              to the roof suspended above it like a Shinto shrine—connects
              this ancient sport to Japan&apos;s indigenous spiritual tradition.
            </p>
            <p className="text-usuzumi leading-loose max-w-2xl mx-auto">
              The ring itself, called the dohyo, is considered sacred ground.
              Before each tournament, Shinto priests perform elaborate ceremonies
              to purify it and invite the gods to watch over the competition.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* The Rikishi */}
      <CinematicSection bg="gofun">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText delay={0.2} className="order-2 lg:order-1">
            <SumoImage src="/yokozuna-illustration.jpg" alt="Yokozuna Illustration" aspect="portrait" position="top" />
          </FadeInText>
          <FadeInText className="order-1 lg:order-2">
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">The Wrestlers</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-8 leading-tight">
              力士
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">RIKISHI — THE STRONG MEN</p>
            <p className="text-usuzumi leading-loose mb-6">
              Sumo wrestlers, or rikishi, dedicate their entire lives to the sport.
              Beginning in their teens, they enter a heya (stable) where they live,
              train, and serve under the guidance of a former champion.
            </p>
            <p className="text-usuzumi leading-loose">
              Rising through the ranks requires not just physical prowess,
              but mental discipline, respect for tradition, and an understanding
              of sumo&apos;s spiritual significance.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Philosophy */}
      <CinematicSection bg="kinari">
        <div className="text-center">
          <FadeInText>
            <p className="text-7xl md:text-8xl lg:text-9xl font-japanese text-sumi mb-8">
              心技体
            </p>
            <p className="text-sm tracking-[0.3em] uppercase text-usuzumi mb-12">
              Shin-Gi-Tai — Heart, Technique, Body
            </p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose max-w-2xl mx-auto mb-16">
              The philosophy at the heart of sumo. True strength comes not from
              the body alone, but from the unity of mind, skill, and physical power.
            </p>
          </FadeInText>
          <FadeInText delay={0.4}>
            <Link
              href="/ritual"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
            >
              <span>Explore the Rituals</span>
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
