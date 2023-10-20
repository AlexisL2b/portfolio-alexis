import React, { useState } from "react"
import { styled } from "styled-components"
import LeftSideSkills from "./LeftSideSkills"
import RightSideSkills from "./RightSideSkills"
import { TransitionGroup } from "react-transition-group"

export default function Skills() {
  const [isSelected, setIsSelected] = useState("")
  const [isSelectedLibrary, setIsSelectedLibrary] = useState("")

  const onClick = (e) => {
    setIsSelected(e.currentTarget.alt)
    setIsSelectedLibrary("")
    console.log(isSelected)
  }
  const onClickLibrary = (e) => {
    setIsSelectedLibrary(e.currentTarget.alt)
    console.log(isSelectedLibrary)
  }

  return (
    <SkillsStyled selected={isSelected} className="skills">
      <LeftSideSkills selected={isSelected} onClick={onClick} />

      <RightSideSkills
        onClick={onClickLibrary}
        tech={isSelected}
        library={isSelectedLibrary}
      />
    </SkillsStyled>
  )
}
const SkillsStyled = styled.div`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-columns: 1fr 2fr;
  /////
  width: 1240px;
  height: 620px;
`
