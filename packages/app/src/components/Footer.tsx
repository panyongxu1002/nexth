/* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { SITE_EMOJI, SITE_INFO, SOCIAL_GITHUB, SOCIAL_TWITTER } from '@/utils/site'
// import { FaGithub, FaXTwitter } from 'react-icons/fa6'
// import { NetworkStatus } from './NetworkStatus'
// import { LinkComponent } from './LinkComponent'

// export function Footer() {
//   return (
//     <>
//       <div className='place-self-end'>
//         <NetworkStatus />
//       </div>

//       <footer className='sticky top-[100vh] footer flex justify-between items-center bg-neutral text-neutral-content p-4'>
//         <p>
//           {SITE_EMOJI} {SITE_INFO}
//         </p>
//         <div className='flex gap-4'>
//           <LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`}>
//             <FaGithub />
//           </LinkComponent>
//           <LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`}>
//             <FaXTwitter />
//           </LinkComponent>
//         </div>
//       </footer>
//     </>
//   )
// }
import * as React from 'react'
import { LinkComponent } from './LinkComponent'

interface SocialIconProps {
  src: string
  alt: string
  link: string
  index: number
}
interface SocialProps {
  name: string
  link: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link, index }) => (
  <LinkComponent key={index} href={link} isExternal>
    <img loading='lazy' src={src} alt={alt} className='shrink-0 w-8 aspect-square' />
  </LinkComponent>
)

interface LinkColumnProps {
  title: string
  links: SocialProps[]
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div className='flex flex-col justify-center'>
    <div className='text-lg font-semibold text-white'>{title}</div>
    {links.map((item, index) => (
      <LinkComponent key={title + index} href={item.link} isExternal>
        <div className='mt-3'>{item.name}</div>
      </LinkComponent>
    ))}
  </div>
)

export function Footer() {
  const socialIcons = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1695b25012983af265213992a4495efe7a561bcdf82e38b012f51f4d33f0881e?apiKey=53186c56703b47418c12cd21c1b9decd&',
      alt: 'Social icon 1',
      link: 'https://twitter.com/haya_finance',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d45547c3850414a5699b804be6e41049b215594962cbfec8491dca3b99852575?apiKey=53186c56703b47418c12cd21c1b9decd&',
      alt: 'Social icon 2',
      link: '',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feaad771d2651fe0ded6be33e32d9955ed1a0454287036a14ce89909ff3b3297?apiKey=53186c56703b47418c12cd21c1b9decd&',
      alt: 'Social icon 3',
      link: 'https://t.me/Haya_Finance',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1786b49b454b9e4da666c8b479505f73ee1b91f3dab50b77a7300d30bf93edfb?apiKey=53186c56703b47418c12cd21c1b9decd&',
      alt: 'Social icon 4',
      link: '',
    },
  ]

  const appLinks = [
    {
      name: 'Swap',
      link: 'https://haya.finance/swap',
    },
    {
      name: 'Mint',
      link: 'https://haya.finance/mint',
    },
    {
      name: 'Auction',
      link: '',
    },
  ]
  const resourceLinks = [
    { name: 'White Paper', link: 'https://docs.haya.finance' },
    { name: 'Medium', link: 'https://medium.com/@HayaFinance' },
    {
      name: 'Brand Kit',
      link: 'https://drive.google.com/drive/folders/1oUCqCh6-DguiyMub08qpCFIIvjvtxWxa?usp=drive_link',
    },
  ]

  return (
    <>
      <footer className='flex pl-[270px]  pr-[270px] justify-center items-center px-2.5 py-20 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 justify-center my-5 w-full max-w-[1340px] max-md:flex-wrap max-md:text-left max-md:max-w-full'>
          <div className='flex flex-col flex-1 items-start pr-20 max-md:pr-0 max-md:max-w-full'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/b13059c74ad3746be1cc6bb5e756135922d30001c3c1e99620354416a85816f1?apiKey=53186c56703b47418c12cd21c1b9decd&'
              alt='Logo'
              className='max-w-full aspect-[2.94] w-[120px]'
            />
            <p className='mt-2.5 text-lg leading-6 text-stone-300 w-[700px] max-md:max-w-full'>
              Haya aspires to become a leading provider of innovative decentralized financial solutions, driving the
              development of ZKML DeFi and setting new industry standards.
            </p>
            <div className='flex gap-2.5 mt-5'>
              {socialIcons.map((icon, index) => (
                <SocialIcon index={index} src={icon.src} alt={icon.alt} link={icon.link} />
              ))}
            </div>
          </div>
          <div className='flex gap-5 flex-1 items-start pb-8 text-sm leading-5 text-stone-300'>
            <LinkColumn title='App' links={appLinks} />
            <LinkColumn title='Resource' links={resourceLinks} />
          </div>
        </div>
      </footer>
      <div className='flex h-[100px] justify-center items-center px-16 py-3 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full'>
        <p>©2024 Haya. All rights reserved</p>
      </div>
    </>
  )
}
