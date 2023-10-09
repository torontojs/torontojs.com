// @flow
import React from "react"
import theme from "../theme"

import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export default function Splash({
  backgroundColor,
  title,
  children,
}) {

  return (
    <div>
      <NavBar backgroundColor={theme.primary} />
      <Header backgroundColor={backgroundColor} title={title} />

      {/* Main Content Section */}

      {children}
      {/* Footer */}
      <Footer />
    </div >
  )
}
