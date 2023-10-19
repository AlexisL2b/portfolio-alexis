import React from "react"
import { styled } from "styled-components"
import Home from "../sections/home/Home"
import Menu from "../menu/menu-sidebar-right/MenuRight"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function FirstPage() {
  return (
    <FirstPageStyled>
      <Home />
    </FirstPageStyled>
  )
}

const FirstPageStyled = styled.div`
  position: relative;
  background-color: #dddddd;
  width: 100%;
  height: 100vh;

  .scale-in-center-appear {
    transform: scale(0);
    opacity: 0; /* j'ai changé l'opacité à 0 pour qu'il démarre de invisible */
  }

  .scale-in-center-appear-active {
    transition: transform 1000ms, opacity 1000ms; /* Préciser les propriétés */
    transform: scale(1);
    opacity: 1;
  }
`
