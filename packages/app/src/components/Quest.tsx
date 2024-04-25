import * as React from 'react'

interface QuestItemProps {
  id?: number
  title: string
  description: string
  completed?: boolean
  right?: boolean
}

const QuestItem: React.FC<QuestItemProps> = (item: QuestItemProps) => {
  return (
    <div className={`flex gap-2.5 px-2.5 py-5 mt-2.5  bg-white rounded-3xl ${item.right ? 'bg-zinc-900 ' : ''}`}>
      <div className='flex flex-col flex-1 justify-center my-auto tracking-tight'>
        <div className='text-lg leading-6 text-black font-[510]'>{item.title}</div>
        <div className='mt-1.5 text-base leading-6  text-neutral-500  max-md:line-clamp-1'>{item.description}</div>
      </div>
      <div className='justify-center px-4 py-5 text-lg font-semibold leading-6 text-white whitespace-nowrap bg-emerald-500 rounded-3xl'>
        {!item.right ? (
          'Claim'
        ) : (
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/37a750f2f4c6acf4eb6d0db9aa0e9414b20b08d54d12913237a0b77c2365c0ca?apiKey=53186c56703b47418c12cd21c1b9decd&'
            className='shrink-0 my-auto aspect-square w-[22px]'
          />
        )}
      </div>
    </div>
  )
}

const QuestMdItem: React.FC<QuestItemProps> = (item: QuestItemProps) => {
  return (
    <div className='p-8 mt-2.5 w-full bg-white rounded-3xl max-w-[1340px] max-md:px-2.5 max-md:max-w-full'>
      <div className='flex  gap-5 max-md:flex max-md:gap-0'>
        <div className='flex flex-col w-[81%] max-md:ml-0 max-md:w-full'>
          <div className='flex flex-col grow justify-center tracking-tight max-md:mt-10 max-md:max-w-full'>
            <div className='text-2xl leading-8 text-black font-[510] max-md:max-w-full max-md:text-lg'>
              {item.title}
            </div>
            <div className='mt-1.5 text-base text-ellipsis text-neutral-500 max-md:max-w-full  max-md:line-clamp-1 '>
              {item.description}
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full'>
          <div className='grow justify-center text-center items-center px-16 py-3.5 w-full text-2xl font-semibold leading-8 text-white whitespace-nowrap bg-emerald-500 rounded-3xl max-md:px-4 max-md:py-5  max-md:text-lg max-md:mt-0'>
            Claim
          </div>
        </div>
      </div>
    </div>
  )
}

const questData: QuestItemProps[] = [
  {
    id: 1,
    title: 'Quest 1',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque consequat amet dictum vestibulum ipsum.',
  },
  {
    id: 2,
    title: 'Quest 2',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque consequat amet dictum vestibulum ipsum.',
  },
]

export function Quest() {
  return (
    <div className='flex flex-col items-center px-20 py-16 w-full bg-neutral-100 max-md:px-2.5 max-md:pb-2.5 max-md:max-w-full'>
      <div className='text-5xl font-semibold text-black max-md:text-4xl pb-2.5'>Quest</div>
      <div className='block w-full max-md:hidden'>
        {questData.map((quest, index) => (
          <QuestMdItem {...quest} key={index} />
        ))}
      </div>

      <div className='hidden max-md:block'>
        {questData.map((quest, index) => (
          <QuestItem {...quest} key={index} />
        ))}
      </div>
      <div className='p-8 mt-2.5 w-full bg-gradient-to-l from-emerald-500 via-emerald-400 to-emerald-600 rounded-3xl max-w-[1340px] max-md:px-3 max-md:py-5 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[81%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow justify-center tracking-tight text-white max-md:max-w-full'>
              <div className='text-2xl leading-8 font-[510] max-md:max-w-full'>Refer and Earn Points</div>
              <div className='mt-1.5 text-base text-ellipsis max-md:max-w-full'>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque consequat amet dictum vestibulum ipsum.
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-[160px]'>
            <div className='flex grow gap-2.5 justify-center px-16 py-3.5 w-full text-2xl font-semibold leading-8 text-black whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:mt-5'>
              <div>fDrgYk</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ca15a7e65c5a6ed92e8497ffd0e4cff8c8d6abab596c40402f02af521889c?apiKey=53186c56703b47418c12cd21c1b9decd&'
                className='shrink-0 my-auto aspect-square w-[22px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='p-8 mt-2.5 w-full rounded-3xl bg-zinc-900 block max-md:hidden max-w-[1340px] max-md:px-3 max-md:py-5 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[81%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow justify-center tracking-tight max-md:mt-10 max-md:max-w-full'>
              <div className='text-2xl leading-8 text-white font-[510] max-md:max-w-full'>More Campaign?</div>
              <div className='mt-1.5 text-base text-ellipsis text-stone-300 max-md:max-w-full'>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque consequat amet dictum vestibulum ipsum.
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-1.5 text-center justify-center px-11 py-3.5 text-2xl font-semibold leading-8 text-white rounded-3xl max-md:px-5 max-md:mt-10'>
              <div className='w-[240px]'>Go to Galxe</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/37a750f2f4c6acf4eb6d0db9aa0e9414b20b08d54d12913237a0b77c2365c0ca?apiKey=53186c56703b47418c12cd21c1b9decd&'
                className='shrink-0 my-auto aspect-square w-[22px]'
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`gap-2.5 px-2.5 py-5 mt-2.5 rounded-3xl bg-zinc-900 hidden max-md:flex`}>
        <div className='flex flex-col flex-1 justify-center my-auto tracking-tight'>
          <div className='text-lg leading-6 text-white font-[510]'>More Campaign?</div>
          <div className='mt-1.5 text-base leading-6  text-neutral-500  max-md:line-clamp-1'>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque consequat amet dictum vestibulum ipsum.
          </div>
        </div>
        <div className='justify-center px-7 py-5 text-lg font-semibold leading-6 text-white bg-black whitespace-nowrap rounded-3xl'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/37a750f2f4c6acf4eb6d0db9aa0e9414b20b08d54d12913237a0b77c2365c0ca?apiKey=53186c56703b47418c12cd21c1b9decd&'
            className='shrink-0 my-auto aspect-square w-[22px]'
          />
        </div>
      </div>
    </div>
  )
}
