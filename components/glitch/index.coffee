import React from 'react'

colors = "#b4b2b5 #dfd73f #6ed2dc #66cf5d #c542cb #d0535e #3733c9".split ' '

sleep = (ms)-> return new Promise (resolve)-> setTimeout resolve, ms

export default \
class Glitch extends React.Component
  @defaultProps:
    initialDelay: 0
    throttle: 0

  constructor: ->
    super arguments...
    @ref = React.createRef()

  render: ->
    <canvas ref={@ref}></canvas>

  componentDidMount: =>
    canvas = @ref.current
    ctx = canvas.getContext '2d'

    canvas.style = 'position: absolute; width: 100dvw; height: 100dvh;'

    await sleep @props.initialDelay
    do glitch = =>
      await sleep @props.throttle * Math.random()
      rAF = window.requestAnimationFrame glitch

      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect 0, 0, innerWidth, innerHeight

      ctx.shadowBlur = 0
      ctx.shadowColor = 'none'
      ctx.setTransform 1, 0, 0, 1, 0, 0

      for i in [0..100]
        # small light blocks
        ctx.fillStyle = "rgba(255, 255, 255, #{Math.random() * 0.03})"
        ctx.fillRect(
          Math.floor Math.random() * innerWidth
          Math.floor Math.random() * innerHeight
          Math.floor 1 + Math.random() * 30
          Math.floor 1 + Math.random() * 30
        )

        # small dark blocks
        ctx.fillStyle = "rgba(0, 0, 0, #{Math.random() * 0.04})"
        ctx.fillRect(
          Math.floor Math.random() * innerWidth
          Math.floor Math.random() * innerHeight
          Math.floor 1 + Math.random() * 25
          Math.floor 1 + Math.random() * 25
        )

      # big coloured blocks
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
      ctx.fillRect(
        Math.random() * innerWidth
        Math.random() * innerHeight
        Math.random() * innerWidth
        Math.random() * innerHeight
      )

      ctx.setTransform 1, 0, 0, .8, .2, 0
