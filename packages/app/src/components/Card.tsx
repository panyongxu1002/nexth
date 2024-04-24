import * as React from 'react'
import Image from 'next/image'
import Hero from '@/assets/icons/hreo.png'

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
        <Image
          loading='lazy'
          src={imageSrc}
          alt='Hero image'
          className='w-[240px] max-w-full aspect-square'
          width={240}
          height={240}
        />
        <h1 className='self-stretch mt-16 text-7xl font-bold text-center bg-clip-text leading-[88px] text-ellipsis max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
          {title}
          <span className='bg-gradient-to-l bg-clip-text  from-green-500 via-green-400 to-green-600 text-transparent'>
            Airdrop
          </span>
        </h1>
        <p className='self-stretch mt-5 text-2xl  font-medium leading-9 text-center text-ellipsis text-stone-300 max-md:max-w-full'>
          {description}
        </p>
        {code ? (
          <button className='justify-center px-16 py-5 mt-16 text-2xl font-semibold leading-8 bg-emerald-500 rounded-3xl max-md:px-5 max-md:mt-10'>
            {ctaText}
          </button>
        ) : (
          <div className='flex gap-5 mt-16 max-w-full text-2xl font-semibold leading-8 whitespace-nowrap w-[480px] max-md:flex-wrap max-md:mt-10'>
            <input
              type='text'
              placeholder='Code'
              className=' bg-white placeholder-center text-center text-neutral-400 w-[300px] h-[70px] justify-center input input-bordered max-w-xs '
            />
            <button className='justify-center px-12 py-5 rounded-3xl max-md:px-5 text-white bg-emerald-500'>
              Enter
            </button>
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
        {/* <div className='mt-5 text-base tracking-tight text-center text-ellipsis text-stone-300'>
          {ctaSubtext}
          Don’t have a code?
          <span className='text-emerald-500 text-ellipsis'>Find in community &gt;</span>
        </div> */}
      </div>
    </section>
  )
}

export function Card({ code }: any) {
  console.log('🚀 ~ Card ~ code:', code)
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
