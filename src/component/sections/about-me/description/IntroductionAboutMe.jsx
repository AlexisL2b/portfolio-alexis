import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { animations } from "../../../../theme/animations"

export default function IntroductionAboutMe() {
  return (
    <TransitionGroup component={IntroductionAboutMeStyled}>
      {/* <CSSTransition
        in={true}
        appear={true}
        classNames={"title-animated"}
        timeout={1400}
      > */}
      <span className="title">
        Je m'appelle <div className="firstname"> Alexis Luigi, </div>
        je suis développeur Web junior!
      </span>
      {/* </CSSTransition> */}
      {/* <CSSTransition
        in={true}
        appear={true}
        classNames={"content-animated"}
        timeout={1400}
      >
        <p className="content-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          sapiente minima deleniti modi cupiditate sint magnam consequatur
          doloribus voluptates sed, amet odit ipsum obcaecati corporis quod, in
          quia. Ab nisi doloribus earum porro minus praesentium dolore facilis
          aliquam molestiae quaerat consectetur sunt distinctio eius,
          repellendus quos debitis animi eaque sit! doloribus voluptates sed,
          amet odit ipsum obcaecati corporis quod, in quia. Ab nisi doloribus
          earum porro minus praesentium dolore facilis aliquam molestiae quaerat
        </p>
      </CSSTransition> */}
    </TransitionGroup>
  )
}
const IntroductionAboutMeStyled = styled.div`
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  .title {
    display: flex;
    font-family: ${theme.fonts.anton};
    font-size: 40px;

    .firstname {
      /* text-align: center; */
      font-weight: 900;
      text-align: center;
      margin: -9px 5px;
      color: #ffba31;
    }
  }
  .content-p {
    font-size: 16px;
  }
  ${animations.introContent}
  ${animations.introTitle}
`
