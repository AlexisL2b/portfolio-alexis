import React from "react"
import { styled } from "styled-components"
import Title from "../../../reusable-ui/Title"
import AboutMe from "../../../sections/about-me/AboutMe"

export default function Main() {
  return (
    <MainStyled>
      <AboutMe />
    </MainStyled>
  )
}
const MainStyled = styled.div`
  flex: 1;
  padding: 50px 100px;
`
