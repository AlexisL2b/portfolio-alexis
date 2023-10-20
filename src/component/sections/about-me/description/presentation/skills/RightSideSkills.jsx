import React from "react"
import { styled } from "styled-components"
import JsLibrary from "../JsLibrary"
import TextAnimated, { textAnimation } from "../TextAnimated"

export default function RightSideSkills({ tech, library, onClick }) {
  return (
    <RightSideSkillsStyled>
      <div className="library">
        {tech === "js" ? <JsLibrary onClick={onClick} /> : "null"}
        {tech === "html" ? <div className="rouge">aa</div> : null}
      </div>
      <div className="desc_library">
        <div className="top-side">
          {library === "react" ? (
            <TextAnimated
              content={
                "Durant les six dernières semaines, je me suis plongé avec passion dans l'apprentissage de React, une bibliothèque de développement front-end. Malgré le caractère dense de cet outil, j'ai rapidement saisi ses concepts fondamentaux, tels que les composants, les états et les props. Grâce à React, j'ai pu concevoir des interfaces utilisateur réactives et optimisées. Je suis enthousiaste à l'idée de mettre en pratique mes nouvelles compétences en React dans des projets futurs et de continuer à approfondir mes connaissances dans ce domaine."
              }
              title={"REACT"}
            />
          ) : null}
          {library === "calendar" ? (
            <TextAnimated
              content={
                "Il y a neuf mois, dans le cadre de ma certification, j'ai approfondi la bibliothèque FullCalendar, essentielle pour concevoir des calendriers web interactifs. Cette expérience m'a permis de comprendre la puissance et la polyvalence de cet outil, facilitant la création de solutions calendaires sur mesure. Grâce à FullCalendar, j'ai été en mesure de fournir des interfaces conviviales, gérant des événements avec souplesse. Son potentiel offre de belles perspectives pour des applications futures"
              }
              title={"FULLCALENDAR"}
            />
          ) : null}
          {library === "jquerry" ? (
            <TextAnimated
              content={
                "  Lors de ma certification, il y a neuf mois, j'ai consacré du temps à jQuery, un outil longtemps considéré comme essentiel en développement front-end. Bien que certains puissent le voir comme dépassé à l'ère des frameworks modernes, je crois fermement qu'il garde sa place dans le skill set d'un développeur. Sa capacité à manipuler le DOM et gérer des événements de manière efficace reste pertinente dans certains contextes. Appréhender jQuery m'a fourni une perspective enrichissante, me rappelant l'importance de maîtriser à la fois les outils anciens et nouveaux dans notre domaine."
              }
              title={"JQUERRY"}
            />
          ) : null}
          {tech === "html" ? <span>html</span> : null}
          {tech === "js" && library === "" ? (
            <TextAnimated
              content={
                "Lors de mon immersion dans React, j'ai réalisé la nécessité d'approfondir mes bases en JavaScript. Si React offre une multitude de possibilités, une bonne compréhension de JavaScript est essentielle pour en tirer avantage. Bien que je sois encore en phase d'apprentissage et que je ne prétende pas maîtriser parfaitement JavaScript, j'ai pu constater l'impact positif de ce renforcement sur mes projets React. Cette démarche m'assure une progression constante et me prépare à tirer le meilleur des outils actuels et futurs."
              }
              title={"JAVASCRIPT"}
            />
          ) : null}
        </div>
      </div>
    </RightSideSkillsStyled>
  )
}

const RightSideSkillsStyled = styled.div`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-rows: 2fr 4fr;
  .library {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;

    .icon_library {
      border-radius: 15%;
      transition: transform 300ms ease;
      cursor: pointer;
      height: 80px;
      width: 80px;
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
  .desc_library {
    color: white;
    ${textAnimation}
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
