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
  constructor: ->
    super arguments...
    @state =
      empty: false

  @defaultProps:
    guild: 'torontojs'
    when: 'UPCOMING' # or PAST

  componentDidMount: ->
    window.$guild.renderGuildEventList @ref.current, @props.guild, @props.when, itemsDisplayed: (numItems)=>
      @setState empty: !numItems

  render: ->
    return <div className="empty">No {@props.when.toLowerCase()} events</div> if @state.empty
    super arguments...
