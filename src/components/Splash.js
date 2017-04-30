// @flow

import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './svg/Logo'
import SlackIcon from './svg/SlackIcon'
import Octocat from './svg/Octocat'

<<<<<<< HEAD
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
=======
let Row = styled.div`
  display: flex;
`

let Header = styled(Row)`
  position: relative;
  z-index: 1;
`
>>>>>>> 0eaace596e750327b01ac0aa5f03313deceed836

let SlackLink = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

<<<<<<< HEAD
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
=======
let GithubLink = styled.a`
  margin-left: auto;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

let InnerContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
`
>>>>>>> 0eaace596e750327b01ac0aa5f03313deceed836

let TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fancyFont};
  color: white;
  padding: 100px 0 25px;
  z-index: 1;
  position: relative;
  letter-spacing: 4px;
`

let Container = styled.div`
  height: 80vh;
  background-color: ${props => props.backgroundColor || theme.primary};
  position: relative;
`

let Tower = styled(Logo)`
  position: absolute;
  bottom: 0;
  max-width: 600px;
`

let Title = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`

let Rotator = styled(ReactRotatingText)`
  font-size: 26px;
`

type Props = {
  backgroundColor?: string,
  page?: string,
}

export default ({ backgroundColor = theme.primary, page = `TORONTO` }: Props) => (
  <Container backgroundColor={backgroundColor}>
    <Header>
      <SlackLink href="http://slack.torontojs.com/" target="_blank">
        <SlackIcon style={{ width: `30px`, marginRight: `10px` }} />
        <b>Join us on Slack</b>
      </SlackLink>
      <GithubLink href="https://github.com/torontojs/torontojs.com" target="_blank">
        <b>Contribute to this site</b>
        <Octocat width="30px" style={{ marginLeft: `10px` }} />
      </GithubLink>
    </Header>
    <InnerContainer>
      <TitleContainer>
        <Title>{page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b></Title>
        <Rotator
          items={[`MEETUPS`, `TECH TALKS`, `WORKSHOPS`, `SOCIAL EVENTS`]}
        />
      </TitleContainer>
      <Tower fill={backgroundColor} />
    </InnerContainer>
  </Container>
)
