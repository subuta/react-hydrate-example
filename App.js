import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => {
  const onClick = () => {
    console.log('clicked!')
  }

  return (
    <button onClick={onClick}>
      click me!
    </button>
  )
}

export default hot(module)(App)