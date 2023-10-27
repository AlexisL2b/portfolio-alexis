import React, { useState } from "react"
import { styled } from "styled-components"
import Home from "../sections/home/Home"
import Menu from "../menu/menu-sidebar-right/MenuRight"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AboutMe from "../sections/about-me/AboutMe"
import Resume from "../sections/resume/Resume"
import SkillsSet from "../sections/skillset/SkillsSet"
import Project from "../sections/project/Project"
import Contact from "../sections/contact/Contact"
import FirstPageContext from "./FirstPageContext"

export default function FirstPage() {
  const [section, setSection] = useState("")

  const FirstPageValue = { section, setSection }

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
        <CSSTransition
          appear={true}
          classNames={"puff-in-center"}
          timeout={700}
          in={section === "contact" ? true : false}
          unmountOnExit
        >
          <Contact />
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
  align-items: center;
  flex-direction: column;

  .puff-in-center-appear {
    transform: translateY(100%);
  }

  .puff-in-center-appear-active {
    transform: translateY(0%);
    transition: 0.5s;
  }
  .puff-in-center-enter {
    transform: translateY(100%);
  }
  .puff-in-center-enter-active {
    transform: translateY(0%);
    transition: 0.5s;
  }
  .puff-in-center-enter-done {
    transform: translateY(0%);
    transition: 0.5s;
  }

  .puff-in-center-exit {
    position: absolute;
    transform: translateY(0%);
    opacity: 1;
    bottom: 0;
    align-self: center;
    justify-self: center;
    right: 0;
  }
  .puff-in-center-exit-active {
    transform: translateY(-200%);

    opacity: 0;
    transition: 0.5s;
  }
  /* .puff-in-center-exit-done {
    transform: translateY(-1000px);
    opacity: 0;
    transition: 5s;
  } */
  @media (max-width: 970px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 375px) {
  }
`
