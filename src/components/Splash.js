// @flow

import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Logo from './png/logobeagajs.png'
import TelegramLogo from './png/telegramlogo.png'
import Octocat from './svg/Octocat'

let Row = styled.div`
  display: flex;
`

let Header = styled(Row)`
  position: relative;
  z-index: 1;
`

let Link = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: rgb(255, 248, 84);
  }
`

let LinkText = styled.span`
  font-weight: bold;
  padding-left: 10px;
  transition: color 0.2s ease;
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

let Tower = styled.img`
  position: absolute;
  bottom: -29px;
  max-width: 370px;
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

const speakerFormLink = `https://goo.gl/forms/RfJytjV4HEAhYRxk2`

export default ({ backgroundColor = theme.primary, page = `BEAGÁ` }: Props) => (
  <Container backgroundColor={backgroundColor}>
    <Header>
      <Link href="https://t.me/beagajs" target="_blank">
        <img src={TelegramLogo} style={{ width: `30px` }} alt="Ícone do aplicativo Telegram" />
        <LinkText>Telegram</LinkText>
      </Link>
      <Link href="http://meetup.com/beagajs" target="_blank">
        <i className="fa fa-meetup" style={{ fontSize: `32px` }} />
        <LinkText>Meetup</LinkText>
      </Link>
      <Link href="https://github.com/beagajs/beagajs" target="_blank">
        <Octocat width="30px" />
        <LinkText>Github</LinkText>
      </Link>
      <Link href="https://www.youtube.com/channel/UCUhMHutY0ucmiYYpuwFfINQ" target="_blank">
        <i className="fa fa-youtube-play" style={{ fontSize: `32px` }} />
        <LinkText>Tech Talks</LinkText>
      </Link>
      <Link href={speakerFormLink} target="_blank">
        <i className="fa fa-comment" style={{ fontSize: `32px` }} />
        <LinkText>Envie uma proposta</LinkText>
      </Link>
    </Header>
    <InnerContainer>
      <TitleContainer>
        <Title>{page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b></Title>
        <Rotator
          items={[
            `MEETUPS`,
            `PÃO DE QUEIJO`,
            `TECH TALKS`,
            `BIRITAS`,
            `WORKSHOPS`,
            `CAFÉZIM`,
            `SOCIAL EVENTS`,
          ]}
        />
      </TitleContainer>
      <Tower
        fill={backgroundColor}
        src={Logo}
        alt="Ilustração representando a igreja da pampulha em Belo Horizonte"
      />
    </InnerContainer>
  </Container>
)
