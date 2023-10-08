import React from "react"
import { css, styled } from "styled-components"

export default function Doted({ version }) {
  return (
    <DotedStyled version={version}>
      <p>|</p>
      <p>●</p>
      <p>●</p>
      <p>|</p>
    </DotedStyled>
  )
}
const DotedStyled = styled.div`
  ${({ version }) => extraStyle[version]}
`

const right = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5px;
`
const left = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin: 5px 0px;
`

const extraStyle = {
  left,
  right,
}
