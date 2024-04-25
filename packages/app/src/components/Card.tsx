import * as React from 'react'
import Image from 'next/image'
import Hero from '@/assets/icons/hreo.svg'
import { LinkComponent } from './LinkComponent'

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  ctaSubtext: string
  imageSrc: string
  code: string | undefined
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, ctaText, ctaSubtext, imageSrc, code }) => {
  return (
    <section className='flex justify-center  h-[892px] items-center px-16 py-20 w-full text-white bg-zinc-900 max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-col items-center mt-10 mb-4 max-w-full w-[791px]'>
        <img
          loading='lazy'
          src={imageSrc}
          alt='Hero image'
          className='w-[240px] max-w-full aspect-square'
          width={240}
          height={240}
        />
        <h1 className='self-stretch mt-16 text-7xl font-bold text-center bg-clip-text leading-[88px] text-ellipsis max-md:mt-10 max-md:max-w-full max-md:text-6xl max-md:leading-[66px]'>
          {title}
          <br className='hidden max-md:block' />
          <span className='bg-gradient-to-l max-md:pt-4 bg-clip-text  from-green-500 via-green-400 to-green-600 text-transparent'>
            Airdrop
          </span>
        </h1>
        <p className='self-stretch max-md:line-clamp-2 mt-5 text-2xl max-md:text-sm font-medium leading-9 text-center text-ellipsis text-stone-300 max-md:max-w-full'>
          {description}
        </p>
        {code ? (
          <button className='justify-center px-16 py-5 mt-16 text-2xl font-semibold leading-8 bg-emerald-500 rounded-3xl max-md:px-5 max-md:mt-10 max-md:w-full'>
            {ctaText}
          </button>
        ) : (
          <div className='flex gap-5 mt-16 max-w-full text-2xl font-semibold leading-8 whitespace-nowrap w-[480px] max-md:flex-wrap max-md:mt-10'>
            <input
              type='text'
              placeholder='Code'
              className=' bg-white color-white placeholder-center text-[24px] placeholder-neutral-400 text-center text-neutral w-[300px] h-[70px] justify-center input input-bordered  max-md:w-full'
            />
            <LinkComponent href='/airdrop' className='max-md:w-full'>
              <button className='justify-center px-12 py-5 rounded-3xl max-md:px-5 text-white bg-emerald-500 max-md:w-full'>
                Enter
              </button>
            </LinkComponent>
          </div>
        )}

        {code ? (
          <div className='mt-5 text-base tracking-tight text-center text-ellipsis text-stone-300'>{ctaSubtext}</div>
        ) : (
          <div className='mt-5 text-base tracking-tight text-center text-ellipsis text-stone-300'>
            Don’t have a code?
            <span className='ml-[10px] text-emerald-500 text-ellipsis'>Find in community &gt;</span>
          </div>
        )}
      </div>
    </section>
  )
}

export function Card({ code }: any) {
  return (
    <main>
      <HeroSection
        title='Stage One '
        description='Lorem ipsum dolor sit amet consectetur. Malesuada dictumst nunc egestas elementum. Eget augue urna laoreet facilisis.'
        ctaText='Connect Wallet'
        ctaSubtext='Connect to join the airdrop'
        imageSrc={Hero.src}
        code={code}
      />
    </main>
  )
}
