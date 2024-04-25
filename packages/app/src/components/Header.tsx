/* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { LinkComponent } from './LinkComponent'
// import { SITE_EMOJI } from '@/utils/site'
// import { Connect } from './Connect'

// export function Header() {
//   return (
//     <header className='navbar flex justify-between p-4 pt-0'>
//       <LinkComponent href='/'>
//         <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
//       </LinkComponent>

//       <Connect />
//     </header>
//   )
// }

import * as React from 'react'
import Image from 'next/image'
import { Connect } from './Connect'
import { LinkComponent } from './LinkComponent'

import Icon from '@/assets/icons/icon.png'

/**
 * MyComponent is the main component of the application.
 * It renders a navigation bar with links and a connect wallet button.
 */
export function Header() {
  /**
   * Handles the click event for the home button.
   */
  const handleHomeClick = () => {
    // TODO: Implement home button click logic
  }

  /**
   * Handles the click event for the swap button.
   */
  const handleSwapClick = () => {
    // TODO: Implement swap button click logic
  }

  /**
   * Handles the click event for the mint button.
   */
  const handleMintClick = () => {
    // TODO: Implement mint button click logic
  }

  /**
   * Handles the click event for the auction button.
   */
  const handleAuctionClick = () => {
    // TODO: Implement auction button click logic
  }

  /**
   * Handles the click event for the quest button.
   */
  const handleQuestClick = () => {
    // TODO: Implement quest button click logic
  }

  /**
   * Handles the click event for the connect wallet button.
   */
  const handleConnectWalletClick = () => {
    // TODO: Implement connect wallet button click logic
  }

  return (
    <div className='flex pl-[290px]  pr-[290px] h-[80px] justify-center items-center  w-full text-base font-semibold border-b border-solid backdrop-blur-[25px] bg-white bg-opacity-80 border-black border-opacity-10 max-md:px-5 max-md:max-w-full'>
      <div className='flex gap-5 w-full max-w-[1340px] max-md:flex-wrap max-md:max-w-full'>
        <div className='flex flex-1 gap-5 justify-start items-center py-2.5 whitespace-nowrap leading-[150%] text-zinc-700 max-md:flex-wrap'>
          <LinkComponent href='/'>
            <img src={Icon.src} alt='Logo' width={87} height={30} className='mr-[30px]' />
          </LinkComponent>
          <div className='shrink-0 w-[1px] h-[28px] mr-[30px] self-start mt-[5px] border border-solid aspect-[0.04] border-stone-300 stroke-[1px] stroke-stone-300 hidden md:block'></div>
          {/* <button className='self-stretch my-auto mr-[30px]'>Home</button>
          <button className='self-stretch my-auto mr-[30px]'>Swap</button>
          <button className='self-stretch my-auto mr-[30px]'>Mint</button>
          <button className='self-stretch my-auto mr-[30px]'>Auction</button> */}
          <button className='self-stretch my-auto text-emerald-500 max-md:max-w-full hidden md:block'>Quest</button>
        </div>
        <button className='justify-center px-5 py-2.5 text-white bg-emerald-500 rounded-2xl leading-[100%] text-ellipsis'>
          {/* <Connect /> */}
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
