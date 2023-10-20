import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { styled } from "styled-components"

export default function RightSideHome() {
  return (
    <TransitionGroup component={RightSideHomeStyled}>
      {/* <CSSTransition
        appear={true}
        timeout={1000} // La durée de votre animation en ms
        classNames="text-focus-in"
      >
        <img
          src="src\assets\Naked_technologycodingprojectTransparent_background_4e9cdd0d-c102-4d95-abfc-3a57fb984e76-removebg-preview.png"
          alt=""
        />
      </CSSTransition> */}
    </TransitionGroup>
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
    opacity: 0.5;
  }
  .text-focus-in-appear {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  .text-focus-in-appear-active {
    transition: 1000ms;
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
`
