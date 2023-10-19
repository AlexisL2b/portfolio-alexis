import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { styled } from "styled-components"

export default function RightSideHome() {
  return (
    <TransitionGroup component={RightSideHomeStyled}>
      <CSSTransition
        appear={true}
        timeout={1000} // La durée de votre animation en ms
        classNames="text-focus-in"
      >
        <img
          src="https://davidferriere.com/wp-content/uploads/2017/04/20170425_PORTRAIT_CV_PRO_RENNES-001.jpg"
          alt=""
        />
      </CSSTransition>
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
