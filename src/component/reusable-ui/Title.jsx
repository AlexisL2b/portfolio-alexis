import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"

export default function Title({ label }) {
  return <TitleStyled>{label}</TitleStyled>
}

const TitleStyled = styled.div`
  /* align-items: center;
  justify-content: center; */
  padding: 20px 0px;
  border: dotted black 3px;
  text-align: center;
  font-size: 64px;
  font-weight: 900;
  font-family: ${theme.fonts.anton};
`
