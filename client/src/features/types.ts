export interface ISimpleTicker {
  ticker?: string
  exchange?: string
  price?: number
  change?: number
  changePercent?: number
  dividend?: number
  yield?: number
  lastTradeTime?: string
}

export interface IRecivedTicker extends Omit<ISimpleTicker, 'changePercent' | 'lastTradeTime'> {
  change_percent?: number
  last_trade_time?: string
}

export type ITickers = Array<ISimpleTicker>
