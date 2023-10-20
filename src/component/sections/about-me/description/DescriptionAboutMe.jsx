import React from "react"
import { styled } from "styled-components"
import IntroductionAboutMe from "./IntroductionAboutMe"
import Skills from "./presentation/skills/Skills"

export default function DescriptionAboutMe() {
  return (
    <DescriptionAboutMeStyled>
      <IntroductionAboutMe />
      <Skills />
    </DescriptionAboutMeStyled>
  )
}
const DescriptionAboutMeStyled = styled.div`
  height: 100%;
  display: grid;

  .presentation {
  }
`
