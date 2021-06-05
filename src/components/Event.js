import React from "react"
import styled, { css } from 'styled-components'
import Color from 'color'
import theme from '../theme'
import AddToCalendar from 'react-add-to-calendar'
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

const DAYS_OF_WEEK = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
]

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
]

let linkStyles = css`
  color: ${theme.link};
  &:hover {
    color: ${Color(theme.link).darken(0.5).rgb().string()};
  }
`

let Link = styled.a`
  text-decoration: none;
  ${linkStyles}
`
let EventButtonsWrap = styled.div`
  display: flex;

  /* style overrides for react-add-to-calendar */
  .react-add-to-calendar {
    margin-left: 10px;
  }
  .react-add-to-calendar__dropdown ul {
    padding-left: 0;
    li {
      padding: 4px;
    }
  }
  .react-add-to-calendar__button {
    border: none;
    background-color: transparent;
    ${linkStyles}
  }
`

export default ({ event }) => {
  let meetupName, description, url

  switch (event.organizer.displayName) {
  case `NodeSchool Toronto`:
    meetupName = `NodeSchool`
    description = event.description
    url = `http://nodeschool.io/toronto/`
    break
  case `One-Off JavaScript Events in Toronto`:
    [, url, meetupName, ...description] = event.description.split(`\n`)
    break
  default:
    [meetupName,,, description,, url] = event.description.split(`\n`)
  }

  let startDate = new Date(event.start.dateTime)

  let day = DAYS_OF_WEEK[startDate.getDay()]
  let month = MONTHS[startDate.getMonth()]
  let date = startDate.getDate()
  let hours = startDate.getHours() % 12
  let minutes = startDate.getMinutes()
  let AMPM = startDate.getHours() < 12 ? `AM` : `PM`

  if (minutes <= 10) {
    minutes = `0${minutes}`
  }

  let displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`

  let addToCalendarEvent = {
    title: event.summary,
    description: event.description,
    location: event.location,
    startTime: startDate,
    endTime: new Date(event.end.datetime),
  }

  return (
    <div>
      <h4>{meetupName} - {event.summary}</h4>
      <p>{displayStartDate}</p>
      <p>{event.location}</p>
      <p>{description}</p>
      <EventButtonsWrap>
        <Link href={url} target="_blank">
          Event Details
        </Link>
        <AddToCalendar event={addToCalendarEvent} buttonTemplate={{ textOnly: true }} />
      </EventButtonsWrap>
    </div>
  )
}
