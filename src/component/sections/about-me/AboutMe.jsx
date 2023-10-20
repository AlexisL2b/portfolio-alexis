import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import DescriptionAboutMe from "./description/DescriptionAboutMe"
import { TransitionGroup } from "react-transition-group"
import IntroductionAboutMe from "./description/IntroductionAboutMe"
import Skills from "./description/presentation/skills/Skills"

export default function AboutMe({ className }) {
  return (
    <AboutMeStyled className={className}>
      <Title label={"ABOUT ME"} className={"puff-in-center "} />
      <IntroductionAboutMe />
      <Skills />
      {/* <DescriptionAboutMe className={"puff-in-center "} /> */}
    </AboutMeStyled>
  )
}
const AboutMeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
  place-items: center;
  color: white;
`
