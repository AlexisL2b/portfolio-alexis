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
`
