import React from "react"
import { styled } from "styled-components"
import LinksContainer from "./LinksContainer"

export default function MenuLeft() {
  return (
    <MenuLeftStyled>
      <div className="img">
        <img
          src="src\assets\men-face-black-monochrome-portrait-actor-222773-wallhere.com.jpg"
          alt=""
        />
      </div>
      <LinksContainer />
    </MenuLeftStyled>
  )
}
const MenuLeftStyled = styled.div`
  height: 100vh;
  width: 40vh;
  background-color: #ffba31;
  display: flex;
  flex-direction: column;
  .img {
    background-color: blue;
    height: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .links {
    height: 70%;
    background-color: red;
  }
`
