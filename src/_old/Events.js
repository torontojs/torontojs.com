// Deprecated

import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

let SectionTitle = styled.div`
  font-family: ${theme.fancyFont};
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`

const Events = () => (

  <div>
    <SectionTitle>
      UPCOMING EVENTS
    </SectionTitle>


    <div id="guild-presentations-latest" style={{ maxWidth: 400 }} />
    <hr />

    <div id="guild-presentations-upcoming" style={{ maxWidth: 400 }} />
  </div>
)

export default Events