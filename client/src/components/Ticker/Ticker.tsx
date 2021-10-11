import React from 'react'
import { ISimpleTicker } from '../../features/types'
import Arrow, { ArrowDirections } from '../Arrow'

export interface ITickerProps extends ISimpleTicker {}

const Ticker = (props: ITickerProps) => {
  const { ticker, price, change, changePercent } = props

  if (!changePercent || !price || !ticker) {
    return <div className="px-10 py-2 my-1">Invalid ticker data</div>
  }

  const percent = changePercent > 0 ? `+${changePercent}%` : `${changePercent}%`
  const changeText = changePercent > 0 ? `+${change}` : `${change}`

  let percentColor, arrowDirection
  if (changePercent > 0) {
    percentColor = 'text-green-500'
    arrowDirection = ArrowDirections.rise
  } else if (changePercent < 0) {
    percentColor = 'text-red-500'
    arrowDirection = ArrowDirections.fall
  } else {
    percentColor = 'text-gray-500'
    arrowDirection = ArrowDirections.stable
  }

  return (
    <div className="w-full font-ticker text-sm leading-4 min-w-[210px]">
      <div className="flex ml-2.5">
        <div className="flex-initial">
          <Arrow direction={arrowDirection} />
        </div>
        <div className="flex-initial ml-0.5 pl-1 font-bold">{ticker}</div>
      </div>

      <div className="flex align-middle mr-1 ml-[22px] font-medium">
        <div className={`flex-1 py-1 ${percentColor}`}>{percent}</div>
        {changeText && <div className="flex-1 p-1 text-right">{changeText}</div>}
        <div className="flex-1 p-1 text-right">{price}</div>
      </div>
    </div>
  )
}

export default Ticker
