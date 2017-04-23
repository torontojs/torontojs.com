import React from 'react'
import Splash from './Splash'
import { css } from 'glamor'
import theme from '../theme'

let ErrorPage = () =>
  <div>
    <Splash />
    <div className={sectionTitle}>
      Uh oh! Something went wrong.
    </div>
    <div>
      [Insert witty gif here]
    </div>
  </div>

let sectionTitle = css({
  fontFamily: theme.fancyFont,
  letterSpacing: `2px`,
  display: `flex`,
  justifyContent: `center`,
  paddingTop: `35px`,
})

export default ErrorPage
