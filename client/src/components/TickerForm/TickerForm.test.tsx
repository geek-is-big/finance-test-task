import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { updateTickers } from './tickerSlice'
import { ITickers } from '../types'

import TickerForm from './TickersForm'

const renderTickerForm = (): RenderResult =>
  render(
    <Provider store={store}>
      <TickerForm />
    </Provider>,
  )

describe('TickerForm component:', () => {
  it('renders empty TickerForm', () => {
    const { getByText } = renderTickerForm()

    expect(getByText('No tickers yet', { exact: false })).toBeInTheDocument()
  })

  it('renders several Tickers', () => {
    const tickers: ITickers = [
      {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: 279.29,
        change: 64.52,
        changePercent: 0.84,
        dividend: 0.56,
        yield: 1.34,
        lastTradeTime: '2021-04-30T11:53:21.000Z',
      },
      {
        ticker: 'GOOGL',
        exchange: 'NASDAQ',
        price: 237.08,
        change: 154.38,
        changePercent: 0.1,
        dividend: 0.46,
        yield: 1.18,
        lastTradeTime: '2021-04-30T11:53:21.000Z',
      },
    ]

    store.dispatch(updateTickers(tickers))

    const { getByText } = renderTickerForm()

    expect(getByText('AAPL', { exact: false })).toBeInTheDocument()
    expect(getByText('GOOGL', { exact: false })).toBeInTheDocument()
  })
})
