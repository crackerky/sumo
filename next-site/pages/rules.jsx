'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, SumoImage } from '../components/CinematicSection'

export default function RulesPage() {
  return (
    <Layout>
      <PageHero
        japanese="規則"
        english="The Rules"
        subtitle="Simple to understand, a lifetime to master"
      />

      {/* The Objective */}
      <CinematicSection bg="gofun">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">The Objective</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi mb-12 leading-tight">
              Two Ways<br />to Win
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-left max-w-3xl mx-auto">
              <div className="text-center md:text-left">
                <p className="text-6xl font-japanese text-shu mb-4">一</p>
                <h3 className="text-xl font-japanese text-sumi mb-4">Force Out</h3>
                <p className="text-usuzumi leading-loose">
                  Push your opponent out of the ring. Any part of their body
                  touching outside the straw bales means defeat.
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-6xl font-japanese text-shu mb-4">二</p>
                <h3 className="text-xl font-japanese text-sumi mb-4">Force Down</h3>
                <p className="text-usuzumi leading-loose">
                  Make any part of your opponent&apos;s body—other than the soles
                  of their feet—touch the ground inside the ring.
                </p>
              </div>
            </div>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Kimarite */}
      <CinematicSection bg="kinari">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Techniques</span>
            <h2 className="text-5xl md:text-6xl font-japanese text-sumi mb-4">
              決まり手
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">KIMARITE — WINNING MOVES</p>
            <p className="text-usuzumi leading-loose mb-6">
              There are 82 officially recognized winning techniques in sumo,
              ranging from simple pushes to spectacular throws and trips.
            </p>
            <p className="text-usuzumi leading-loose">
              The most common is yorikiri—driving your opponent out while
              maintaining belt grip. The most dramatic are throws like
              uwatenage, where wrestlers fly through the air.
            </p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <SumoImage src="/kimarite.jpg" alt="Sumo Throwing Technique" aspect="square" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Common Techniques */}
      <CinematicSection bg="gofun">
        <div className="max-w-4xl mx-auto">
          <FadeInText>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Essential Moves</span>
              <h2 className="text-3xl md:text-4xl font-japanese text-sumi">
                The Core Techniques
              </h2>
            </div>
          </FadeInText>

          <div className="space-y-12">
            {[
              {
                name: '寄り切り',
                romaji: 'Yorikiri',
                desc: 'Force out while holding the belt. The most common winning technique, accounting for about 30% of all victories.'
              },
              {
                name: '押し出し',
                romaji: 'Oshidashi',
                desc: 'Push out without belt grip. Pure power technique, requiring explosive forward pressure.'
              },
              {
                name: '上手投げ',
                romaji: 'Uwatenage',
                desc: 'Overarm throw. A spectacular technique where the attacker uses belt grip to throw their opponent to the ground.'
              },
              {
                name: '叩き込み',
                romaji: 'Hatakikomi',
                desc: 'Slap down. A defensive technique, using the opponent\'s forward momentum against them.'
              },
            ].map((technique, index) => (
              <FadeInText key={technique.romaji} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-12 border-b border-sumi/10 last:border-0">
                  <div className="md:w-32 flex-shrink-0">
                    <p className="text-3xl font-japanese text-sumi">{technique.name}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm tracking-[0.15em] uppercase text-shu mb-2">{technique.romaji}</p>
                    <p className="text-usuzumi leading-loose">{technique.desc}</p>
                  </div>
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* Prohibited */}
      <CinematicSection bg="kinari">
        <div className="text-center max-w-3xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Forbidden</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-12">
              禁じ手
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg text-usuzumi leading-loose mb-12">
              Sumo is a sport of honor. Certain actions result in immediate disqualification:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                'Striking with closed fist',
                'Eye gouging',
                'Choking the throat',
                'Grabbing the hair',
                'Grabbing the groin area',
                'Kicking the chest or stomach',
                'Bending fingers backwards',
                'Grabbing the front of the mawashi'
              ].map((rule, index) => (
                <motion.div
                  key={rule}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-shu flex-shrink-0" />
                  <span className="text-sm text-usuzumi">{rule}</span>
                </motion.div>
              ))}
            </div>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Next Section */}
      <CinematicSection bg="gofun" fullHeight={false}>
        <div className="text-center">
          <FadeInText>
            <p className="text-2xl md:text-3xl font-japanese text-sumi mb-8">
              Now you know the rules.<br />
              Meet the legends who mastered them.
            </p>
            <Link
              href="/legends"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
            >
              <span>The Legends</span>
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
