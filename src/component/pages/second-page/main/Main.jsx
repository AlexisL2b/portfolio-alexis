import React from "react"
import { css, styled } from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function CasinoEffect({ count, className, component }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition
        appear={true}
        classNames={"count-animated"}
        timeout={5000}
        key={count}
      >
        {component}
      </CSSTransition>
    </TransitionGroup>
  )
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    display: inline-block;
  }
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 2s;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    filter: blur(1px);
    bottom: 0;
    right: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-150%);
    transition: 2s;
  }
`

// }
// const MainStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   padding: 15px 100px;
//   overflow: hidden;
//   overflow-y: scroll;
//   /* scrollbar-width: none; */
//   gap: 250px;
// `
