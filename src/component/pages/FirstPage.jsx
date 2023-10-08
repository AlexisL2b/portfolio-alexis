import React from "react"
import { styled } from "styled-components"
import Home from "../sections/home/Home"
import Menu from "../menu/menu-sidebar-right/MenuRight"

export default function FirstPage() {
  return (
    <FirstPageStyled>
      <Menu />
      <Home />
    </FirstPageStyled>
  )
}
const FirstPageStyled = styled.div`
  position: relative;
  background-color: #dddddd;

  width: 100%;
  height: 100vh;
`
