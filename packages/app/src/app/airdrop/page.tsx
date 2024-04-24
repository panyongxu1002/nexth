'use client'
import { Card } from '@/components/Card'
import { RankingList } from '@/components/RankingList'
import { Airdrop } from '@/components/Airdrop'
import { Quest } from '@/components/Quest'
import { FAQ } from '@/components/FAQ'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Home() {
  let searchParams = useSearchParams()
  return (
    <>
      <Airdrop></Airdrop>
      <Quest />
      <RankingList />
      <FAQ />
    </>
  )
}

export default Home
