import React, { useState } from "react"
import { styled } from "styled-components"
import Home from "../sections/home/Home"
import Menu from "../menu/menu-sidebar-right/MenuRight"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AboutMe from "../sections/about-me/AboutMe"
import Resume from "../sections/resume/Resume"
import FirstPageContext from "./FirstPageContext"
import Skills from "../sections/about-me/description/presentation/skills/Skills"
import CircularProgressBar from "../reusable-ui/CircularProgressBar"
import CasinoEffect from "./second-page/main/Main"
import Carousel from "../sections/Carousel"
import SkillsSet from "../sections/about-me/description/presentation/skills/SkillsSet"
import Project from "../sections/project/Project"

export default function FirstPage() {
  const [section, setSection] = useState("")
  const [showModal, setShowModal] = useState("")

  const FirstPageValue = { section, setSection, showModal, setShowModal }

  return (
    <TransitionGroup component={FirstPageStyled}>
      <FirstPageContext.Provider value={FirstPageValue}>
        <Menu />
        {section === "" && (
          <CSSTransition
            appear={true}
            classNames={"puff-in-center"}
            timeout={700}
            in={section === "" ? true : false}
          >
            <Home />
          </CSSTransition>
        )}
        <CSSTransition
          appear={true}
          classNames={"puff-in-center"}
          timeout={700}
          in={section === "aboutme" ? true : false}
          unmountOnExit
        >
          <AboutMe />
        </CSSTransition>
        <CSSTransition
          appear={true}
          classNames={"puff-in-center"}
          timeout={700}
          in={section === "resume" ? true : false}
          unmountOnExit
        >
          <Resume />
        </CSSTransition>
        <CSSTransition
          appear={true}
          classNames={"puff-in-center"}
          timeout={700}
          in={section === "skills" ? true : false}
          unmountOnExit
        >
          <SkillsSet />
        </CSSTransition>
        <CSSTransition
          appear={true}
          classNames={"puff-in-center"}
          timeout={700}
          in={section === "project" ? true : false}
          unmountOnExit
        >
          <Project />
        </CSSTransition>
      </FirstPageContext.Provider>
    </TransitionGroup>
  )
}

const FirstPageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 80px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    background: url("src/assets/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .puff-in-center-appear {
    transform: translateY(100%);
  }

  .puff-in-center-appear-active {
    transform: translateY(0%);
    transition: 0.7s;
  }
  .puff-in-center-enter {
    transform: translateY(100%);
  }
  .puff-in-center-enter-active {
    transform: translateY(0%);
    transition: 0.7s;
  }
  .puff-in-center-enter-done {
    transform: translateY(0%);
    transition: 0.7s;
  }

  .puff-in-center-exit {
    position: absolute;
    transform: translateY(0);
    opacity: 1;
  }
  .puff-in-center-exit-active {
    transform: translateY(-1000px);
    opacity: 0;
    transition: 0.7s;
  }
`
