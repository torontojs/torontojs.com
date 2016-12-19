import React from 'react'
import { insertRule } from 'glamor'
import Splash from './components/Splash'
import Events from './components/Events'

insertRule(`
  html {
    font-family: 'Roboto', sans-serif;
  }
`)

let App = () =>
  <div>
    <Splash />
    <Events />
  </div>

export default App
