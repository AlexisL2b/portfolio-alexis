import React, { useState } from "react"
import { styled } from "styled-components"
import CircularProgressBar from "../../reusable-ui/CircularProgressBar"

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
      <CircularProgressBar
        tech={"html"}
        color={"#f75421"}
        percentage={"90"}
        img={"src/assets/html.png"}
      />
      <CircularProgressBar
        tech={"CSS"}
        color={"#2862e9"}
        percentage={"90"}
        img={"src/assets/css.png"}
      />
      <CircularProgressBar
        tech={"JavaScript"}
        color={"#f7d701"}
        percentage={"70"}
        img={"src/assets/javascript.png"}
      />
      <CircularProgressBar
        tech={"Php"}
        color={"#959bc0"}
        percentage={"70"}
        img={"src/assets/php.png"}
      />
      <CircularProgressBar
        tech={"React"}
        color={"#5ed3f3"}
        percentage={"70"}
        img={"src/assets/react.png"}
      />
      <CircularProgressBar
        tech={"jquery"}
        color={"#0865a6"}
        percentage={"80"}
        img={"src/assets/jquery.png"}
      />
      <CircularProgressBar
        tech={"styled-component"}
        color={"#ef85c6"}
        percentage={"90"}
        img={"src/assets/styled-components.png"}
      />
      <CircularProgressBar
        tech={"wordpress"}
        color={"#00769d"}
        percentage={"65"}
        img={"src/assets/wordpress.png"}
      />
      <CircularProgressBar
        tech={"joomla"}
        color={"#76bb41"}
        percentage={"50"}
        img={"src/assets/joomla_logo_icon_170506.png"}
      />
      <CircularProgressBar
        tech={"git"}
        color={"#f05033"}
        percentage={"85"}
        img={"src/assets/Git-Icon-1788C.png"}
      />
    </SkillsStyled>
  )
}
const SkillsStyled = styled.div`
  padding: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background: #282828;
  box-shadow: 12px 12px 24px #282828, -12px -12px 24px #3f3f3f;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 70%;
  height: 620px;
  align-self: center;
  justify-self: center;
  margin-top: 50px;
  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    width: 100%;
    height: 1240px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 1240px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 1240px;
    padding: 20px;
    align-self: center;
    justify-self: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    padding: 20px;
    align-self: flex-start;
    justify-self: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
`
