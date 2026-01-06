'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, ImagePlaceholder } from '../components/CinematicSection'

const legends = [
  {
    name: '千代の富士',
    romaji: 'Chiyonofuji',
    era: '1981-1991',
    titles: 31,
    nickname: 'The Wolf',
    description: 'At just 120kg, Chiyonofuji was small for a yokozuna, but his technical brilliance and fierce determination made him unstoppable. His signature throw, the uwatenage, was poetry in motion. He won 31 tournament championships and is considered one of the greatest athletes in Japanese history.'
  },
  {
    name: '白鵬',
    romaji: 'Hakuho',
    era: '2007-2021',
    titles: 45,
    nickname: 'The GOAT',
    description: 'The most successful yokozuna in history. Born in Mongolia, Hakuho dominated sumo for over a decade, breaking virtually every record in the sport. His 45 tournament victories and 1,187 career wins may never be surpassed. A master of both power and technique.'
  },
  {
    name: '大鵬',
    romaji: 'Taiho',
    era: '1961-1971',
    titles: 32,
    nickname: 'The Giant',
    description: 'Before Hakuho, Taiho was the benchmark of greatness. Competing during sumo\'s golden age, he won 32 championships and became a national hero. His rivalry with Kashiwado defined an era. His name became synonymous with excellence in Japan.'
  },
  {
    name: '照ノ富士',
    romaji: 'Terunofuji',
    era: '2021-Present',
    titles: 10,
    nickname: 'The Comeback King',
    description: 'The most remarkable comeback story in sumo history. After reaching ozeki, injuries forced him to the bottom division. Through sheer will, he climbed back to become the 73rd yokozuna—the only wrestler ever to do so. His story embodies the spirit of never giving up.'
  }
]

export default function LegendsPage() {
  return (
    <Layout>
      <PageHero
        japanese="横綱"
        english="The Legends"
        subtitle="The grand champions who defined an era"
      />

      {/* What is Yokozuna */}
      <CinematicSection bg="gofun">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Supreme Rank</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-japanese text-sumi mb-8">
              横綱
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-12">YOKOZUNA — GRAND CHAMPION</p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              The yokozuna is more than the highest rank in sumo—it is a sacred title.
              Only 73 men in history have achieved this honor.
            </p>
            <p className="text-usuzumi leading-loose">
              A yokozuna must display not only supreme skill, but also dignity,
              grace, and moral character. Unlike other ranks, a yokozuna can never
              be demoted. When performance declines, the only honorable path is retirement.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Individual Legends */}
      {legends.map((legend, index) => (
        <CinematicSection key={legend.romaji} bg={index % 2 === 0 ? 'kinari' : 'gofun'}>
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            <FadeInText className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <ImagePlaceholder label={`${legend.romaji} Portrait`} aspect="portrait" />
            </FadeInText>
            <FadeInText delay={0.2} className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
              <span className="text-sm tracking-[0.3em] uppercase text-shu mb-4 block">{legend.era}</span>
              <h2 className="text-5xl md:text-6xl font-japanese text-sumi mb-2">
                {legend.name}
              </h2>
              <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">{legend.romaji}</p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="text-4xl font-japanese text-shu">{legend.titles}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-usuzumi">Championships</p>
                </div>
                <div className="w-px h-12 bg-sumi/10" />
                <div>
                  <p className="text-lg font-japanese text-sumi">{legend.nickname}</p>
                </div>
              </div>

              <p className="text-usuzumi leading-loose">
                {legend.description}
              </p>
            </FadeInText>
          </div>
        </CinematicSection>
      ))}

      {/* Next Section */}
      <CinematicSection bg="kinari" fullHeight={false}>
        <div className="text-center">
          <FadeInText>
            <p className="text-2xl md:text-3xl font-japanese text-sumi mb-8">
              Behind every legend is a lifetime of sacrifice.<br />
              Discover the daily life of a sumo wrestler.
            </p>
            <Link
              href="/life"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
            >
              <span>The Life of a Rikishi</span>
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
