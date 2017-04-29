import React from 'react'
import styled from 'styled-components'
import Splash from './Splash'

const Page = styled.section`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`

let ErrorPage = () => (
  <div>
    <Splash />
    <Page>
      <p>Uh oh! Something went wrong.</p>
      <p>[Insert witty gif here]</p>
    </Page>
  </div>
)

export default ErrorPage
