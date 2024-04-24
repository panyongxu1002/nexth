import * as React from 'react'
import Hero from '@/assets/icons/hreo.png'
import Image from 'next/image'

interface PointsCardProps {
  title: string
  points: number
  subtitle: string | undefined
}

const PointsCard: React.FC<PointsCardProps> = ({ title, points, subtitle }) => (
  <div className='flex flex-col grow p-5'>
    <div className='self-center text-base text-ellipsis text-neutral-100'>{title}</div>
    <div className='mt-2.5 text-3xl text-center font-bold text-white text-ellipsis'>{points}</div>
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
    <div className='flex justify-center items-center p-16 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-col w-full max-w-[1340px] max-md:max-w-full'>
        <div className='flex flex-col justify-center overflow-hidden relative  rounded-3xl bg-zinc-900 max-md:max-w-full'>
          <div className='pt-12 pr-20 pl-8 max-md:px-5 max-md:max-w-full overflow-hidden'>
            <div className='flex  overflow-hidden max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[73%] max-md:ml-0 max-md:w-full'>
                <div className='flex z-10 flex-col justify-center max-md:mt-10 max-md:max-w-full'>
                  <h1 className='text-7xl font-bold text-white bg-clip-text leading-[88px] text-ellipsis max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
                    <span className='text-white'>Stage</span> <span className='text-white'>One</span>{' '}
                    <span className='bg-gradient-to-l bg-clip-text  from-green-500 via-green-400 to-green-600 text-transparent'>
                      Airdrop
                    </span>
                  </h1>
                  <p className='mt-5 text-3xl leading-9 text-ellipsis text-stone-300 max-md:max-w-full'>
                    Lorem ipsum dolor sit amet consectetur. Malesuada dictumst nunc egestas elementum. Eget augue urna
                    laoreet facilisis.
                  </p>
                  <button className='justify-center self-start px-10 py-5 mt-8 text-2xl font-semibold leading-8 text-black bg-white rounded-3xl max-md:px-5'>
                    Learn More
                  </button>
                </div>

                <div
                  className='w-[400px] h-[400px] absolute top-[70px] right-[-25px] '
                  style={{
                    backgroundImage: `url(${Hero.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}></div>
              </div>
              <div className='flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/ec5cf995f7283834705b71c6324eb2507e4bab2a2c68ca04791dfa1bd365082c?apiKey=53186c56703b47418c12cd21c1b9decd&'
                  alt=''
                  className='grow shrink-0 mt-32 max-w-full aspect-[1.41] blur-[30px] w-[294px] max-md:mt-10'
                />
              </div>

              {/* <div className=' w-[480px] h-[480px] absolute top-0 right-0 overflow-hidden'>
                <Image alt='123' height={480} width={480} src={Hero.src}/>
              </div> */}
            </div>
          </div>
        </div>
        <div className='justify-center mt-16 max-md:mt-10 max-md:max-w-full'>
          <div className='flex h-[260px] max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[41%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow justify-center items-start p-5 w-full text-base rounded-3xl bg-zinc-900 max-w-[540px] max-md:mt-2.5 max-md:max-w-full'>
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
                <div className='flex gap-2.5 justify-center mt-3'>
                  <div className='text-ellipsis text-stone-300'>0x56Ag...15Yb</div>
                  <div className='text-emerald-500 text-ellipsis'>View Details &gt;</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col  ml-1 w-[59%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col h-[260px] first-letter:grow max-md:mt-2.5 max-md:max-w-full'>
                <div className='justify-center max-md:max-w-full'>
                  <div className='flex gap-2.5 justify-center max-md:flex-col max-md:gap-0'>
                    <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                      <div className='flex grow justify-center items-center p-5 w-full text-base rounded-3xl bg-zinc-900 max-md:mt-2.5'>
                        <div className='flex flex-col'>
                          <div className='self-center text-ellipsis text-neutral-100'>My H30</div>
                          <div className='mt-2.5 text-3xl font-bold text-white text-ellipsis'>102.1</div>
                          <div className='mt-2.5 text-ellipsis text-stone-300'>8.28 points / hr</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                      <div className='flex grow justify-center items-center p-5 w-full text-base bg-emerald-600 rounded-3xl max-md:mt-2.5'>
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
                  <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
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
