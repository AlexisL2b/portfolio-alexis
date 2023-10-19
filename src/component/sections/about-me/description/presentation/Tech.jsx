import React from "react"
import { css, styled } from "styled-components"
import { getTechIcon } from "./skillsConfig"

export default function Tech({ onClick, key, src, alt, version }) {
  return (
    <TechStyled key={key}>
      <img src={src} alt={alt} onClick={onClick} className={`icon ${alt}`} />
    </TechStyled>
  )
}
const TechStyled = styled.div`
  img {
    cursor: pointer;
    height: 130px;
    width: 130px;
    object-fit: contain;

    &:hover {
      transition: 300ms;
      filter: grayscale(0%);
      opacity: 100%;
    }
  }
  ${({ version }) => extraStyle[version]}
`

const selected = css`
  filter: grayscale(0%);
  opacity: 0%;
`
const unselected = css`
  filter: grayscale(70%);
  opacity: 60%;
`
const extraStyle = {
  selected,
  unselected,
}
