import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../../../reusable-ui/LabelPost"
import Button from "../../../../reusable-ui/Button"

export default function Welcome() {
  return (
    <WelcomeStyled>
      <span className="surTitle">HEY!</span>
      <span className="presentation">
        JE SUIS <span className="firstname">ALEXIS</span>
      </span>
      <LabelPost version="primary" Label="DÉVELOPPEUR WEB FRONT-END " />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem
        inventore voluptatibus consequatur ratione obcaecati maxime reiciendis
        officiis quibusdam esse deleniti dolorum nemo tenetur, adipisci
        repudiandae dolorem quae expedita at necessitatibus accusamus nam
        veniam! Molestiae dolor iure recusandae, eveniet, perferendis, alias
        minima error rerum corrupti quae enim officiis cum adipisci!
      </p>
      <Button version="rounded" />
    </WelcomeStyled>
  )
}

const WelcomeStyled = styled.div``
