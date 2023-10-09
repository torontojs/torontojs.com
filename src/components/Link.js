import styled from "styled-components"
import theme from '../theme'
/**
 * FIXME: naming: in fact just the legacy styled component in the Navbar
 */
export const Link = styled.a`
  color: white;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 350ms ease-in-out, color 0.2s ease;
  &:hover {
    color: rgb(255, 248, 84);
    background-color: rgb(238, 49, 36);
  }
`
/**
 * FIXME: legacy naming: in fact just targets text of link component in the Navbar
 */
export const LinkText = styled.span`
font-weight: bold;
padding: 0 0.25rem;
transition: color 0.2s ease;
@media (max-width: 767px) {
  display: none;
}
&:hover {
  text-decoration-style: wavy;
  animation: wavy 0.5s ease-in-out infinite;
}`

export const Anchor = styled.a`
color: ${theme.link}
text-decoration: none;
&:hover {
  text-decoration: underline
}`