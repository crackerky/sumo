'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

const legends = [
  {
    name: '白鵬 翔',
    nameEn: 'Hakuho Sho',
    rank: '第六十九代横綱',
    wins: 45,
    career: 1187,
  },
  {
    name: '千代の富士 貢',
    nameEn: 'Chiyonofuji',
    rank: '第五十八代横綱',
    wins: 31,
    career: 1045,
  },
  {
    name: '大鵬 幸喜',
    nameEn: 'Taiho Koki',
    rank: '第四十八代横綱',
    wins: 32,
    career: 872,
  },
]

export default function LegendsSection() {
  return (
    <Section id="legends" bg="gofun">
      <Container narrow>
        <SectionHeader
          tag="Champions"
          title="伝説の横綱"
          titleJp="Legendary Yokozuna"
          subtitle="相撲の歴史に名を刻んだ名力士たち"
        />

        <div className="space-y-12">
          {legends.map((legend, index) => (
            <motion.article
              key={legend.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* 四股名 */}
              <h3 className="text-3xl md:text-4xl font-japanese text-sumi mb-2">
                {legend.name}
              </h3>
              <p className="text-sm text-usuzumi mb-1">{legend.nameEn}</p>
              <p className="text-xs text-shu tracking-wider mb-6">{legend.rank}</p>

              {/* 記録 */}
              <div className="flex justify-center gap-12">
                <div>
                  <span className="block text-3xl font-japanese text-sumi">
                    {legend.wins}
                  </span>
                  <span className="text-xs text-usuzumi">優勝</span>
                </div>
                <div>
                  <span className="block text-3xl font-japanese text-sumi">
                    {legend.career.toLocaleString()}
                  </span>
                  <span className="text-xs text-usuzumi">勝利</span>
                </div>
              </div>

              {/* 区切り線 */}
              {index < legends.length - 1 && (
                <div className="mt-12 mx-auto w-16 h-px bg-sumi/10" />
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
