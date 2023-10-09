import React from "react"
import styled from "styled-components"
import ReactRotatingText from "react-rotating-text"
import Logo from "./svg/Logo"
import { TitleContainer, InnerContainer } from "./Container"
import { Hero } from "./Hero"

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 0.75rem;
`
export const Tower = styled(Logo)`
  position: absolute;
  bottom: 0;
  max-width: 600px;
  @media (max-width: 768px) {
    max-height: 250px;
  }
`
export const Rotator = styled(ReactRotatingText)`
  font-size: 1.25rem;
`
export const Header = ({ backgroundColor, title }) => {
  return (
    <div>
      <Hero backgroundColor={backgroundColor} style={{ height: `80vh` }}>
        {/* Toronto JS Logo Vector in Background */}
        <InnerContainer>
          <TitleContainer>
            <Title>
              {title}&nbsp;<b style={{ color: `#ffffff` }}>JS</b>
            </Title>
            <Rotator
              items={[`MEETUPS`, `TECH TALKS`, `MOB PROGRAMMING`, `WORKSHOPS`, `SOCIAL EVENTS`]}
            />
          </TitleContainer>
          <Tower fill={backgroundColor} />
        </InnerContainer>
      </Hero >
    </div>
  )
}