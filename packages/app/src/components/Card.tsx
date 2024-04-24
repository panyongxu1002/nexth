import * as React from 'react'
import Image from 'next/image'
import Hero from '@/assets/icons/hreo.png'

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  ctaSubtext: string
  imageSrc: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, ctaText, ctaSubtext, imageSrc }) => {
  return (
    <section className='flex justify-center h-[892px] items-center px-16 py-20 w-full text-white bg-zinc-900 max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-col items-center mt-10 mb-4 max-w-full w-[791px]'>
        <Image loading='lazy' src={imageSrc} alt='Hero image' className='w-[240px] max-w-full aspect-square' />
        <h1 className='self-stretch mt-16 text-7xl font-bold text-center bg-clip-text leading-[88px] text-ellipsis max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
          {title}
          <span className='bg-gradient-to-l bg-clip-text  from-green-500 via-green-400 to-green-600 text-transparent'>
            Airdrop
          </span>
        </h1>
        <p className='self-stretch mt-5 text-3xl font-medium leading-9 text-center text-ellipsis text-stone-300 max-md:max-w-full'>
          {description}
        </p>
        <button className='justify-center px-16 py-5 mt-16 text-2xl font-semibold leading-8 bg-emerald-500 rounded-3xl max-md:px-5 max-md:mt-10'>
          {ctaText}
        </button>
        <p className='mt-5 text-base tracking-tight text-center text-ellipsis text-stone-300'>{ctaSubtext}</p>
      </div>
    </section>
  )
}

export function Card() {
  return (
    <main>
      <HeroSection
        title='Stage One '
        description='Lorem ipsum dolor sit amet consectetur. Malesuada dictumst nunc egestas elementum. Eget augue urna laoreet facilisis.'
        ctaText='Connect Wallet'
        ctaSubtext='Connect to join the airdrop'
        imageSrc={Hero.src}
      />
    </main>
  )
}
