import React from "react"
import { styled } from "styled-components"

export default function RightSideHome() {
  return (
    <RightSideHomeStyled>
      <img
        src="src\assets\men-face-black-monochrome-portrait-actor-222773-wallhere.com.jpg"
        alt=""
      />
    </RightSideHomeStyled>
  )
}
const RightSideHomeStyled = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
