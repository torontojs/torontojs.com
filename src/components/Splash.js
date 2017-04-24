import React from 'react'
import { css } from 'glamor'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './Logo'
import SlackIcon from './SlackIcon'
import Octocat from './Octocat'

export default ({ backgroundColor = theme.primary, page = `TORONTO` }) =>
  <div className={container(backgroundColor)}>
    <div className={`${row} ${header}`}>
      <a className={slackLink} href="http://slack.torontojs.com/" target="_blank">
        <SlackIcon style={{ width: `30px`, marginRight: `10px` }} />
        <b>Join us on Slack</b>
      </a>
      <a className={githubLink} href="https://github.com/torontojs/torontojs.com" target="_blank">
        <Octocat width="30px" style={{ marginRight: `10px` }} />
        <b>Contribute to this site</b>
      </a>
    </div>
    
    <div className={innerContainer}>
      <div className={titleContainer}>
        <div className={title}>{page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b></div>
        <ReactRotatingText
          className={rotator}
          items={[`MEETUPS`, `TECH TALKS`, `WORKSHOPS`, `SOCIAL EVENTS`]}
        />
      </div>
      <Logo className={logo} fill={backgroundColor} />
    </div>
  </div>

let row = css({
  width: '50%',
  display: `block`,
})

let header = css({
  position: `relative`,
  zIndex: 1,
})

let slackLink = css({
  fontSize: '1.2em',
  color: `white !important`,
  padding: `10px`,
  display: `flex`,
  alignItems: `center`,
  textDecoration: `none`,
})

let githubLink = css({
  fontSize: '1.2em',
  color: `white !important`,
  padding: `10px`,
  display: `flex`,
  alignItems: `center`,
  textDecoration: `none`,
})

let container = backgroundColor => css({
  height: `80vh`,
  backgroundColor: backgroundColor || theme.primary,
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
