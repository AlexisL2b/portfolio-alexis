import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"

export default function Title({ label }) {
  return <TitleStyled>{label}</TitleStyled>
}

const TitleStyled = styled.div`
  /* align-items: center;
  justify-content: center; */
  /* padding: 20px 0px; */
  text-align: center;
  font-size: 80px;
  font-weight: 900;
  width: 50%;
  font-family: ${theme.fonts.anton};
`
