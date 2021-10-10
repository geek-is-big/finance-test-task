import { RootState } from '../../app/store'
import { ITickers } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

export interface TickerState {
  tickers: ITickers
}

const initialState: TickerState = {
  tickers: [],
}

export const tickerSlice = createSlice({
  name: 'ticker',
  initialState,
  reducers: {
    updateTickers: (state, action: PayloadAction<ITickers>) => {
      state.tickers = action.payload
    },
  },
})

export const { updateTickers } = tickerSlice.actions

export const selectTickers = (state: RootState) => state.ticker.tickers

export default tickerSlice.reducer

export const SERVER_URL = 'http://localhost:4000'
const socket = io(SERVER_URL)

export const subscribeOnTickers = () => (dispatch: Function) => {
  socket.on('connect', () => {
    socket.emit('start', '')
    console.log('connected to server')
  })

  socket.on('disconnect', () => {
    console.log('disconnected from server')
  })

  socket.on('ticker', (resp) => {
    const data = resp.map((ticker: any) => ({
      changePercent: ticker?.change_percent,
      lastTradeTime: ticker?.last_trade_time,
      ...ticker,
    }))
    dispatch(updateTickers(data))
  })

  socket.connect()
}

export const unsubscribeFromTickers = () => {
  console.log('try to unsubscribe')
  if (socket.connected) {
    socket.close()
    console.log('closed connection')
  }
}
