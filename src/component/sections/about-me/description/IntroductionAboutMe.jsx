import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { animations } from "../../../../theme/animations"

export default function IntroductionAboutMe(classname) {
  return (
    <IntroductionAboutMeStyled classname={classname}>
      <div className="title">
        <h2>INFORMATION PERSONNEL</h2>
      </div>
      <ul>
        <li>
          Prénom:&nbsp;
          <span className="response"> Alexis</span>
        </li>
        <li>
          Âge:&nbsp;
          <span className="response">26 ans</span>
        </li>
        <li>
          Nationalité:&nbsp;
          <span className="response">Francais</span>
        </li>
        <li>
          Freelance:&nbsp;
          <span className="response">Disponible</span>
        </li>
      </ul>
      <ul>
        <li>
          Nom:&nbsp;
          <span className="response">Luigi</span>
        </li>

        <li>
          Langues:&nbsp;
          <span className="response">Francais, Anglais</span>
        </li>
        <li>
          Adresse:&nbsp;
          <span className="response">L'ile-rousse, Corse</span>
        </li>
        <li>
          Email:&nbsp;
          <span className="response">alexisl2b@outlook.fr</span>
        </li>
      </ul>
    </IntroductionAboutMeStyled>
  )
}
const IntroductionAboutMeStyled = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  justify-content: center;
  padding: 16px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);

  li {
    color: white;
    font-weight: 700;
    font-size: 28px;
    margin: 15px 0px;
  }

  .response {
    color: #ffba31;
    font-weight: 700;
  }

  .title {
    grid-column: span 2;
    width: 100%;
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translate(-50%, -85%);
    letter-spacing: 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
    text-align: center;
  }
  @media (max-width: 970px) {
    height: 70%;
    width: 70%;
    display: grid;

    .title {
      grid-column: span 2;
      width: 70%;
      position: absolute;
      left: 50%;
      top: -10px;
      transform: translate(-50%, -85%);
      letter-spacing: 3px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
      text-align: center;
      font-size: 12px;
      font-weight: 500;
    }
    li {
      color: white;
      font-weight: 500;
      font-size: 16px;
      /* margin: 15px 0px; */
    }
  }
  @media (max-width: 768px) {
    height: 40%;
    width: 100%;
    display: grid;

    .title {
      grid-column: span 2;
      width: 70%;
      position: absolute;
      left: 50%;
      transform: translate(0% -85%);
      letter-spacing: 3px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
      text-align: center;
      font-size: 12px;
      font-weight: 500;
    }
    li {
      color: white;
      font-weight: 500;
      font-size: 16px;
      /* margin: 15px 0px; */
    }
  }
  @media (max-width: 480px) {
    height: 40%;
    width: 110%;

    .title {
      grid-column: span 2;
      width: 70%;
      position: absolute;
      left: 50%;

      /* left: 50%;
      top: -10px; */
      transform: translate(0% -85%);
      letter-spacing: 3px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
      text-align: center;
      font-size: 12px;
      font-weight: 400;
    }
    li {
      color: white;
      font-weight: 400;
      font-size: 16px;
      /* margin: 15px 0px; */
    }
  }
  @media (max-width: 375px) {
    height: 50%;
    width: 80%;
    grid-template-columns: 1fr;

    .title {
      grid-column: span 2;
      width: 70%;
      position: absolute;
      left: 50%;

      transform: translate(0% -85%);
      letter-spacing: 3px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
      text-align: center;
      font-size: 12px;
      font-weight: 400;
    }
    li {
      color: white;
      font-weight: 400;
      font-size: 16px;
      /* margin: 15px 0px; */
    }
  }
`
