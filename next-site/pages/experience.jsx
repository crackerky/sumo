'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, SumoImage } from '../components/CinematicSection'

const tournaments = [
  { month: 'January', name: 'Hatsu Basho', japanese: '初場所', location: 'Tokyo', venue: 'Ryogoku Kokugikan' },
  { month: 'March', name: 'Haru Basho', japanese: '春場所', location: 'Osaka', venue: 'EDION Arena Osaka' },
  { month: 'May', name: 'Natsu Basho', japanese: '夏場所', location: 'Tokyo', venue: 'Ryogoku Kokugikan' },
  { month: 'July', name: 'Nagoya Basho', japanese: '名古屋場所', location: 'Nagoya', venue: 'Dolphins Arena' },
  { month: 'September', name: 'Aki Basho', japanese: '秋場所', location: 'Tokyo', venue: 'Ryogoku Kokugikan' },
  { month: 'November', name: 'Kyushu Basho', japanese: '九州場所', location: 'Fukuoka', venue: 'Fukuoka Kokusai Center' },
]

export default function ExperiencePage() {
  return (
    <Layout>
      <PageHero
        japanese="体験"
        english="Experience"
        subtitle="Witness the spectacle of Grand Sumo live"
      />

      {/* The Tournaments */}
      <CinematicSection bg="gofun">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Six Times a Year</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi mb-8">
              本場所
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-12">HONBASHO — GRAND TOURNAMENTS</p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              Professional sumo holds six grand tournaments each year,
              each lasting 15 days. Three are held in Tokyo, with the others
              traveling to Osaka, Nagoya, and Fukuoka.
            </p>
            <p className="text-usuzumi leading-loose">
              Each tournament follows the same format: wrestlers compete once per day,
              building toward a climactic final day. The wrestler with the most wins
              takes the championship—and the glory.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Tournament Calendar */}
      <CinematicSection bg="kinari" fullHeight={false}>
        <FadeInText>
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Calendar</span>
            <h2 className="text-3xl md:text-4xl font-japanese text-sumi">
              The Six Basho
            </h2>
          </div>
        </FadeInText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tournaments.map((tournament, index) => (
            <FadeInText key={tournament.name} delay={index * 0.08}>
              <div className="text-center p-8 bg-gofun">
                <p className="text-sm tracking-[0.2em] text-shu mb-3">{tournament.month}</p>
                <h3 className="text-3xl font-japanese text-sumi mb-2">{tournament.japanese}</h3>
                <p className="text-sm tracking-[0.15em] uppercase text-usuzumi mb-4">{tournament.name}</p>
                <div className="w-8 h-px bg-sumi/20 mx-auto mb-4" />
                <p className="text-sm text-usuzumi">{tournament.location}</p>
                <p className="text-xs text-usuzumi/60">{tournament.venue}</p>
              </div>
            </FadeInText>
          ))}
        </div>
      </CinematicSection>

      {/* Ryogoku Kokugikan */}
      <CinematicSection bg="gofun">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">The Home of Sumo</span>
            <h2 className="text-4xl md:text-5xl font-japanese text-sumi mb-4">
              両国国技館
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">RYOGOKU KOKUGIKAN</p>
            <p className="text-usuzumi leading-loose mb-6">
              The spiritual home of sumo. This 11,000-seat arena in Tokyo&apos;s
              Ryogoku district hosts three of the six annual tournaments and
              is the heart of the sumo world.
            </p>
            <p className="text-usuzumi leading-loose mb-6">
              Built in 1985, the Kokugikan features traditional Japanese architecture
              and houses the Sumo Museum. The surrounding Ryogoku neighborhood
              is filled with sumo stables and chanko restaurants.
            </p>
            <p className="text-usuzumi leading-loose">
              Attending a tournament here is the ultimate sumo experience—
              the atmosphere is electric, and you&apos;re surrounded by centuries of history.
            </p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <SumoImage src="/kokugikan.jpg" alt="Ryogoku Kokugikan Arena" aspect="square" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* How to Watch */}
      <CinematicSection bg="kinari">
        <div className="max-w-4xl mx-auto">
          <FadeInText>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Guide</span>
              <h2 className="text-3xl md:text-4xl font-japanese text-sumi">
                How to Experience Sumo
              </h2>
            </div>
          </FadeInText>

          <div className="space-y-12">
            {[
              {
                title: 'Get Tickets Early',
                description: 'Tournament tickets sell out fast, especially for weekends and the final days. Tickets go on sale about a month before each tournament. For the best seats, buy on the first day of sales.'
              },
              {
                title: 'Arrive in the Afternoon',
                description: 'While matches start in the morning with lower-ranked wrestlers, the top division (makuuchi) competes from around 4 PM. Arrive by 3 PM to catch the pre-match rituals and build up to the main events.'
              },
              {
                title: 'Experience the Atmosphere',
                description: 'Sumo is as much about the experience as the matches. Enjoy chanko at the arena, browse the gift shops, and soak in the centuries-old traditions unfolding before you.'
              },
              {
                title: 'Visit a Stable',
                description: 'Some sumo stables allow visitors to watch morning practice. This is a unique opportunity to see wrestlers train up close. Contact stables in advance as policies vary.'
              },
            ].map((item, index) => (
              <FadeInText key={item.title} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-sumi/10 last:border-0">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-4xl font-japanese text-shu">〇{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-japanese text-sumi mb-4">{item.title}</h3>
                    <p className="text-usuzumi leading-loose">{item.description}</p>
                  </div>
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* Final CTA */}
      <CinematicSection bg="sumi">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-japanese text-kinari mb-8">
              相撲
            </h2>
            <p className="text-xl md:text-2xl text-kinari/70 mb-6">
              1,500 years of tradition await.
            </p>
            <p className="text-kinari/50 leading-loose max-w-xl mx-auto mb-12">
              Whether you experience it in person at the Kokugikan or through
              the screen, sumo offers a window into the soul of Japan—
              a living tradition that continues to captivate the world.
            </p>
          </FadeInText>
          <FadeInText delay={0.3}>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-12 py-4 border border-kinari/30 text-kinari text-sm tracking-[0.2em] uppercase hover:bg-kinari hover:text-sumi transition-colors"
            >
              Return Home
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
