import { useEffect, useRef } from "react"

# AnimatedCircle Component
AnimatedCircle = ({ cx, cy, r, offset }) ->
  circleRef = useRef(null)
  hueRef = useRef(0)

  animateHue = ->
    # Increment the hue value and loop it back to 0 when it reaches 360
    hueRef.current = (hueRef.current + 1) % 360

    # Set the fill color of the circle using HSL
    circleRef.current?.style.fill = "hsl(#{hueRef.current + offset}, 100%, 50%)"

    # Request the next frame to continue the animation
    requestAnimationFrame(animateHue)

  useEffect ->
    # Start the animation when the component mounts
    animateHue()

    # Cleanup the animation when the component unmounts
    -> cancelAnimationFrame(animateHue)

  <>
    # Glow Filter
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="500%" height="500%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurred" />
        <feMerge>
          <feMergeNode in="blurred" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    # Animated Circle with Glow Filter
    <circle
      ref={circleRef}
      cx={cx}
      cy={cy}
      r={r}
      fill="hsl(0, 100%, 50%)"
      filter="url(#glow)"
    />
  </>

# CNTower Component
export default CNTower = ({ afterDark = false })->
  <svg
    className="cn-tower"
    viewBox="0 0 199 199.333"
    width="199"
    height="199.333"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#9B9BA9" cx="40.112" cy="64.434" r="16.563" />
    <path
      fill="#FFF"
      d="M39.413 40.338c-12.225 0-22.135 9.61-22.135 21.465s9.91 21.464 22.135 21.464 22.136-9.61 22.136-21.464-9.91-21.465-22.136-21.465zm.67 42.393c-10.075 0-18.244-8.169-18.244-18.245 0-10.077 8.169-18.245 18.245-18.245s18.245 8.168 18.245 18.245c0 10.076-8.169 18.245-18.245 18.245z"
    />
    <path
      fill="#9B9BA9"
      d="M28.715 31.154c.552-3.306 3.763-5.523 7.171-4.953a6.305 6.305 0 0 1 4.568 3.29c-.3-2.647-2.373-4.902-5.209-5.376-3.408-.57-6.619 1.648-7.171 4.953a5.91 5.91 0 0 0 .603 3.725 5.887 5.887 0 0 1 .038-1.64z"
    />
    <path fill="#BCB9CD" d="m33.254 27.654 1.22 5.61-4.147 1.22-.244-3.903z" />
    <path fill="#9B9BA9" d="m33.254 27.654 4.879.976 1.22 4.39-5.164.57z" />
    <path
      fill="#BCB9CD"
      d="M16.058 59.77c0-12.508 10.456-22.647 23.355-22.647 10.355 0 19.13 6.537 22.191 15.585-1.439-11.17-11.258-19.813-23.167-19.813-12.898 0-23.355 10.14-23.355 22.647 0 2.467.413 4.839 1.165 7.062a22.149 22.149 0 0 1-.189-2.834z"
    />
    <path
      fill="#D3D3E3"
      d="m33 62.083 25.667 206.084-30.291.56s6.457-186.435 3.577-200.989L33 62.083z"
    />
    <path
      fill="#BCB9CD"
      d="m40.084 56.68-2.277.65-4.878 4.88 24.067 205.866 12.85.286.006.04h18.04z"
    />
    <path
      fill="#9B9BA9"
      d="m40.084 56.68 7.48 3.903s23.741 102.77 57.565 208.469H87.892L40.084 56.68z"
    />
    <path
      fill="#FFF"
      d="m29.372 20.113.366 4.512s.914-.792 2.768-1.219c2.114-.486 3.39.244 3.39.244l-.98-4.268s-.544-1.952-3.349-1.464c-2.424.421-2.195 2.195-2.195 2.195z"
    />
    <path
      fill="#FFF"
      d="M29.536 18.683c.26-.479.81-.99 1.97-1.192 1.376-.24 2.205.109 2.696.525l-.316-1.373s-.438-1.574-2.699-1.18c-1.953.339-1.77 1.768-1.77 1.768l.119 1.452zM30.365 15.436c.11-.203.343-.42.836-.506.584-.102.936.046 1.144.223l-.265-1.665s-.186-.668-1.146-.501c-.829.144-.75.75-.75.75l.18 1.699zM30.134 12.703c.087-.159.269-.329.654-.395.456-.08.732.036.894.174l-.207-1.496s-.146-.522-.896-.392c-.648.113-.587.587-.587.587l.142 1.522z"
    />
    {afterDark && <>
      <AnimatedCircle cx={16.7} cy={64} r={0.7} offset={0} />
      <AnimatedCircle cx={16.5} cy={60} r={1} offset={8} />
      <AnimatedCircle cx={16.7} cy={56} r={1.2} offset={16} />
      <AnimatedCircle cx={17.8} cy={52} r={1.3} offset={24} />
      <AnimatedCircle cx={20.3} cy={48} r={1.4} offset={32} />
      <AnimatedCircle cx={23.4} cy={45} r={1.5} offset={40} />
      <AnimatedCircle cx={27} cy={42.2} r={1.6} offset={48} />
      <AnimatedCircle cx={31} cy={40.4} r={1.7} offset={56} />
      <AnimatedCircle cx={35.4} cy={39} r={1.8} offset={64} />
      <AnimatedCircle cx={40.1} cy={38.5} r={1.76} offset={72} />
      <AnimatedCircle cx={44.8} cy={39} r={1.68} offset={80} />
      <AnimatedCircle cx={49.5} cy={40.5} r={1.6} offset={88} />
      <AnimatedCircle cx={53.2} cy={43.5} r={1.52} offset={96} />
      <AnimatedCircle cx={56.9} cy={47} r={1.4} offset={104} />
      <AnimatedCircle cx={59.6} cy={50.9} r={1.2} offset={112} />
    </>}
  </svg>
