import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Splash from './Splash'

const basePath = process.env.NODE_ENV === `development` ? ``
  : `https://raw.githubusercontent.com/torontojs/torontojs.com/gh-pages`

const Page = styled.section`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`

class StaticPage extends Component {
  state = { content: `` }

  async componentDidMount () {
    let data = await fetch(`${basePath}/${this.props.match.params.page}.md`)
      .then((response) => response.text())

    if (data.match(/<head>/g)) {
      this.props.history.replace({ pathname: `/404` })
    } else {
      this.setState({ content: data })
    }
  }

  render () {
    const { content } = this.state

    return (
      <div>
        <Splash />
        <Page>
          <ReactMarkdown source={content} />
        </Page>
      </div>
    )
  }
}

export default StaticPage
