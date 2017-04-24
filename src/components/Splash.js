import React from 'react'
import { css } from 'glamor'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './svg/Logo'
import SlackIcon from './svg/SlackIcon'
import Octocat from './svg/Octocat'

export default ({ backgroundColor = theme.primary, page = `TORONTO` }) =>
  <div className={container(backgroundColor)}>
    <div className={row}>
      <a className={slackLink} href="http://slack.torontojs.com/" target="_blank">
        <SlackIcon style={{ width: `30px`, marginRight: `10px` }} />
        <b>Join us on Slack</b>
      </a>
      <a className={githubLink} href="https://github.com/torontojs/torontojs.com" target="_blank">
        <b>Contribute to this site</b>
        <Octocat width="30px" style={{ marginLeft: `10px` }} />
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
  display: `flex`,
})

let slackLink = css({
  color: `white`,
  padding: `10px`,
  display: `flex`,
  alignItems: `center`,
  textDecoration: `none`,
})

let githubLink = css({
  marginLeft: `auto`,
  color: `white`,
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
