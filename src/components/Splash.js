// @flow

import React from "react"
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
  display: flex;
  flex-order: 0;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: center;
  transition: background-color 350ms ease-in-out;
  &:hover {
    background-color: rgb(215, 43, 31);
  }
  a {
    color: white;
    &:hover {
      color: rgb(255, 248, 84);
    }
  
  @media (max-width: 768px) {
    position: relative;
    flex-order:2;
    flex-direction: column;
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
`

let InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 996px;
  padding: 1rem 2rem;
`

let TitleContainer = styled.div`
  @media (max-width: 768px) {
    flex-order: 0;
    align-items: flex-end;
    flex-direction: column-reverse;
  }
  flex-order: 1;
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
@media (max-width: 768px) {
  flex-flow: column nowrap;
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

      <Container style={{ backgroundColor: `white`, lineHeight: 1.5 }}>

        <InnerContainer style={{ fontSize: `2.2rem` }}>
          We are a volunteer-run community that supports all in their learning and passion for sharing knowledge on JavaScript
          <br />- and by extension, software development in Toronto and the GTA.
          <br />
        </InnerContainer>

        <InnerContainer style={{ fontSize: `1.5rem` }}>
          <ul style={{ listStyle: `none` }}>
            <li>Over 24+ events a year</li>
            <li>Community led online and in-person events</li>
            <li>11k members on Meetup</li>
            <li>5555 on Slack</li>
            <li>300+ on Guild</li>
            <li>~30 volunteers</li>
            <li>~4 organizers</li>
            <li>1 Infrequent Newsletter</li>
          </ul>
          <br />

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
        <Link href="https://tldr.torontojs.com/" target="_blank">
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
