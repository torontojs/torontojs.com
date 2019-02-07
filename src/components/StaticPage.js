import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link as L } from 'react-router-dom'
import styled from 'styled-components'
import logo from './png/logo_circle.png'

const basePath = process.env.NODE_ENV === `development` ? ``
  : `https://raw.githubusercontent.com/torontojs/torontojs.com/gh-pages`

const Page = styled.section`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;

  & h2 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 100;
    padding-bottom: 40px;
  }
`

const Logo = styled.img`
  width: 55px;
  height: 55px;
  padding: 20px;
`

const Link = styled(L)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
`

const StaticPage = props => {
  const [content, setContent] = useState(``)

  useEffect(() => {
    async function fetchPage() {
      let data = await fetch(`${basePath}/pages/${props.match.params.page}.md`)
        .then((response) => response.text())

      if (data.match(/<head>/g)) {
        this.props.history.replace({ pathname: `/404` })
      } else {
        setContent(data)
      }
    }

    fetchPage()
  })

  return (
    <div>
      <div>
        <Link to="/">
          <Logo src={logo} />
          <span>BACK</span>
        </Link>
      </div>
      <Page>
        <ReactMarkdown source={content} />
      </Page>
    </div>
  )
}

export default StaticPage