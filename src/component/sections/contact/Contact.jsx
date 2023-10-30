import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import ContactForm from "./ContactForm"
import LabelContact from "./LabelContact"
import { VscGithubAlt } from "react-icons/vsc"
import { PiLinkedinLogo, PiDiscordLogo } from "react-icons/pi"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { IoLogoInstagram } from "react-icons/io5"
import { RiTwitterLine } from "react-icons/ri"

export default function Contact() {
  const user = "alexisl2b"
  const domain = "outlook"
  const tld = "fr"
  const email = user + "@" + domain + "." + tld

  const handleCopyClick = (e) => {
    e.preventDefault()

    const textToCopy = "417751565445627948"

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setMessage("Texte copié avec succès!")
      })
      .catch((err) => {
        console.error("Erreur lors de la copie du texte: ", err)
        setMessage("Erreur lors de la copie du texte.")
      })
  }
  return (
    <ContactStyled>
      <Title
        labelprimary={"MY"}
        labelsecondary={"CONTACT"}
        undertitle={"CONTACT"}
      />
      <div className="content">
        <div className="left_side side">
          <ContactForm />
        </div>
        <div className="right_side side">
          <LabelContact
            icon={<VscGithubAlt />}
            label={"Github"}
            href={"https://github.com/AlexisL2b"}
          />
          <LabelContact
            icon={<PiLinkedinLogo />}
            label={"Linkedin"}
            href={"hhttps://fr.linkedin.com/in/alexis-luigi-62106723b"}
          />
          <LabelContact
            icon={<MdOutlineAlternateEmail />}
            label={"Email"}
            href={"mailto:" + email}
          />
          <LabelContact
            icon={<RiTwitterLine />}
            label={"Twitter"}
            href={"https://twitter.com/AlexL2b"}
          />
          <LabelContact
            icon={<PiDiscordLogo />}
            label={"Discord"}
            onClick={handleCopyClick}
          />
          <LabelContact
            icon={<IoLogoInstagram />}
            label={"Instagram"}
            href={"https://www.instagram.com/alexis_luigi/"}
          />
        </div>
      </div>
    </ContactStyled>
  )
}

const ContactStyled = styled.div`
  height: 100%;
  width: 90%;
  color: white;

  display: grid;
  grid-template-rows: 1fr 5fr;
  place-items: center;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 70px;
    .side {
      padding: 10px;
    }
    .left_side {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .right_side {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      gap: 7%;
    }
  }
  @media (max-width: 970px) {
  }
  @media (max-width: 768px) {
    place-items: center;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    .content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 0;
    }
    .right_side {
      align-items: center;
    }
  }
  @media (max-width: 375px) {
  }
`
