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
      {/* <div className='bg-white'>
        <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      </div> */}

      {/* <p>{SITE_DESCRIPTION}</p>

      <div className='mt-4'>
        <h3 className='text-lg mb-2'>Examples</h3>
        <p className='mb-4'>
          The following examples are used for demo purposes and help you bootstrap development. You can find the example
          the main repo at <code>src/app/examples</code>. Feel free to delete this section and the examples folder for
          your own App.
        </p>

        <CardList items={EXAMPLE_ITEMS} />
      </div> */}
    </>
  )
}

export default Home
