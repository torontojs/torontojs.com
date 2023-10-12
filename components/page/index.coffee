import React from 'react'

import Navbar from '/components/navbar'
import Footer from '/components/footer'

import './styles.sass'

export default \
class Page extends React.Component
  render: ->
    <div className="Page">
      <Navbar />
      <div
        className="content"
        dangerouslySetInnerHTML={{__html: @props.content}}
      />
      <Footer />
    </div>
