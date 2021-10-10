import React from 'react'
import { render } from '@testing-library/react'
import Ticker, { ITickerProps } from './Ticker'

describe('Ticker component:', () => {
  const tSymbol = 'AAPL'
  const price = 202.23
  const change = -23.71
  const changePercent = 0.82

  it('should render ticker, price, percent and price change', () => {
    const props: ITickerProps = {
      ticker: tSymbol,
      price,
      change,
      changePercent,
    }
    const { getByText } = render(<Ticker {...props} />)

    expect(getByText(tSymbol)).toBeInTheDocument()
    expect(getByText(RegExp(`${price}`))).toBeInTheDocument()
    expect(getByText(RegExp(`${change}`))).toBeInTheDocument()
    expect(getByText(RegExp(`${changePercent}`))).toBeInTheDocument()
  })

  it('should render ticker without price change', () => {
    const props: ITickerProps = {
      ticker: tSymbol,
      price,
      changePercent,
    }
    const { getByText } = render(<Ticker {...props} />)

    expect(getByText(tSymbol)).toBeInTheDocument()
    expect(getByText(RegExp(`${price}`))).toBeInTheDocument()
    expect(getByText(RegExp(`${changePercent}`))).toBeInTheDocument()
  })

  it('should render invalid ticker text', () => {
    const { getByText } = render(<Ticker />)

    expect(getByText('Invalid ticker data')).toBeInTheDocument()
  })
})
