import * as React from 'react'
import Hero from '@/assets/icons/hreo.png'
import Image from 'next/image'

interface PointsCardProps {
  title: string
  points: number
  subtitle: string | undefined
}

const PointsCard: React.FC<PointsCardProps> = ({ title, points, subtitle }) => (
  <div className='flex flex-col grow p-5 px-2'>
    <div className='self-center text-base max-md:text-sm text-ellipsis text-neutral-100'>{title}</div>
    <div className='mt-2.5 text-3xl max-md:text-lg text-center font-bold text-white text-ellipsis'>{points}</div>
    {subtitle && <div className='mt-2.5 text-ellipsis text-stone-300'>{subtitle}</div>}
  </div>
)

export const Airdrop: React.FC = () => {
  const pointsData = [
    { title: 'Holder Points', points: 11301.67 },
    { title: 'Referrals Points', points: 703.3 },
    { title: 'Quest Points', points: 500 },
  ]

  return (
    <div className='flex justify-center items-center p-16 w-full bg-neutral-100 max-md:p-0 max-md:max-w-full'>
      <div className='flex flex-col w-full max-w-[1340px] max-md:max-w-full '>
        <div className='flex flex-col justify-center overflow-hidden relative  rounded-null md:rounded-3xl bg-zinc-900 max-md:max-w-full'>
          <div className='pt-12 pb-10 pr-20 pl-8 max-md:px-7 max-md:max-w-full overflow-hidden max-md:h-[480px] max-md:rounded-null'>
            <div className='flex  overflow-hidden max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[73%] max-md:ml-0 max-md:w-full '>
                <div className='flex z-10 flex-col justify-center  max-md:max-w-full'>
                  <h1 className='text-7xl font-bold text-white bg-clip-text leading-[88px] text-ellipsis max-md:max-w-full max-md:text-6xl max-md:leading-[66px]'>
                    <span className='text-white'>Stage</span> <span className='text-white'>One</span>{' '}
                    <br className='hidden max-md:block' />
                    <span className='bg-gradient-to-l bg-clip-text  from-green-500 via-green-400 to-green-600 text-transparent'>
                      Airdrop
                    </span>
                  </h1>
                  <p className='mt-5 text-3xl leading-9 text-ellipsis text-stone-300 max-md:max-w-full max-md:line-clamp-2 max-md:text-base'>
                    Lorem ipsum dolor sit amet consectetur. Malesuada dictumst nunc egestas elementum. Eget augue urna
                    laoreet facilisis.
                  </p>
                  <button className='justify-center self-start px-10 py-5 mt-8 text-2xl font-semibold leading-8 text-black bg-white rounded-2xl max-md:px-5 max-md:w-[180px] max-md:h-[60px] max-md:leading-[22px] max-md:text-xl'>
                    Learn More
                  </button>
                </div>

                <div
                  className='w-[350px] h-[210px] absolute bottom-[0px] right-[0px] md:h-[330px] md:w-[580px]'
                  style={{
                    backgroundImage: `url(${Hero.src})`,
                    backgroundSize: 'cover',
                  }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className='justify-center mt-16 max-md:mt-0 max-md:max-w-full  max-md:px-2.5   max-md:py-2.5 max-md:pb-7 max-md:bg-white'>
          <div className='flex h-[260px] max-md:flex-col max-md:gap-0 max-md:h-auto'>
            <div className='flex flex-col w-[41%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow justify-center items-start p-5 w-full text-base rounded-3xl bg-zinc-900 max-w-[540px] max-md:mt-2.5 max-md:px-5 max-md:py-16 max-md:max-w-full'>
                <div className='flex gap-2.5 justify-center pr-8 text-neutral-100 max-md:pr-5'>
                  <div className='text-ellipsis'>My vHAYA</div>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/5e787b99e4d91a4738e1669cdcb24b7cc2c10983950ba6801c236100ab5b32d7?apiKey=53186c56703b47418c12cd21c1b9decd&'
                    alt=''
                    className='shrink-0 aspect-square w-[22px]'
                  />
                </div>
                <div className='mt-3 text-5xl font-bold text-white leading-[56.16px] text-ellipsis max-md:text-4xl'>
                  12,504.94
                </div>
                <div className='flex gap-2.5 justify-center mt-3 max-md:max-w-full  max-md:text-center'>
                  <div className='text-ellipsis text-stone-300'>0x56Ag...15Yb</div>
                  <div className='text-emerald-500 text-ellipsis'>View Details &gt;</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col  ml-2 w-[59%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col h-[260px] first-letter:grow max-md:mt-1.5 max-md:max-w-full'>
                <div className='justify-center max-md:max-w-full'>
                  <div className='flex gap-2.5 justify-center '>
                    <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                      <div className='flex grow justify-center items-center p-5 w-full text-base rounded-3xl bg-zinc-900 max-md:mt-1.5'>
                        <div className='flex flex-col'>
                          <div className='self-center text-ellipsis text-neutral-100'>My H30</div>
                          <div className='mt-2.5 text-3xl font-bold text-white text-ellipsis'>102.1</div>
                          <div className='mt-2.5 text-ellipsis text-stone-300'>8.28 points / hr</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                      <div className='flex grow justify-center items-center p-5 w-full text-base bg-emerald-600 rounded-3xl max-md:mt-1.5'>
                        <div className='flex flex-col items-center'>
                          <div className='text-ellipsis text-neutral-100'>My Boost</div>
                          <div className='mt-2.5 text-3xl font-bold text-white text-ellipsis'>1.2x</div>
                          <div className='self-stretch mt-2.5 text-ellipsis text-stone-300'>1.01 Points / hr </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='justify-center mt-2.5 h-[110px] rounded-3xl bg-zinc-900 max-md:max-w-full'>
                  <div className='flex gap-5 max-md:gap-0'>
                    {pointsData.map((item, index) => (
                      <React.Fragment key={item.title}>
                        {index !== 0 && (
                          <img
                            loading='lazy'
                            src={`{{ext_${index + 1}}}`}
                            alt=''
                            className='shrink-0 w-px mt-[30px] justify-center align-center h-[50px] border border-solid aspect-[0.01] border-zinc-700 stroke-[1px] stroke-zinc-700'
                          />
                        )}
                        <div
                          className={`flex flex-col ${index === 1 ? 'ml-5 w-[33%]' : 'w-[33%]'} max-md:ml-0 max-md:w-full`}>
                          <PointsCard title={item.title} points={item.points} subtitle={index === 0 ? undefined : ''} />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
