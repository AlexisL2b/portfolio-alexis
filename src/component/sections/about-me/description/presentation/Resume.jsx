import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Resume() {
  return (
    <ResumeStyled>
      <div className="title_resume">What i do ?</div>
      <div className="case  1">
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
      </div>
      <div className="case 2">
        <img src="" alt="" />

        <div className="desc">
          <span className="title_desc"></span>
          <p></p>
        </div>
      </div>
      <div className="case 3">
        <img src="" alt="" />
        <div className="desc">
          <span className="title_desc"></span>
          <p></p>
        </div>
      </div>
    </ResumeStyled>
  )
}
const ResumeStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
  border: 1px solid red;
  .title_resume {
    font-size: 32px;
    border: 1px solid pink;
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    margin-left: 10px;
    text-align: start;
  }
  .case {
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
  }
`
