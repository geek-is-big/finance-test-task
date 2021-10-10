import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Ticker from '../Ticker/Ticker'
import { selectTickers, subscribeOnTickers, unsubscribeFromTickers } from './tickerSlice'

const TickerForm = () => {
  const tickers = useAppSelector(selectTickers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(subscribeOnTickers())

    return () => unsubscribeFromTickers()
  }, [dispatch])

  if (tickers.length === 0) {
    return (
      <div className="mt-2 h-16 flex justify-center items-center">
        <div className="font-ticker text-2xl">No tickers yet! Check your internet connection</div>
      </div>
    )
  }

  return (
    <ul className="list-none pt-[1px] overflow-hidden">
      {tickers.map((ticker, i) => {
        return (
          <li className="border-t border-b mt-[-1px] py-2 ml-[-1px] float-left box-border" key={i}>
            <div className="border-l">
              <Ticker {...ticker} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TickerForm
