import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import DescriptionAboutMe from "./DescriptionAboutMe"

export default function AboutMe() {
  return (
    <AboutMeStyled>
      <Title label={"ABOUT ME"} />
      <DescriptionAboutMe />
    </AboutMeStyled>
  )
}
const AboutMeStyled = styled.div`
  height: 1180px;
  height: 1180px;
  display: grid;
  grid-template-rows: 1fr 4fr;
`
