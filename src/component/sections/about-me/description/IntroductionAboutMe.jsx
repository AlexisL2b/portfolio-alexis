import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../theme"

export default function IntroductionAboutMe() {
  return (
    <IntroductionAboutMeStyled>
      <span className="title">
        Je m'appelle <span className="firstname"> Alexis Luigi, </span>
        Développeur Web
      </span>
      <p className="content-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        sapiente minima deleniti modi cupiditate sint magnam consequatur
        doloribus voluptates sed, amet odit ipsum obcaecati corporis quod, in
        quia. Ab nisi doloribus earum porro minus praesentium dolore facilis
        aliquam molestiae quaerat consectetur sunt distinctio eius, repellendus
        quos debitis animi eaque sit!
      </p>
    </IntroductionAboutMeStyled>
  )
}
const IntroductionAboutMeStyled = styled.div`
  .title {
    display: flex;
    font-family: ${theme.fonts.anton};
    font-size: 32px;

    .firstname {
      text-align: center;
      font-weight: 900;
      text-align: center;
      margin: -5px 5px;
    }
  }
`
