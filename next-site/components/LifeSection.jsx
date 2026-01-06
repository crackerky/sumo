'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

const timeline = [
  { time: '午前5時', title: '朝稽古', description: '夜明け前から始まる厳しい稽古' },
  { time: '午前11時', title: 'ちゃんこ鍋', description: '一日最初の食事、栄養豊富な鍋料理' },
  { time: '午後', title: '休息', description: '体を休め、栄養を吸収する大切な時間' },
  { time: '夕方', title: '夕稽古', description: '二度目の稽古と食事' },
]

export default function LifeSection() {
  return (
    <Section id="life" bg="kinari">
      <Container narrow>
        <SectionHeader
          tag="Behind the Scenes"
          title="力士の一日"
          titleJp="The Life of a Rikishi"
          subtitle="規律と伝統が織りなす、力士の日常"
        />

        {/* タイムライン */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* 時刻 */}
              <div className="w-20 flex-shrink-0 text-right">
                <span className="text-sm text-shu">{item.time}</span>
              </div>

              {/* 縦線 */}
              <div className="relative">
                <div className="w-px h-full bg-sumi/10" />
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-shu" />
              </div>

              {/* 内容 */}
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-japanese text-sumi mb-1">{item.title}</h3>
                <p className="text-sm text-usuzumi">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 部屋制度 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-sumi/10 text-center"
        >
          <h3 className="text-2xl font-japanese text-sumi mb-4">
            部屋制度
          </h3>
          <p className="text-sm text-usuzumi leading-loose max-w-lg mx-auto">
            力士は「部屋」と呼ばれる共同生活の場で、
            親方の指導のもと厳しい上下関係の中で修行を積む。
            この制度が、古来の伝統と精神を今に伝えている。
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
