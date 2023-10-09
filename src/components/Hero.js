import React from "react"
import { Container } from "./Container"

export const Hero = ({ backgroundColor, children }) => {
  return (
    <Container backgroundColor={backgroundColor} style={{ height: `80vh` }}>
      {children}
    </Container>
  )
}