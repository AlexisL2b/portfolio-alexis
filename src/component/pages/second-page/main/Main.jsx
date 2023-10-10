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
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 100px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  gap: 250px;
`
