import styled from "styled-components"

export const Column = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    width: calc((100% / 2) - 1rem); /* 100% - (gap / 2) */
  }
`