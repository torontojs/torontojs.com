import styled from "styled-components"
import theme from "../theme"

export const Container = styled.div`
  height: auto;
  background-color: ${(props) => props.backgroundColor || theme.primary};
  position: relative;
  z-index: 1;
`

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 996px;
  padding: 1rem 2rem;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fancyFont};
  color: white;
  padding: 100px 0 25px;
  z-index: 1;
  position: relative;
  letter-spacing: .25rem;
`
