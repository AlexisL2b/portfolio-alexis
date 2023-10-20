import React from "react"
import FirstPage from "./component/pages/FirstPage"
import { styled } from "styled-components"
import SecondPage from "./component/pages/second-page/SecondPage"
import Menu from "./component/menu/menu-sidebar-right/MenuRight"
import { CSSTransition } from "react-transition-group"

export default function App() {
  return (
    <AppStyled>
      {/* <CSSTransition
        in={true}
        appear={true}
        timeout={700}
        classNames="slide-in-blurred-right"
      >
        <Menu />
      </CSSTransition> */}

      <FirstPage />
      {/* <SecondPage /> */}
    </AppStyled>
  )
}
const AppStyled = styled.div`
  .slide-in-blurred-right-appear {
    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  .slide-in-blurred-right-appear-active {
    transition: 700ms;
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  scrollbar-width: none;
`
