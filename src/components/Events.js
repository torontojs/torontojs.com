import React from 'react'
import { lifecycle, withState, compose } from 'recompose'
import { css } from 'glamor'
import theme from '../theme'
import eventUrls from '../data/events'
import Event from './Event'

export default
compose(
  withState(`events`, `addEvent`, []),
  lifecycle({
    componentDidMount() {
      Object.values(eventUrls).map(async val => {
        let r = await fetch(val, { mode: `cors` })
        let { items } = await r.json()
        this.props.addEvent(s => [
          ...s,
          ...(items || []).filter(event =>
            event.organizer && +Date.now() < +new Date(event.end.dateTime)
          ).sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)),
        ])
      })
    },
  })
)
(({ events }) =>
  <div>
    <div className={sectionTitle}>
      UPCOMING EVENTS
    </div>
    <div className={card}>
      {events.map((e, i) =>
        <div key={e.id}>
          <Event event={e} />
          {i < events.length - 1 && <hr />}
        </div>
      )}
    </div>
  </div>
)

let sectionTitle = css({
  fontFamily: theme.fancyFont,
  letterSpacing: `2px`,
  display: `flex`,
  justifyContent: `center`,
  paddingTop: `35px`,
})

let card = css({
  padding: `20px`,
  maxWidth: `750px`,
  margin: `0 auto`,
})
