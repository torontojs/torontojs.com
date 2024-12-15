import React from 'react'

export default \
class Guild extends React.Component
  constructor: ->
    super()
    @ref ||= React.createRef()

  render: ->
    <div
      className={@constructor.name}
      ref={@ref}
    />

export \
class GuildCard extends Guild
  @defaultProps:
    guild: 'torontojs'

  componentDidMount: ->
    window.$guild.renderGuildCard @ref.current, @props.guild

export \
class GuildList extends Guild
  @defaultProps:
    guild: 'torontojs'
    when: 'UPCOMING' # or PAST

  componentDidMount: ->
    window.$guild.renderGuildEventList @ref.current, @props.guild, @props.when, itemsDisplayed: (numItems)=>
      <div className="empty">No {@props.when.toLowerCase()} events</div> unless numItems
