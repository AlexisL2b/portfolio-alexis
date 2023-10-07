import React from "react"
import { styled } from "styled-components"
import Welcome from "./Welcome"
import { theme } from "../../../../../theme"

export default function LeftSideHome() {
  return (
    <LeftSideHomeStyled>
      <Welcome />
    </LeftSideHomeStyled>
  )
}

const LeftSideHomeStyled = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
