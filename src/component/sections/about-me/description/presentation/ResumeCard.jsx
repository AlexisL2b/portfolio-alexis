import React from "react"
import { styled } from "styled-components"

export default function ResumeCard() {
  return (
    <ResumeCardStyled>
      <img src="src\assets\icons8-utilisateur-64.png" alt="" />
      <div className="desc">
        <span className="title_desc">DEVELOPPEMENT WEB</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          harum natus eius amet, asperiores beatae molestiae? Necessitatibus
          aliquid sapiente non repudiandae quaerat, voluptate omnis blanditiis
          error saepe voluptas neque eligendi fugit alias enim porro harum
          quidem expedita repellat eos iure.
        </p>
      </div>
    </ResumeCardStyled>
  )
}
const ResumeCardStyled = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .title_desc {
    display: grid;
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 16px;
  }
`
