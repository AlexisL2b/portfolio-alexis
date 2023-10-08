import React from "react"
import { styled } from "styled-components"

export default function RightSideHome() {
  return (
    <RightSideHomeStyled>
      <img
        src="https://davidferriere.com/wp-content/uploads/2017/04/20170425_PORTRAIT_CV_PRO_RENNES-001.jpg"
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
