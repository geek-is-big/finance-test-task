import React from 'react'
import TickerForm from './components/TickerForm/TickersForm'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="w-full sm:max-w-[345px] sm:px-4 md:px-0 md:max-w-[599px] lg:max-w-[930px] xl:max-w-[1260px] mx-auto pt-2">
      <NavBar />
      <TickerForm />
    </div>
  )
}

export default App
