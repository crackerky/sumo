'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

export default function CultureSection() {
  return (
    <Section id="culture" bg="kinari">
      <Container narrow>
        <SectionHeader
          tag="Cultural Context"
          title="土俵の外に"
          titleJp="Beyond the Ring"
          subtitle="相撲は競技を超えた、生きた伝統である"
        />

        {/* 心技体 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            {/* 装飾の円 */}
            <div className="absolute inset-0 -m-8">
              <div className="w-full h-full rounded-full border border-sumi/5" />
            </div>

            <p className="text-6xl md:text-7xl font-japanese text-sumi mb-4 relative">
              心技体
            </p>
          </div>
          <p className="text-sm text-usuzumi tracking-wider mb-2">Shin-Gi-Tai</p>
          <p className="text-usuzumi text-sm max-w-sm mx-auto leading-loose">
            心・技・体の三位一体。
            この調和なくして、真の強さは生まれない。
          </p>
        </motion.div>

        {/* 文化的側面 */}
        <div className="space-y-12">
          {[
            {
              title: '神話と起源',
              description: '日本神話において、国土の支配権は神々の相撲によって決まったとされる。相撲は神への奉納として始まった。',
            },
            {
              title: '神道との結びつき',
              description: '土俵は神聖な場所。塩による浄め、神社を模した屋根、すべてが神道の精神を体現している。',
            },
            {
              title: '断髪式',
              description: '引退する力士の髷を、家族や関係者が少しずつ切る儀式。力士人生の終わりを告げる、感動的な瞬間。',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-japanese text-sumi mb-3">{item.title}</h3>
              <p className="text-usuzumi text-sm leading-loose max-w-md mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
