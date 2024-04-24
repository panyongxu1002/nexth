import * as React from 'react'
import { UpOutlined, DownOutlined } from '@ant-design/icons'

interface FAQIthemProps {
  question: string
  answer: string
}

const FAQList: FAQIthemProps[] = [
  {
    question: 'Diversifying Investments with Crypto Index Strategies',
    answer: `Crypto indexes play a valuable role in diversifying investment portfolios by offering exposure to the
      burgeoning cryptocurrency market in a structured and diversified manner. As digital assets continue to
      gain mainstream acceptance, incorporating crypto indexes can be a strategic way for investors to
      capitalize on this evolving asset class while managing risk effectively.`,
  },
  {
    question: 'What is a crypto index?',
    answer:
      'A crypto index is a basket of cryptocurrencies that is managed by an index fund. The index fund tracks the performance of the underlying assets and rebalances the portfolio periodically to maintain a specific weightage of each asset.',
  },
  {
    question: 'How do I invest in a crypto index?',
    answer:
      'To invest in a crypto index,you need to find an index fund that suits your risk tolerance and investment horizon.',
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null)

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null) 
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className='flex flex-col items-center px-20 py-16 w-full text-black bg-neutral-100 max-md:px-5 max-md:max-w-full'>
      <div className='text-5xl font-semibold max-md:text-4xl'>FAQ</div>

      <div className='flex flex-col overflow-hidden justify-center mt-5 w-full bg-white max-w-[1340px] rounded-[30px] max-md:max-w-full'>
        {FAQList.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleExpand(index)}
            className={`flex gap-5 cursor-pointer p-8 border-t border-solid border-black border-opacity-10 max-md:flex-wrap max-md:px-5 ${index === expandedIndex ? 'bg-emerald-500 text-white ' : ''} `}>
            <div className='flex flex-col flex-1 justify-center max-md:max-w-full'>
              <div className='text-2xl font-medium leading-8 text-ellipsis max-md:max-w-full'>{item.question}</div>
              {index === expandedIndex && (
                <div className='mt-2 text-base leading-5 max-md:max-w-full'>
                  {item.answer}
                  <br />
                </div>
              )}
            </div>
            {index === expandedIndex ? (
              <UpOutlined className='shrink-0 self-start aspect-square ' style={{ fontSize: '24px' }} />
            ) : (
              <DownOutlined className='shrink-0 self-start aspect-square' style={{ fontSize: '24px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
