import React from "react"
import { styled } from "styled-components"
import Menu from "../menu/menu-sidebar-right/MenuRight"

export default function SecondPage() {
  return (
    <SecondPageStyled>
      <Menu />
    </SecondPageStyled>
  )
}

const SecondPageStyled = styled.div`
  position: relative;
  background-color: #dddddd;
  width: 100%;
  height: 100vh;
`
