'use client'
import * as React from 'react'
import { List, Avatar } from 'antd'

interface LeaderboardItemProps {
  rank: React.ReactNode
  avatar: string
  name: string
  holdingVolume: string
  referralPoints: string
  totalPoints: string
  className?: string
}
const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  rank,
  avatar,
  name,
  holdingVolume,
  referralPoints,
  totalPoints,
  className,
}) => (
  <List.Item
    className={`flex text-black gap-5 h-[60px] justify-between py-2.5 pr-5 pl-2.5 w-full font-medium text-black-400 max-md:flex-wrap max-md:max-w-full hover:bg-gray-100 ${className}`}>
    <div className='flex gap-5 justify-between whitespace-nowrap'>
      <div className='w-[100px] self-stretch my-auto'>{rank}</div>
      <div className='w-[400px] pl-[30px] flex gap-2.5 self-stretch p-2.5'>
        <Avatar size={36}>{name.slice(-4)}</Avatar>
        <div className={`my-auto ${className ? 'text-emerald-500' : ''}`}>{name}</div>
      </div>
    </div>
    <div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full pr-[20px]'>
      <div className='w-[240px] self-stretch my-auto'>{holdingVolume}</div>
      <div className='w-[240px] self-stretch my-auto'>{referralPoints}</div>
      <div className=' self-stretch my-auto'>{totalPoints}</div>
    </div>
  </List.Item>
)

const leaderboardData: LeaderboardItemProps[] = [
  {
    rank: '🏅',
    avatar: '',
    name: 'Elon',
    holdingVolume: '299,670,599.23',
    referralPoints: '59,803,388',
    totalPoints: '13,079,239,198',
  },
  {
    rank: '🥈',
    avatar: '',
    name: 'LilCZzzz',
    holdingVolume: '200,142,516.26',
    referralPoints: '47,963,941',
    totalPoints: '12,311,336,898',
  },
  {
    rank: '🥉',
    avatar: '',
    name: 'dffsaas',
    holdingVolume: '600,142,516.26',
    referralPoints: '23,660,691',
    totalPoints: '9,083,388,982',
  },
  {
    rank: '4',
    avatar: '',
    name: 'coool',
    holdingVolume: '700,142,516.26',
    referralPoints: '201,291',
    totalPoints: '8,860,166,075',
  },
  {
    rank: '5',
    avatar: '',
    name: 'CryptoDegen',
    holdingVolume: '400,142,516.26',
    referralPoints: '-',
    totalPoints: '8,167,849,776',
  },
  {
    rank: '6',
    avatar: '',
    name: 'Justin',
    holdingVolume: '500,142,516.26',
    referralPoints: '7,411,683',
    totalPoints: '6,575,665,115',
  },
  {
    rank: '7',
    avatar: '',
    name: 'Punkkk',
    holdingVolume: '10,142,516.26',
    referralPoints: '-',
    totalPoints: '5,423,235,976',
  },
  {
    rank: '8',
    avatar: '',
    name: 'Tony',
    holdingVolume: '80,142,516.26',
    referralPoints: '6,766,680',
    totalPoints: '4,335,423,241',
  },
  {
    rank: '9',
    avatar: '',
    name: 'Musk',
    holdingVolume: '60,142,516.26',
    referralPoints: '5,766,680',
    totalPoints: '4,123,423,242',
  },
  {
    rank: '10',
    avatar: '',
    name: 'Ccacqf',
    holdingVolume: '40,132,516.26',
    referralPoints: '766,680',
    totalPoints: '3,235,423,241',
  },
  {
    rank: '11',
    avatar: '',
    name: 'Ccacqf',
    holdingVolume: '40,132,516.26',
    referralPoints: '766,680',
    totalPoints: '3,235,423,241',
  },
  {
    rank: '12',
    avatar: '',
    name: 'Ccacqf',
    holdingVolume: '40,132,516.26',
    referralPoints: '766,680',
    totalPoints: '3,235,423,241',
  },
]

const myData: LeaderboardItemProps = {
  rank: '346,223',
  avatar: '',
  name: '0x24rf...dcat',
  holdingVolume: '516.26',
  referralPoints: '680',
  totalPoints: '23,241',
}

const MyRank: React.FC<LeaderboardItemProps> = ({ rank, avatar, name, holdingVolume, referralPoints, totalPoints }) => {
  return (
    <div
      className={`flex text-black gap-5 h-[60px] justify-between py-2.5  w-full font-medium text-black-400 max-md:flex-wrap max-md:max-w-full hover:bg-gray-100`}>
      <div className='flex gap-5 justify-between whitespace-nowrap'>
        <div className='w-[100px] self-stretch my-auto'>{rank}</div>
        <div className='w-[400px] pl-[30px] flex align-center gap-2.5 self-stretch'>
          <Avatar size={36} className={`my-auto mb-2`}>{name.slice(-4)}</Avatar>
          <div className={`my-auto text-emerald-500 leading-[30px] h-[30px]`}>{name}</div>
        </div>
      </div>
      <div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full pr-[20px]'>
        <div className='w-[240px] self-stretch my-auto'>{holdingVolume}</div>
        <div className='w-[240px] self-stretch my-auto'>{referralPoints}</div>
        <div className=' self-stretch my-auto'>{totalPoints}</div>
      </div>
    </div>
  )
}

export const RankingList: React.FC = () => {
  return (
    <div className='flex flex-col h-[900px] items-center px-20 py-16 w-full font-semibold bg-neutral-100 max-md:px-5 max-md:max-w-full'>
      <h1 className='text-5xl text-black max-md:text-4xl'>Leaderboard</h1>
      <div className='flex  flex-col justify-center px-5 mt-5 w-full text-base bg-white rounded-3xl max-w-[1340px] max-md:max-w-full'>
        <div className='flex gap-5  justify-between py-2.5 pr-5 pl-2.5 w-full font-medium text-neutral-400 max-md:flex-wrap max-md:max-w-full'>
          <div className='flex gap-5 justify-between whitespace-nowrap'>
            <div className='w-[100px]'>Rank</div>
            <div className='w-[400px] pl-[30px]'>Address</div>
          </div>
          <div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full pr-[20px]'>
            <div className='w-[240px]'>Holding volume</div>
            <div className='w-[240px]'>Referral Points</div>
            <div>Total Points</div>
          </div>
        </div>
        <List
          dataSource={leaderboardData}
          renderItem={(item, index) => <LeaderboardItem key={index} {...item} />}
          className='h-[600px] overflow-auto text-black'
        />
        <MyRank {...myData}></MyRank>
      </div>
    </div>
  )
}
