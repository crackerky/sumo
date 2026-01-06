'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

export default function AboutSection() {
  return (
    <Section id="about" bg="kinari">
      <Container narrow>
        <SectionHeader
          tag="Introduction"
          title="相撲とは"
          titleJp="What is Sumo?"
          subtitle="千五百年以上の歴史を持つ、日本の神聖なる伝統"
        />

        {/* 本文 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center"
        >
          <p className="text-lg leading-loose text-sumi/80">
            相撲は単なるスポーツではありません。
            <br className="hidden md:block" />
            神道に深く根ざした神聖な儀式であり、
            <br className="hidden md:block" />
            日本の精神文化そのものです。
          </p>

          <p className="text-usuzumi leading-loose">
            土俵と呼ばれる円形の舞台で、二人の力士が向き合います。
            勝敗の条件は単純明快——相手を土俵の外に出すか、
            足の裏以外を地面につけさせること。
            しかしその単純さの中に、
            深遠な精神性と技の奥深さが宿っています。
          </p>
        </motion.div>

        {/* キーワード */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { kanji: '神', label: '神聖' },
            { kanji: '道', label: '精神' },
            { kanji: '力', label: '強さ' },
            { kanji: '礼', label: '敬意' },
          ].map((item, index) => (
            <motion.div
              key={item.kanji}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="text-center"
            >
              <span className="block text-4xl font-japanese text-sumi mb-2">
                {item.kanji}
              </span>
              <span className="text-xs text-usuzumi tracking-wider">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
