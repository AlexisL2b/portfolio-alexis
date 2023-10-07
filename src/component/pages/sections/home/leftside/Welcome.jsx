import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../../../reusable-ui/LabelPost"
import Button from "../../../../reusable-ui/Button"
import { theme } from "../../../../../theme"

export default function Welcome() {
  return (
    <WelcomeStyled>
      <span className="surtitle">BONJOUR!</span>
      <div className="presentation">
        JE SUIS <span className="firstname">ALEXIS</span>
      </div>
      <LabelPost version="primary" label="DÉVELOPPEUR WEB FRONT-END " />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem
        inventore voluptatibus consequatur ratione obcaecati maxime reiciendis
        officiis quibusdam esse deleniti dolorum nemo tenetur, adipisci
        repudiandae dolorem quae expedita at necessitatibus accusamus nam
        veniam! Molestiae dolor iure recusandae, eveniet, perferendis, alias
        minima error rerum corrupti quae enim officiis cum adipisci!
      </p>
      <Button version="primaryRounded" label={"EN SAVOIR PLUS SUR MOI"} />
    </WelcomeStyled>
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
    font-size: 48px;
    color: black;
  }
  .presentation {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 56px;
    color: black;
    .firstname {
      font-family: "Big Shoulders Stencil Text", " cursive";
      font-weight: 900;
      font-size: 64px;
      color: #ffba31;
    }
  }
`
