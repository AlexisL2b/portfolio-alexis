import React, { useState } from "react"
import { styled } from "styled-components"
import { getDeepClone } from "../../../../../utils/window"
import { getTechIcon } from "./skillsConfig"
import JsLibrary from "./JsLibrary"
import Tech from "./Tech"

export default function Skills() {
  const [isSelected, setIsSelected] = useState("")
  const [isSelectedLibrary, setIsSelectedLibrary] = useState("")

  const onClick = (e) => {
    // const copyIsSelected = getDeepClone(isSelected)
    // copyIsSelected.splice(0, copyIsSelected.length)
    // copyIsSelected.push(e.currentTarget.alt)
    setIsSelected(e.currentTarget.alt)
    setIsSelectedLibrary("")
    console.log(isSelected)
  }
  const onClickLibrary = (e) => {
    setIsSelectedLibrary(e.currentTarget.alt)

    console.log(isSelectedLibrary)
  }
  const techIcons = getTechIcon()

  return (
    <SkillsStyled selected={isSelected}>
      <div className="left_side">
        {techIcons.map((icon) => (
          <Tech
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            onClick={(e) => onClick(e)}
          />
        ))}
        {/* <Tech
          onClick={onClick}
          selected={isSelected}
          version={isSelected ? "selected" : ""}
        /> */}
      </div>
      <div className="right_side">
        <div className="library">
          {isSelected === "js" ? <JsLibrary onClick={onClickLibrary} /> : null}
          {isSelected === "html" ? <div className="rouge">aa</div> : null}
        </div>
        <div className="desc_library">
          {isSelectedLibrary === "react" ? (
            <span>reaaaaaaaaaaaaaaaact</span>
          ) : null}
          {isSelectedLibrary === "calendar" ? (
            <span>calendaaaaaaaaaaaaaaaaaaaaar</span>
          ) : null}
          {isSelectedLibrary === "jquerry" ? <span>jquerry</span> : null}
          {isSelected === "html" ? <span>html</span> : null}
        </div>
      </div>
    </SkillsStyled>
  )
}
const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* background-color: black; */
  .js_library {
    display: flex;
    gap: 15px;
  }
  .icon_library {
    height: 96px;
    width: 96px;
  }
  .left_side {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    place-content: center;
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
  }
  .right_side {
    display: grid;
    grid-template-rows: 2fr 4fr;
    .library {
      border: 1px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon_library {
        border-radius: 30%;
        transition: transform 300ms ease;
        cursor: pointer;
        &:hover {
          transform: translateY(-10px);
        }
      }
      .jaune {
        background: yellow;
      }
      .rouge {
        background: red;
      }
    }
    .desc_library {
      border: 1px solid blue;
      color: white;
    }
  }
`
