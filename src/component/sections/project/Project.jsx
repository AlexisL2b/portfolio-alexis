import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import Carousel from "../Carousel/"

export default function Project() {
  return (
    <ProjectStyled>
      <Title
        labelprimary={"MY"}
        labelsecondary={" PORTFOLIO"}
        className={"puff-in-center "}
        undertitle={"PROJECTS"}
      />
      <Carousel />
    </ProjectStyled>
  )
}
const ProjectStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 6fr;
  place-items: center;
  color: white;
  width: 100%;
`
