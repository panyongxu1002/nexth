'use client'
import { Card } from '@/components/Card'
import { RankingList } from '@/components/RankingList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Home() {
  let searchParams = useSearchParams()
  return (
    <>
      <Card code={searchParams.get('code')} />
      <RankingList />
    </>
  )
}

export default Home
