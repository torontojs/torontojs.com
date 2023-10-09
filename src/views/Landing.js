// @flow
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../theme"
import { Container, InnerContainer } from "../components/Container"
import { Anchor } from "../components/Link"
import { Column } from "../components/Column"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const Title = styled.div`
  font-size: 36px;
  margin-bottom: 0.75rem;
`

export default function Landing({
  backgroundColor,
  page,
}) {

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
  }, [guildCardRef])

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
      <NavBar backgroundColor={theme.primary} />
      <Header backgroundColor={theme.primary} title="TORONTO" />

      {/* Main Content Section */}

      <Container style={{ backgroundColor: `white`, lineHeight: 1.5, padding: `2rem 0` }}>

        <InnerContainer style={{ display: `flex` }}>
          <div style={{ width: `auto`, fontSize: `1.75rem` }}>

            We are a volunteer-run community that supports all in their learning and passion for
            sharing knowledge on JavaScript- and by extension, software development in Toronto and
            the GTA.
            <br />
            <Anchor href="./p/mission">Learn More</Anchor>

            <ul style={{
              listStyle: `none`,
              fontSize: `1.25rem`,
              lineHeight: 1.4,
              marginTop: `1rem`,
            }}
            >
              <li>📅 Over 30+ events a year</li>
              <li>🚀 Community-led online and in-person events</li>
              <li>⭐ 5800 on Slack</li>
              <li>🚀 Over 11,800 members on Meetup and 600 on Guild</li>
              <li>👯🏻 40+ <Anchor href="./p/volunteers">volunteers</Anchor>👥</li>
              <li>🎲 ~4 organizers</li>
              <li>🧑🏻‍🤝‍🧑🏾 <Anchor href="./p/history">13 years</Anchor> and still going!</li>
            </ul>
            <br />
            <a href="https://opencollective.com/torontojs/" target="_blank">
              <img alt="open collective badge"
                src="https://opencollective.com/torontojs/tiers/badge.svg?
                label=Financial%20Contributors&color=brightgreen"
              />
            </a>
          </div>

          <div style={{ minWidth: `256px` }}>
            <div id="guild-card-root" ref={guildCardRef} />
          </div>

        </InnerContainer>

        <InnerContainer style={{
          display: `flex`,
          justifyContent: `space-between`,
          overflow: `hidden`,
        }}
        >
          <Column>
            <Title>Upcoming Events</Title>
            <div id="guild-card-upcoming" ref={upcomingEventsRef} />
          </Column>
          <Column>
            <Title>Past Events</Title>
            <div id="guild-card-past" ref={pastEventsRef} />
          </Column>
        </InnerContainer>
      </Container>

      {/* Footer */}
      <Footer />
    </div >
  )
}

Landing.defaultProps = {
  backgroundColor: theme.primary,
  page: `TORONTO`,
}