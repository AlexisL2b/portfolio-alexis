import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import DescriptionAboutMe from "./description/DescriptionAboutMe"
import { TransitionGroup } from "react-transition-group"
import IntroductionAboutMe from "./description/IntroductionAboutMe"
import Skills from "./description/presentation/skills/Skills"
import SoftSkills from "./description/presentation/SoftSkills"

export default function AboutMe({ className }) {
  return (
    <AboutMeStyled className={className}>
      <Title
        labelprimary={"ABOUT"}
        labelsecondary={" ME"}
        className={"puff-in-center "}
        undertitle={"PROFILE"}
      />

      <div className="intro">
        <IntroductionAboutMe />
        <SoftSkills />
      </div>
    </AboutMeStyled>
  )
}
const AboutMeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
  place-items: center;
  color: white;
  align-items: flex-start;
  .intro {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    align-self: center;
  }
`
