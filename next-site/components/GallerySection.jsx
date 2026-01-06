'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader, Container } from './Section'

export default function GallerySection() {
  return (
    <Section id="gallery" bg="gofun">
      <Container>
        <SectionHeader
          tag="Visual Journey"
          title="写真"
          titleJp="Photo Gallery"
        />

        {/* シンプルなギャラリーグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {['取組', '儀式', '稽古', '横綱', '土俵', '伝統'].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="aspect-square bg-shironeri flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-japanese text-sumi/30">
                {title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-japanese text-sumi mb-4">
            相撲を体験する
          </h3>
          <p className="text-usuzumi text-sm leading-loose max-w-md mx-auto mb-8">
            千年の伝統を、その目で。
            次の本場所で、力士たちの迫力を体感してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              チケット情報
            </a>
            <a href="#" className="btn-outline">
              映像を見る
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
