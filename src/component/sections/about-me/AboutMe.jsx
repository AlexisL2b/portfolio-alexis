import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import DescriptionAboutMe from "./description/DescriptionAboutMe"

export default function AboutMe() {
  return (
    <AboutMeStyled>
      <Title label={"ABOUT ME"} />
      <DescriptionAboutMe />
    </AboutMeStyled>
  )
}
const AboutMeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
`
