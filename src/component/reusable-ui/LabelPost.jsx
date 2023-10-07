import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../theme"

export default function LabelPost({ version, label }) {
  return <LabelPostStyled version={version}>{label}</LabelPostStyled>
}
const LabelPostStyled = styled.div`
  padding: 4px 8px;
  display: inline-block;
  text-align: center;

  ${({ version }) => extraStyle[version]}
`
const primary = css`
  background-color: #ffba31;
  font-family: ${theme.fonts.anton};
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0px;
  border-radius: 2px;
`

const extraStyle = {
  primary,
}
