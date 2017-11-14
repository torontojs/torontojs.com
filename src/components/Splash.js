// @flow

import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './svg/Logo'
import SlackIcon from './svg/SlackIcon'
import Octocat from './svg/Octocat'

let Row = styled.div`
  display: flex;
`

let Header = styled(Row)`
  position: relative;
  z-index: 1;
`

let SlackLink = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

let GithubLink = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

let LinkText = styled.span`
  font-weight: bold;
  padding-left: 10px;
  transition: color 0.2s ease;
  &:hover {
    color: rgb(255, 248, 84);
  }
  @media (max-width: 700px) {
    display: none;
  }
`

let InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

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
  page?: string
}

export default ({
  backgroundColor = theme.primary,
  page = `TORONTO`
}: Props) => (
  <Container backgroundColor={backgroundColor}>
    <Header>
      <SlackLink href="http://slack.torontojs.com/" target="_blank">
        <SlackIcon style={{ width: `30px` }} />
        <LinkText>Join us on Slack</LinkText>
      </SlackLink>
      <GithubLink
        href="https://github.com/torontojs/torontojs.com"
        target="_blank"
      >
        <Octocat width="30px" />
        <LinkText>Contribute to this site</LinkText>
      </GithubLink>
      <GithubLink
        href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A"
        target="_blank"
      >
        <i className="fa fa-youtube-play" style={{ fontSize: `32px` }} />
        <LinkText>Tech Talks</LinkText>
      </GithubLink>
    </Header>
    <InnerContainer>
      <TitleContainer>
        <Title>
          {page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b>
        </Title>
        <Rotator
          items={[`MEETUPS`, `TECH TALKS`, `WORKSHOPS`, `SOCIAL EVENTS`]}
        />
      </TitleContainer>
      <Tower fill={backgroundColor} />
    </InnerContainer>
  </Container>
)
