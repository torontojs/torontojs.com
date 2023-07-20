// @flow

import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../theme"
import ReactRotatingText from "./RotatingText"
import Logo from "./svg/Logo"
import SlackIcon from "./svg/SlackIcon"
import Octocat from "./svg/Octocat"
import guildLogo from './png/guild_logo.png'

let Container = styled.div`
  height: auto;
  background-color: ${(props) => props.backgroundColor || theme.primary};
  position: relative;
  z-index: 1;
`

let Box = styled.div`
  display: flex;
  align-items: center;
`

let Header = styled(Box)`
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: center;
  transition: background-color 350ms ease-in-out;
  flex-order:0;
  
  &:hover {
    background-color: rgb(215, 43, 31);
  }

  a {
    color: white;
    &:hover {
      color: rgb(255, 248, 254);
    }
  
  @media (max-width: 768px) {
    position: relative;
    flex-order: 1;
    flex-direction: column-reverse;
    align-items: center;
  }
`

let Link = styled.a`
  color: white;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 350ms ease-in-out;
  &:hover {
    color: rgb(255, 248, 84);
    background-color: rgb(238, 49, 36);
  }
  transition: color 0.2s ease;
`

let LinkText = styled.span`
  font-weight: bold;
  padding: 0 0.25rem;
  transition: color 0.2s ease;
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    text-decoration-style: wavy;
    animation: wavy 0.5s ease-in-out infinite;
  }
`

let InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 996px;
  padding: 1rem 2rem;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
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
  letter-spacing: .25rem;
`

let Tower = styled(Logo)`
  position: absolute;
  bottom: 0;
  max-width: 600px;
  @media (max-width: 768px) {
    max-height: 250px;
  }
`

let Title = styled.div`
  font-size: 36px;
  margin-bottom: 0.75rem;
`

let Rotator = styled(ReactRotatingText)`
  font-size: 1.25rem;
`

const GuildLogo = styled.img`
  width:  1.25rem;
  height:  1.25rem;
`
const Footer = styled(Box)`
display: flex;
position: relative;
z-index: 1;
bottom: 0;
width: 100%;
flex-flow: row wrap;
justify-content: center;
margin-bottom: 1rem;
@media (max-width: 768px) {
  flex-flow: column nowrap;
}
`

const GuildCardRoot = styled.div`
  min-width: 256px
`

const EventColumn = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    width: calc((100% / 2) - 1rem); /* 100% - (gap / 2) */
  }
`

type Props = {
  backgroundColor?: string,
  page?: string,
};

const speakerFormId = `1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg`
const speakerFormLink = `https://docs.google.com/forms/d/e/${speakerFormId}/viewform?usp=sf_link`

export default ({
  backgroundColor = theme.primary,
  page = `TORONTO`,
}: Props) => {
  const guildCardRef = useRef()
  const upcomingEventsRef = useRef()
  const pastEventsRef = useRef()

  useEffect(() => {
    if (guildCardRef.current) {
      return window.$guild.renderGuildCard(
        guildCardRef.current,
        `torontojs`
      )      
    }
  }, [guildCard])

  useEffect(() => {
    if (upcomingEventsRef.current) {
      return window.$guild.renderGuildEventList(
        upcomingEventsRef.current,
        `torontojs`,
        `UPCOMING`
      )
    }
  }, [upcomingEventsRef])

  useEffect(() => {
    if (pastEventsRef.current) {
      return window.$guild.renderGuildEventList(
        pastEventsRef.current,
        `torontojs`,
        `PAST`
      )
    }
  }, [pastEventsRef])

  return (
    <div>
      <Container backgroundColor={backgroundColor} style={{ height: `80vh` }}>

        {/* Top Nav Bar */}
        <Header role="navigation">
          <Link
            href="https://join.slack.com/t/torontojs/shared_invite/zt-zgi31snl-omO3tXSZ0Q7zqN9WBQSf8Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlackIcon style={{ width: `1.2rem` }} />
            <LinkText>Join Slack</LinkText>
          </Link>
          <Link
            href="https://guild.host/torontojs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GuildLogo src={guildLogo} />
            <LinkText>Join us on Guild</LinkText>
          </Link>
          <Link
            href="https://github.com/torontojs/torontojs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Octocat width="1.2rem" />
            <LinkText>Contribute</LinkText>
          </Link>
          <Link
            href={speakerFormLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-comment" style={{ fontSize: `1.2rem` }} />
            <LinkText>Give a Talk</LinkText>
          </Link>
          <Link href="./p/code_of_conduct" target="_blank">
            <i className="fa fa-sticky-note" style={{ fontSize: `1.2rem` }} />
            <LinkText>Code of Conduct</LinkText>
          </Link>
          <Link href="./p/report" target="_blank">
            <i className="fa fa-flag" style={{ fontSize: `1.2rem` }} />
            <LinkText>Report Abuse</LinkText>
          </Link>
          <Link href="https://tldr.torontojs.com/" target="_blank">
            <i className="fa fa-folder" style={{ fontSize: `1.2rem` }} />
            <LinkText>Newsletter</LinkText>
          </Link>
        </Header>

        {/* Toronto JS Logo Vector in Background */}
        <InnerContainer>
          <TitleContainer>
            <Title>
              {page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b>
            </Title>
            <Rotator
              items={[`MEETUPS`, `TECH TALKS`, `MOB PROGRAMMING`, `WORKSHOPS`, `SOCIAL EVENTS`]}
            />
          </TitleContainer>
          <Tower fill={backgroundColor} />
        </InnerContainer>
      </Container>


      {/* Main Content Section */}

      <Container style={{ backgroundColor: `white`, lineHeight: 1.5, padding: `2rem 0` }}>

        <InnerContainer style={{ display: `flex` }}>
          <div style={{ width: `auto`, fontSize: `2rem` }}>
            We are a volunteer-run community that supports all in their learning and passion for sharing knowledge on JavaScript- and by extension, software development in Toronto and the GTA.

            <ul style={{ listStyle: `none`, fontSize: `1.25rem`, lineHeight: 1.4, marginTop: `1rem` }}>
              <li>📅 Over 30+ events a year</li>
              <li>🚀 Community-led online and in-person events</li>
              <li>🦋 5555 on Slack</li>
              <li>🚀 Over 400 on Guild</li>
              <li>👯🏻 30+ <a href="./p/volunteers">volunteers 🧑🏻‍🤝‍🧑🏾</a></li>
              <li>🎲 ~4 organizers</li>
            </ul>
          </div>

          <GuildCardRoot>
            <div id="guild-card-root" ref={guildCardRef} />
          </GuildCardRoot>

        </InnerContainer>
        <InnerContainer style={{ display: `flex`, justifyContent: `space-between`, overflow: `hidden` }}>
          <EventColumn>
            <Title>Upcoming Events</Title>
            <div id="guild-card-upcoming" ref={upcomingEventsRef} />
          </EventColumn>
          <EventColumn>
            <Title>Past Events</Title>
            <div id="guild-card-past" ref={pastEventsRef} />
          </EventColumn>
        </InnerContainer>

      </Container>
      <Footer>
        <Link
          href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube-play" style={{ fontSize: `1.2rem` }} />
          <LinkText>YouTube</LinkText>
        </Link>
        <Link href="https://tldr.torontojs.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-briefcase" style={{ fontSize: `1.2rem` }} />
          <LinkText>LinkedIn</LinkText>
        </Link>

        <Link href="https://opencollective.com/torontojs" target="_blank">
          <i className="fa fa-users" style={{ fontSize: `1.2rem` }} />
          <LinkText>Open Collective</LinkText>
        </Link>
        <Link href="https://twitter.com/torontojs" target="_blank">
          <i className="fa fa-twitter" style={{ fontSize: `1.2rem` }} />
          <LinkText>Twitter</LinkText>
        </Link>
      </Footer>
    </div >
  )
}
