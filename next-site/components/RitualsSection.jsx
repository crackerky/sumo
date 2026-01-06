'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

const rituals = [
  {
    kanji: '四股',
    title: 'Shiko',
    description: '邪気を払い、土俵を清める力強い足踏み。大地と力士を繋ぐ神聖な所作。',
  },
  {
    kanji: '塩撒',
    title: 'Salt Throwing',
    description: '土俵を清め、力士を怪我から守る。神道の浄化の儀式。',
  },
  {
    kanji: '塵手水',
    title: 'Chirichozu',
    description: '手を打ち、腕を広げる。武器を持たぬことを示す、武士道の礼法。',
  },
  {
    kanji: '土俵入',
    title: 'Ring Ceremony',
    description: '化粧廻しを纏い、土俵に上がる。最高位力士による荘厳な入場の儀。',
  },
]

export default function RitualsSection() {
  return (
    <Section id="rituals" bg="gofun">
      <Container>
        <SectionHeader
          tag="Traditions"
          title="神聖なる儀式"
          titleJp="Sacred Rituals"
          subtitle="すべての所作に、千年の精神が宿る"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {rituals.map((ritual, index) => (
            <motion.article
              key={ritual.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                {/* 漢字 */}
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-3xl font-japanese text-sumi">
                    {ritual.kanji}
                  </span>
                </div>

                {/* 内容 */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-medium text-sumi mb-2 tracking-wide">
                    {ritual.title}
                  </h3>
                  <p className="text-usuzumi text-sm leading-loose">
                    {ritual.description}
                  </p>
                </div>
              </div>

              {/* 区切り線 */}
              <div className="mt-6 ml-22 h-px bg-sumi/10" />
            </motion.article>
          ))}
        </div>

        {/* 引用 */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-japanese text-sumi/60 mb-3">
            「神に捧げる相撲」
          </p>
          <p className="text-sm text-usuzumi">
            — すべての取組は、神への奉納である
          </p>
        </motion.blockquote>
      </Container>
    </Section>
  )
}
