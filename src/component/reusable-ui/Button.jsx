import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../theme"

export default function Button({ version, label }) {
  return <ButtonStyled version={version}>{label}</ButtonStyled>
}
const ButtonStyled = styled.button`
  padding: 12px 8px;
  display: inline-block;
  text-align: center;
  ${({ version }) => extraStyle[version]}
`
const primaryRounded = css`
  background-color: #ffba31;
  border: none;
  border-radius: 20px;
  font-family: ${theme.fonts.anton};
  font-weight: 900;
  text-align: center;
  color: white;
  cursor: pointer;
`
const extraStyle = {
  primaryRounded,
}
