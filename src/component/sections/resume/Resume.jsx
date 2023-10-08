import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import ResumeDesc from "./ResumeDesc"

export default function Resume() {
  return (
    <ResumeStyled>
      <Title label={"RESUME"} />
      <ResumeDesc />
    </ResumeStyled>
  )
}
const ResumeStyled = styled.div`
  height: 1180px;
  height: 1180px;
  display: grid;
  grid-template-rows: 1fr 4fr;
`
