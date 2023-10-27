import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import ResumeDesc from "./ResumeDesc"
import ResumeCard from "./ResumeCard"

export default function Resume() {
  return (
    <ResumeStyled>
      <Title
        labelprimary={"MY "}
        labelsecondary={"EXPERIENCE"}
        undertitle={"RESUME"}
        classname={"title_component"}
      />
      {/* <ResumeDesc /> */}
      <div className="row experience">
        <ResumeCard
          years={"2014-2015"}
          title={"BEP Hotellerie"}
          content={
            "J'ai suivi le cursus et obtenu mon BEP en hôtellerie, ce qui m'a ouvert des portes vers diverses opportunités professionnelles dans le secteur."
          }
          city={"L'ile-rousse, Lycée de balagne"}
        />
        <ResumeCard
          years={"2022-2023"}
          title={"BAC+2"}
          content={
            "Certification Bac+2 comme développeur-concepteur d'applications web et mobile, attestant d'une expertise technique et de compétences en conception innovante."
          }
          city={"Furiani, Aflokkat"}
        />
      </div>
      <div className="row education">
        <ResumeCard
          years={"2022-2023"}
          title={"Développeur web"}
          content={
            "Durant un stage de deux mois chez Sensomédia, j'ai été formé au CMS Joomla. J'ai appris à concevoir des sites web avec ce système et à développer des plugins système spécifiques."
          }
          city={"Ville di paraso, Sensomedia"}
        />
        <ResumeCard
          years={"2022-2023"}
          title={"Développement web et design "}
          content={
            "En collaboration étroite avec mes clients, j'ai identifié et répondu à leurs besoins métier, développant ainsi des sites web adaptés et des solutions à leurs problématiques rencontrées."
          }
          city={"L'ile-rousse, Mino"}
        />
      </div>
    </ResumeStyled>
  )
}
const ResumeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  place-items: center;
  color: white;
  width: 100%;
  .row {
    padding: 8px;
    gap: 20px;
    width: 70%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
  @media (max-width: 970px) {
    width: 100%;

    .row {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    grid-template-rows: 2fr repeat(4, 2fr);
    /* justify-content: center; */
    place-items: normal;

    .title_component {
      font-size: 190%;
    }

    .row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 375px) {
    grid-template-rows: 2fr repeat(4, 2fr);
    place-items: normal;
    justify-content: center;
    .title_component {
      font-size: 150%;
      position: relative;
    }
    .row {
      grid-template-columns: 1fr;
    }
  }
`
