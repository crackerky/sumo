'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, SumoImage } from '../components/CinematicSection'

export default function RitualPage() {
  return (
    <Layout>
      <PageHero
        japanese="儀式"
        english="The Sacred Ritual"
        subtitle="Ancient ceremonies that transform a sport into a spiritual practice"
      />

      {/* The Dohyo */}
      <CinematicSection bg="gofun">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">The Ring</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-japanese text-sumi mb-8">
              土俵
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-12">DOHYO — THE SACRED GROUND</p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              The dohyo is far more than a wrestling ring. It is sacred ground,
              blessed by Shinto priests and closed to all but the wrestlers.
            </p>
            <p className="text-usuzumi leading-loose mb-12">
              Measuring 4.55 meters in diameter, the clay ring is rebuilt before
              each tournament. Rice bales mark its boundary, and buried beneath
              its center lie offerings to the gods: salt, kelp, chestnuts, and rice.
            </p>
          </FadeInText>
          <FadeInText delay={0.3}>
            <SumoImage src="/kokugikan.jpg" alt="Ryogoku Kokugikan Arena" aspect="portrait" className="max-w-2xl mx-auto" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Salt Purification */}
      <CinematicSection bg="kinari">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText>
            <SumoImage src="/salt-throwing.jpg" alt="Salt Throwing Ritual" aspect="video" />
          </FadeInText>
          <FadeInText delay={0.2}>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Purification</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-8 leading-tight">
              塩撒き
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">SHIOMAKI — THE SALT RITUAL</p>
            <p className="text-usuzumi leading-loose mb-6">
              Before each match, wrestlers throw handfuls of salt into the ring.
              This Shinto ritual of purification drives away evil spirits and
              protects the wrestlers from injury.
            </p>
            <p className="text-usuzumi leading-loose">
              Nearly 45 kilograms of salt are used during a single tournament day.
              The higher the rank, the more elaborate the salt-throwing ritual becomes—
              a moment of theater that builds tension before the clash.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Shiko */}
      <CinematicSection bg="gofun">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText className="lg:order-2">
            <SumoImage src="/ring-ceremony.jpg" alt="Ring Entering Ceremony" aspect="video" />
          </FadeInText>
          <FadeInText delay={0.2} className="lg:order-1">
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">The Stomp</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-8 leading-tight">
              四股
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">SHIKO — DRIVING AWAY EVIL</p>
            <p className="text-usuzumi leading-loose mb-6">
              The iconic leg-raising stomp of sumo serves dual purposes:
              it warms up the muscles and drives evil spirits from the earth.
            </p>
            <p className="text-usuzumi leading-loose">
              Wrestlers perform shiko hundreds of times in daily training.
              The thundering impact of a 150-kilogram wrestler stomping the ground
              is one of sumo&apos;s most visceral and memorable sights.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Ring Entering Ceremony */}
      <CinematicSection bg="kinari">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Grand Entrance</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi mb-8">
              土俵入り
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-12">DOHYO-IRI — THE RING CEREMONY</p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              The most spectacular ritual in sumo. Top-division wrestlers enter
              the ring in an elaborate procession, wearing ceremonial aprons
              worth tens of thousands of dollars.
            </p>
            <p className="text-usuzumi leading-loose mb-12">
              The yokozuna—grand champion—performs his own solo ceremony,
              wearing the sacred rope around his waist that symbolizes
              his divine connection and supreme rank.
            </p>
          </FadeInText>
          <FadeInText delay={0.3}>
            <SumoImage src="/yokozuna-dohyo-iri.jpg" alt="Yokozuna Dohyo-iri Ceremony" aspect="portrait" position="top" className="max-w-2xl mx-auto" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Next Section */}
      <CinematicSection bg="gofun" fullHeight={false}>
        <div className="text-center">
          <FadeInText>
            <p className="text-2xl md:text-3xl font-japanese text-sumi mb-8">
              The rituals prepare the body and spirit.<br />
              Now, understand how victory is won.
            </p>
            <Link
              href="/rules"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
            >
              <span>Learn the Rules</span>
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
