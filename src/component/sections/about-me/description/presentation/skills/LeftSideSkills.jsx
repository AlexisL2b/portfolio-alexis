import React from "react"
import { getTechIcon } from "../skillsConfig"
import { styled } from "styled-components"
import Tech from "../Tech"

export default function LeftSideSkills({ onClick, selected }) {
  const techIcons = getTechIcon()

  return (
    <LeftSideSkillsStyled selected={selected}>
      {techIcons.map((icon) => (
        <Tech key={icon.id} src={icon.src} alt={icon.alt} onClick={onClick} />
      ))}
    </LeftSideSkillsStyled>
  )
}
const LeftSideSkillsStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  .icon {
    cursor: pointer;
    height: 130px;
    width: 130px;
    object-fit: contain;
    filter: grayscale(70%);
    opacity: 60%;
    &:hover {
      transition: 300ms;
      filter: grayscale(0%);
      opacity: 100%;
    }
    /* &:active {
    filter: grayscale(0%);
    opacity: 100%;
  } */
  }
  .${(props) => props.selected} {
    filter: grayscale(0%);
    opacity: 100%;
  }
`
