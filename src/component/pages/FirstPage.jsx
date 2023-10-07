import React from "react"
import { styled } from "styled-components"
import Home from "./sections/home/Home"

export default function FirstPage() {
  return (
    <FirstPageStyled>
      <Home />
    </FirstPageStyled>
  )
}
const FirstPageStyled = styled.div`
  background-color: #dddddd;
  width: 100%;
  height: 100vh;
`
