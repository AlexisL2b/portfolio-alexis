import { css, keyframes } from "styled-components"

const introTitle = css`
  .title-animated-appear {
    transform: translateX(500px);
    opacity: 0%;
  }
  .title-animated-appear-active {
    transition: 1s;
    transform: translateX(0px);
    opacity: 100%;
  }
`
const introContent = css`
  .content-animated-appear {
    transform: translateX(-500px);
    opacity: 0%;
  }
  .content-animated-appear-active {
    transition: 1s;
    transform: translateX(0px);
    opacity: 100%;
  }
`
const welcomeHome = css`
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

export const animations = {
  introContent,
  introTitle,
  welcomeHome,
}
