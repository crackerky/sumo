'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

const winConditions = [
  {
    number: '一',
    title: '押し出し',
    titleEn: 'Force Out',
    description: '相手を土俵の外に押し出す',
  },
  {
    number: '二',
    title: '寄り切り',
    titleEn: 'Touch Down',
    description: '相手の足裏以外を地面につけさせる',
  },
]

const rules = [
  { allowed: false, text: '髪を引くこと' },
  { allowed: false, text: '拳で殴ること' },
  { allowed: false, text: '目を突くこと' },
  { allowed: false, text: '首を絞めること' },
  { allowed: true, text: '張り手・突っ張り' },
  { allowed: true, text: '廻しを掴むこと' },
]

export default function RulesSection() {
  return (
    <Section id="rules" bg="kinari">
      <Container>
        <SectionHeader
          tag="Fundamentals"
          title="勝負の基本"
          titleJp="The Basics"
          subtitle="単純明快なルールの中に、技の奥深さがある"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* 勝利条件 */}
          <div>
            <h3 className="text-xl font-japanese text-sumi mb-8 text-center lg:text-left">
              勝ち方
            </h3>
            <div className="space-y-6">
              {winConditions.map((condition, index) => (
                <motion.div
                  key={condition.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <span className="text-3xl font-japanese text-shu">
                    {condition.number}
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-sumi">
                      {condition.title}
                      <span className="text-sm text-usuzumi ml-2">
                        {condition.titleEn}
                      </span>
                    </h4>
                    <p className="text-usuzumi text-sm mt-1">
                      {condition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 禁じ手と許可 */}
          <div>
            <h3 className="text-xl font-japanese text-sumi mb-8 text-center lg:text-left">
              禁じ手と許可
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {rules.map((rule, index) => (
                <motion.div
                  key={rule.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-4 py-2 border-b border-sumi/5"
                >
                  <span className={`text-sm ${rule.allowed ? 'text-matcha' : 'text-shu'}`}>
                    {rule.allowed ? '○' : '×'}
                  </span>
                  <span className="text-sumi/80 text-sm">{rule.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 土俵 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-japanese text-sumi mb-8">
            土俵
            <span className="text-sm text-usuzumi ml-2">The Dohyo</span>
          </h3>

          {/* 土俵のシンプルな図 */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-shu/40" />
            <div className="absolute inset-4 rounded-full border border-sumi/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-usuzumi">直径 4.55m</span>
            </div>
          </div>

          <p className="text-usuzumi text-sm max-w-md mx-auto leading-loose">
            土俵は毎場所、粘土と砂で新たに作られる。
            その上には神道の屋根が吊るされ、
            神聖な競技場であることを示している。
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
