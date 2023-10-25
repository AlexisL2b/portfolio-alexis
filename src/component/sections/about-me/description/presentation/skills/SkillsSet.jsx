import React from "react"
import { styled } from "styled-components"
import Title from "../../../../../reusable-ui/Title"
import Skills from "./Skills"

export default function SkillsSet() {
  return (
    <SkillsSetStyled>
      <Title
        labelprimary={"MY"}
        labelsecondary={" SKILLS"}
        className={"puff-in-center "}
        undertitle={"STACK"}
      />
      <Skills />
    </SkillsSetStyled>
  )
}

const SkillsSetStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr;
  place-items: center;
  color: white;
  width: 100%;
  @media (max-width: 970px) {
  }
  @media (max-width: 768px) {
    place-items: center;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 375px) {
  }
`
