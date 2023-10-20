import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Skills from "./Skills"
import Resume from "./Resume"

export default function PresentationAboutMe() {
  return (
    <PresentationAboutMeStyled>
      <Skills />
      {/* <Resume /> */}
    </PresentationAboutMeStyled>
  )
}
const PresentationAboutMeStyled = styled.div`
  display: grid;
  /* grid-template-columns: 3fr 1fr; */
  column-gap: 20px;

  .resume {
  }
`
