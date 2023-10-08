import React from "react"
import { styled } from "styled-components"
import Title from "../../../reusable-ui/Title"
import AboutMe from "../../../sections/about-me/AboutMe"
import Resume from "../../../sections/resume/Resume"

export default function Main() {
  return (
    <MainStyled>
      <AboutMe />
      <Resume />
    </MainStyled>
  )
}
const MainStyled = styled.div`
  flex: 1;
  padding: 50px 100px;
  overflow: hidden;
  overflow-y: scroll;
`
