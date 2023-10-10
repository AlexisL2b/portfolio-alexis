import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Skills from "./Skills"
import Resume from "./Resume"

export default function PresentationAboutMe() {
  return (
    <PresentationAboutMeStyled>
      <Skills />
      <Resume />
    </PresentationAboutMeStyled>
  )
}
const PresentationAboutMeStyled = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 20px;

  .resume {
  }
`
