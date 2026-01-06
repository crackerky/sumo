'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

const tournaments = [
  { month: '一月', name: '初場所', location: '東京・両国国技館' },
  { month: '三月', name: '春場所', location: '大阪' },
  { month: '五月', name: '夏場所', location: '東京・両国国技館' },
  { month: '七月', name: '名古屋場所', location: '名古屋' },
  { month: '九月', name: '秋場所', location: '東京・両国国技館' },
  { month: '十一月', name: '九州場所', location: '福岡' },
]

export default function TournamentsSection() {
  return (
    <Section id="tournaments" bg="gofun">
      <Container>
        <SectionHeader
          tag="Experience"
          title="本場所"
          titleJp="Grand Tournaments"
          subtitle="年六回、全国で開催される大相撲の祭典"
        />

        {/* 場所一覧 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tournaments.map((tournament, index) => (
            <motion.article
              key={tournament.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center py-8 border-b border-sumi/5 last:border-0 sm:border-0"
            >
              <span className="text-sm text-shu tracking-wider">{tournament.month}</span>
              <h3 className="text-2xl font-japanese text-sumi mt-2 mb-2">{tournament.name}</h3>
              <p className="text-xs text-usuzumi">{tournament.location}</p>
            </motion.article>
          ))}
        </div>

        {/* 案内 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-usuzumi text-sm leading-loose max-w-lg mx-auto mb-8">
            各場所は十五日間にわたって開催され、
            毎日一番ずつ取組が行われます。
            チケットは場所の約一ヶ月前から発売されます。
          </p>

          <a href="#" className="btn-outline">
            観戦について詳しく
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
