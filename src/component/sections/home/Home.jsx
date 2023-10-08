import React from "react"
import { styled } from "styled-components"
import LeftSideHome from "./leftside/LeftSideHome"
import RightSideHome from "./rightside/RightSideHome"

export default function Home() {
  return (
    <HomeStyled>
      <LeftSideHome /> <RightSideHome />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
