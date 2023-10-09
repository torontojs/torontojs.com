import React from 'react'
import styled from "styled-components"
import { Link, LinkText } from "./Link"

const BaseFooter = styled.footer`
display: flex;
align-items: center;
background-color: rgb(155, 155, 169);
display: flex;
position: relative;
z-index: 1;
width: 100%;
flex-flow: row wrap;
justify-content: center;

a {
  padding: 15px 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background-color: transparent;
    transition: background-color 350ms ease-in-out, translate 350ms ease-in-out;
  }

  &:hover {
    &::before {
      translate: 0 -4px;
      background-color: rgb(238, 49, 36);
    }
  }
}
`
export const Footer = () => {
  return (
    <BaseFooter>
      <Link
        href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-youtube-play" style={{ fontSize: `1.2rem` }} />
        <LinkText>YouTube</LinkText>
      </Link>
      <Link
        href="https://www.instagram.com/toronto.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-instagram" style={{ fontSize: `1.2rem` }} />
        <LinkText>Instagram</LinkText>
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
    </BaseFooter>
  )
}