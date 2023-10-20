import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../../reusable-ui/LabelPost"
import Button from "../../../reusable-ui/Button"
import { theme } from "../../../../theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function Welcome() {
  return (
    <TransitionGroup component={WelcomeStyled}>
      <CSSTransition
        appear={true}
        timeout={1000} // La durée de votre animation en ms
        classNames="text-focus-in"
      >
        <div>
          <span className="surtitle">BONJOUR!</span>
          <div className="presentation">
            JE SUIS <span className="firstname">ALEXIS</span>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const WelcomeStyled = styled.div`
  width: 550px;
  > * {
    margin: 5px 0px;
  }
  .surtitle {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 56px;
    color: #ffffff;
  }
  .presentation {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 56px;
    color: #ffffff;
    .firstname {
      font-family: "Big Shoulders Stencil Text", " cursive";
      font-weight: 900;
      font-size: 64px;
      color: #ffba31;
    }
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

  p {
    color: white;
  }
`
