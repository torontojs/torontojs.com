import React from 'react'
import { css } from 'glamor'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './Logo'

export default () =>
  <div className={container}>
    <div className={innerContainer}>
      <div className={titleContainer}>
        <div className={title}>TORONTO<b style={{ color: `#fdd8d6` }}>JS</b></div>
        <ReactRotatingText
          className={rotator}
          items={[`MEETUPS`, `TECH TALKS`, `WORKSHOPS`, `SOCIAL EVENTS`]}
        />
      </div>
      <Logo className={logo} />
    </div>
  </div>

let container = css({
  height: `100vh`,
  backgroundColor: theme.primary,
  position: `relative`,
})

let innerContainer = css({
  height: `100vh`,
  margin: `0 auto`,
  maxWidth: `1000px`,
})

let logo = css({
  position: `absolute`,
  bottom: 0,
  maxWidth: `600px`,
})

let titleContainer = css({
  display: `flex`,
  justifyContent: `center`,
  flexDirection: `column`,
  alignItems: `center`,
  fontFamily: theme.fancyFont,
  color: `white`,
  padding: `100px 0 25px`,
  zIndex: 1,
  position: `relative`,
  letterSpacing: `4px`,
})

let title = css({
  fontSize: `35px`,
  marginBottom: `10px`,
})

let rotator = css({
  fontSize: `26px`,
})
