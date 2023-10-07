import React from "react"
import { styled } from "styled-components"

export default function MenuButton({ icon }) {
  return (
    <MenuButtonStyled>
      <i>{icon}</i>
    </MenuButtonStyled>
  )
}
const MenuButtonStyled = styled.div`
  font-size: 24px;
  margin: 15px 0px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:active {
    color: black;
  }
`
