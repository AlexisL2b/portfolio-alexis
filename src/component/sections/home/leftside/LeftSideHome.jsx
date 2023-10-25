import React from "react"
import { styled } from "styled-components"
import Welcome from "./Welcome"
import { theme } from "../../../../theme"

export default function LeftSideHome() {
  return (
    <LeftSideHomeStyled>
      <Welcome />
    </LeftSideHomeStyled>
  )
}

const LeftSideHomeStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
