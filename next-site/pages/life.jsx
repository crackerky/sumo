'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import CinematicSection, { FadeInText, ImagePlaceholder } from '../components/CinematicSection'

const schedule = [
  {
    time: '5:00 AM',
    title: 'Morning Practice',
    japanese: '朝稽古',
    description: 'Training begins before dawn. Lower-ranked wrestlers start first, with seniors joining later. The practice is intense, with repeated bouts and exercises lasting several hours.'
  },
  {
    time: '11:00 AM',
    title: 'Chanko Nabe',
    japanese: 'ちゃんこ鍋',
    description: 'The first and largest meal of the day. This protein-rich stew, prepared by junior wrestlers, contains meat, fish, and vegetables. Wrestlers eat enormous quantities to maintain their size.'
  },
  {
    time: 'Afternoon',
    title: 'Rest',
    japanese: '休息',
    description: 'Wrestlers sleep after eating to aid digestion and weight gain. This rest period is essential for recovery and growth. Some use this time for personal duties or errands.'
  },
  {
    time: 'Evening',
    title: 'Light Practice & Dinner',
    japanese: '夕稽古',
    description: 'A lighter evening practice may be held, followed by dinner. Evenings are relatively free, though some activities require permission from the stable master.'
  }
]

export default function LifePage() {
  return (
    <Layout>
      <PageHero
        japanese="力士の生活"
        english="The Life"
        subtitle="A day in the world of a sumo wrestler"
      />

      {/* Daily Life Intro */}
      <CinematicSection bg="gofun">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Dedication</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-japanese text-sumi mb-12 leading-tight">
              Total<br />Commitment
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg md:text-xl text-usuzumi leading-loose mb-8">
              Sumo wrestlers don&apos;t just train for their sport—they live it entirely.
              From the moment they enter a stable as teenagers, every aspect of their
              lives is devoted to becoming a champion.
            </p>
            <p className="text-usuzumi leading-loose">
              They surrender their freedom, follow strict hierarchies, and embrace
              a centuries-old way of life. It is a path that demands everything,
              and offers glory in return.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Daily Schedule */}
      <CinematicSection bg="kinari" fullHeight={false}>
        <div className="max-w-4xl mx-auto">
          <FadeInText>
            <div className="text-center mb-20">
              <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Daily Routine</span>
              <h2 className="text-3xl md:text-4xl font-japanese text-sumi">
                A Wrestler&apos;s Day
              </h2>
            </div>
          </FadeInText>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-sumi/10 -translate-x-1/2" />

            {schedule.map((item, index) => (
              <FadeInText key={item.title} delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-shu -translate-x-1/2 mt-2" />

                  {/* Time */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-8 md:pl-0`}>
                    <p className="text-sm tracking-[0.2em] text-shu mb-2">{item.time}</p>
                    <h3 className="text-2xl font-japanese text-sumi mb-1">{item.japanese}</h3>
                    <p className="text-sm tracking-[0.15em] uppercase text-usuzumi mb-4">{item.title}</p>
                    <p className="text-usuzumi leading-loose">{item.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* The Heya System */}
      <CinematicSection bg="gofun">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText>
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Community</span>
            <h2 className="text-5xl md:text-6xl font-japanese text-sumi mb-4">
              部屋
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">HEYA — THE STABLE</p>
            <p className="text-usuzumi leading-loose mb-6">
              Every sumo wrestler belongs to a heya—a stable where they live,
              train, and compete as a family. There are currently about 45 stables
              in professional sumo.
            </p>
            <p className="text-usuzumi leading-loose mb-6">
              Each stable is led by a former senior wrestler called an oyakata (親方),
              who acts as teacher, father figure, and manager. Young wrestlers
              serve their seniors, learning humility alongside technique.
            </p>
            <p className="text-usuzumi leading-loose">
              This system has preserved sumo&apos;s traditions for centuries,
              passing knowledge from generation to generation in an unbroken chain.
            </p>
          </FadeInText>
          <FadeInText delay={0.2}>
            <ImagePlaceholder label="Sumo Stable" aspect="square" />
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Chanko */}
      <CinematicSection bg="kinari">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInText className="lg:order-2">
            <ImagePlaceholder label="Chanko Nabe" aspect="square" />
          </FadeInText>
          <FadeInText delay={0.2} className="lg:order-1">
            <span className="text-sm tracking-[0.3em] uppercase text-shu mb-6 block">Fuel</span>
            <h2 className="text-5xl md:text-6xl font-japanese text-sumi mb-4">
              ちゃんこ鍋
            </h2>
            <p className="text-sm tracking-[0.2em] text-usuzumi mb-8">CHANKO NABE — THE SUMO STEW</p>
            <p className="text-usuzumi leading-loose mb-6">
              The legendary food of sumo wrestlers. This protein-rich hot pot
              is the cornerstone of the sumo diet, providing the calories needed
              to maintain massive physiques.
            </p>
            <p className="text-usuzumi leading-loose mb-6">
              Each stable has its own secret recipe, passed down through generations.
              Common ingredients include chicken (wrestlers avoid four-legged
              animals before matches—falling on all fours means defeat), fish,
              tofu, and seasonal vegetables.
            </p>
            <p className="text-usuzumi leading-loose">
              Many retired wrestlers open chanko restaurants, sharing this
              delicious tradition with the public.
            </p>
          </FadeInText>
        </div>
      </CinematicSection>

      {/* Next Section */}
      <CinematicSection bg="gofun" fullHeight={false}>
        <div className="text-center">
          <FadeInText>
            <p className="text-2xl md:text-3xl font-japanese text-sumi mb-8">
              Ready to witness sumo in person?<br />
              Discover the tournaments.
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-sumi hover:text-shu transition-colors group"
            >
              <span>Experience Sumo</span>
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </FadeInText>
        </div>
      </CinematicSection>
    </Layout>
  )
}
