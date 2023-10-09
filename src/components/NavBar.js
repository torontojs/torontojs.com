import React from "react"
import styled from "styled-components"
import { Link, LinkText } from "./Link"
import SlackIcon from "./svg/SlackIcon"
import Octocat from "./svg/Octocat"
import guildLogo from './png/guild_logo.png'

const Nav = styled.nav`
  display: flex;
  align-items: center;
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

const GuildLogo = styled.img`
  width:  1.25rem;
  height:  1.25rem;
`

export const NavBar = ({
  backgroundColor,
}) => {

  const speakerFormId = `1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg`
  const speakerFormLink = `https://docs.google.com/forms/d/e/${speakerFormId}/viewform?usp=sf_link`

  return (
    <Nav role="navigation" style={{ backgroundColor: `${backgroundColor}` }}>
      <Link
        href="https://join.slack.com/t/torontojs/shared_invite/zt-zgi31snl-omO3tXSZ0Q7zqN9WBQSf8Q"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SlackIcon style={{ width: `1.2rem` }} />
        <LinkText>Join Slack</LinkText>
      </Link>
      {/* eslint-enable max-len */}
      <Link
        href="https://guild.host/torontojs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GuildLogo src={guildLogo} alt="Guild Logo" />
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
    </Nav>
  )
}