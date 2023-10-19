import React from "react"
import { styled } from "styled-components"
import MenuLeft from "../../menu/menu-sidebar-left/MenuLeft"
import Menu from "../../menu/menu-sidebar-right/MenuRight"
import Main from "./main/Main"

export default function SecondPage() {
  return (
    <SecondPageStyled>
      <MenuLeft />
      <Main />
    </SecondPageStyled>
  )
}

const SecondPageStyled = styled.div`
  display: flex;
  position: relative;
  background-color: #dddddd;
  width: 100%;
  height: 100vh;
`
