import React from "react"
import { styled } from "styled-components"
import IntroductionAboutMe from "./IntroductionAboutMe"
import PresentationAboutMe from "./presentation/PresentationAboutMe"

export default function DescriptionAboutMe() {
  return (
    <DescriptionAboutMeStyled>
      <IntroductionAboutMe />
      <PresentationAboutMe />
    </DescriptionAboutMeStyled>
  )
}
const DescriptionAboutMeStyled = styled.div`
  height: 100%;
  border: 1px solid red;
  /* margin: 20px 0px; */
  display: grid;
  grid-template-rows: 1fr 5fr;
  /* padding: 10px; */

  .presentation {
  }
`
