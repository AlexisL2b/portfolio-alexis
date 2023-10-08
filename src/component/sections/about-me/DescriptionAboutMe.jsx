import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../theme"

export default function DescriptionAboutMe() {
  return (
    <DescriptionAboutMeStyled>
      <div className="introduction">
        <span className="title">
          Je m'appelle <span className="firstname"> Alexis Luigi, </span>
          Développeur Web
        </span>
        <p className="content-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          sapiente minima deleniti modi cupiditate sint magnam consequatur
          doloribus voluptates sed, amet odit ipsum obcaecati corporis quod, in
          quia. Ab nisi doloribus earum porro minus praesentium dolore facilis
          aliquam molestiae quaerat consectetur sunt distinctio eius,
          repellendus quos debitis animi eaque sit!
        </p>
      </div>
      <div className="presentation">
        <div className="numbers">
          <div className="haut-gauche"></div>
          <div className="haut-droite"></div>
          <div className="bas-gauche"></div>
          <div className="bas-droite"></div>
        </div>
        <div className="resume">
          <div className="title_resume">What i do ?</div>
          <div className="case  1">
            <img src="src\assets\icons8-utilisateur-64.png" alt="" />
            <div className="desc">
              <span className="title_desc">DEVELOPPEMENT WEB</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem harum natus eius amet, asperiores beatae molestiae?
                Necessitatibus aliquid sapiente non repudiandae quaerat,
                voluptate omnis blanditiis error saepe voluptas neque eligendi
                fugit alias enim porro harum quidem expedita repellat eos iure.
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
        </div>
      </div>
    </DescriptionAboutMeStyled>
  )
}
const DescriptionAboutMeStyled = styled.div`
  height: auto;
  border: 1px solid red;
  margin: 20px 0px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  padding: 10px;
  .title {
    display: flex;
    font-family: ${theme.fonts.anton};
    font-size: 32px;
    margin: 20px 0px;

    .firstname {
      text-align: center;
      font-weight: 900;
      text-align: center;
      margin: -5px 5px;
    }
  }
  .presentation {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
    .numbers {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      background-color: black;

      .haut-droite {
        border-left: 1px solid #ffba31;
      }
      .bas-droite {
        border-left: 1px solid #ffba31;
      }
    }
    .resume {
      display: grid;
      grid-template-rows: 1fr 2fr 2fr 2fr;
      border: 1px solid red;
      .title_resume {
        font-size: 32px;
        border: 1px solid pink;
        font-family: ${theme.fonts.anton};
        font-weight: 900;
        margin-left: 10px;
        margin-top: 10px;
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
          margin-bottom: 10px;
          font-family: ${theme.fonts.anton};
          font-weight: 900;
          font-size: 16px;
        }
      }
    }
  }
`
