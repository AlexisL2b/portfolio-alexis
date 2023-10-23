import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../theme"

export default function LabelPost({ version, label }) {
  return <LabelPostStyled version={version}>{label}</LabelPostStyled>
}
const LabelPostStyled = styled.div`
  padding: 4px 8px;
  display: inline-block;

  white-space: nowrap;

  ${({ version }) => extraStyle[version]}
`
const primary = css`
  background-color: #ffba31;
  font-family: ${theme.fonts.anton};
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0px;
  border-radius: 2px;
  text-align: center;
  justify-content: center;
`
const secondary = css`
  background-color: #ffba31;
  font-family: ${theme.fonts.anton};
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0px;
  border-radius: 2px;
  color: white;
  text-align: center;
  justify-content: center;
`
const secondarySmall = css`
  background-color: #ffba31;
  font-family: ${theme.fonts.anton};
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0px;
  border-radius: 10px;
  color: white;
  text-align: center;
  justify-content: center;
  width: 40%;
`

const extraStyle = {
  primary,
  secondary,
  secondarySmall,
}
