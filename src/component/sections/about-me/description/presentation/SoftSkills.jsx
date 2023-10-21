import React from "react"
import { styled } from "styled-components"

export default function SoftSkills() {
  return (
    <SoftSkillsStyled>
      <h2 className="title">Soft Skills</h2>
      <div className=" section haut_gauche">
        <h3 className="card_title">Travail en équipe</h3>
        <img className="team" src="src\assets\puzzle_7871862.png" alt="" />
        <div className="desc">
          Collaborateur engagé, je valorise l'union des talents pour des
          solutions innovantes et efficaces ensemble.
        </div>
      </div>
      <div className=" section haut_droite">
        <h2 className="card_title">Adaptabilité </h2>
        <div className="desc">
          Face aux imprévus, je m'adapte et évolue, transformant les défis en
          opportunités d'apprentissage et de croissance.
        </div>
        <img className="scale" src="src\assets\chameleon_2833931.png" alt="" />
      </div>
      <div className=" section bas_gauche">
        <h3 className="card_title">Autonomie</h3>
        <div className="desc">
          Indépendant et proactif, je prends des initiatives, mène mes projets
          avec diligence.
        </div>
        <img src="src\assets\compass_1897493.png" className="autonomy" alt="" />
      </div>
      <div className=" section bas_droite">
        <h3 className="card_title">Curiosité </h3>
        <div className="desc">
          Toujours en quête d'apprendre, ma curiosité alimente mon désir
          d'innovation et de découverte dans le développement."
        </div>
        <img
          src="src\assets\question_1111568.png"
          className="curiosity"
          alt=""
        />
      </div>
    </SoftSkillsStyled>
  )
}
const SoftSkillsStyled = styled.div`
  height: 100%;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;

  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -75%);
    letter-spacing: 10px;
  }
  .section {
    padding: 8px;
    position: relative;
    margin: 5px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .desc {
      z-index: 2;
      text-align: start;
    }
    .card_title {
      color: #ffba31;
      margin-bottom: 10px;
    }
  }
  .haut_gauche {
    position: relative;

    img {
      position: absolute;
      height: 90px;
      left: -15%;
      transform: translateY(-85%);
      filter: blur(0.5px);
    }
  }
  .haut_droite {
    img {
      position: absolute;
      height: 90px;
      left: 75%;
      transform: translateY(-85%);
      filter: blur(0.5px);
    }
  }
  .bas_droite {
    img {
      position: absolute;
      height: 90px;
      left: 80%;
      transform: translateY(95%);
      filter: blur(0.5px);
    }
  }
  .bas_gauche {
    position: relative;
    img {
      position: absolute;
      height: 90px;
      left: -20%;
      transform: translateY(85%);
      filter: blur(0.5px);
    }
  }
`
