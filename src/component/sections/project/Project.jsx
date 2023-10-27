import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import Carousel from "./Carousel"

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
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 100%;
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
