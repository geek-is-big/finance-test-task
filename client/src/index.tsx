import React from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import './index.css'
import App from './app/App'
import { store } from './app/store'

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
