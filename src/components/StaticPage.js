import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { css } from 'glamor'
import Splash from './Splash'

class StaticPage extends Component {
  constructor (props) {
    super(props)
    
    let page = ``

    // Lets not allow people to browse the file system,
    //  only use the word in the path
    //
    // props.params is an Object... but has array like
    //  keys (0, 1, etc) very weird way to parse params, 
    //  I dont think I'm doing this correctly
    if (props.match && 
      props.match.params && 
      props.match.params.hasOwnProperty(`page`)) {
      
      let buffer = props.match.params.page.match(/\w+/g)
      
      if (buffer.length > 0) {
        page = buffer[0]
      } else {
        // Or error out?
        this.state.history.replace({ pathname: `/404` })
      }
    }
 
    this.state = {
      page,
      content: ``,
      history: props.history || {},
    }  
  }

  componentDidMount () {
    // Make request to get the data
    fetch(`/${this.state.page}.md`)
      .then((response) => response.text())
      .then((data) => {
        // Hack to work around react-router inability to send 404 status
        // code for 404s. If we see a <head> tag in the response, its probably
        // not Markdown...
        if (data.match(/<head>/g)) {
          throw new Error(`404 Not Found`)
        }

        // Update the state with the content so we re-render
        this.setState({ content: data })
      })
      .catch(() => {
        const { history } = this.state
        // Or error out?
        history.replace({ pathname: `/404` })
      })
  }

  render () {
    const { content } = this.state

    return (
      <div>
        <Splash />
        <div className={page}>
          <ReactMarkdown source={content} />
        </div>
      </div>
    )
  }
}

const page = css({
  padding: `20px`,
  maxWidth: `750px`,
  margin: `0 auto`,
})

export default StaticPage
