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

export type ITickers = Array<ISimpleTicker>
