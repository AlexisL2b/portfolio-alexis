import React from "react"
import { styled } from "styled-components"
import Title from "../../reusable-ui/Title"
import ContactForm from "./ContactForm"
import InputText from "../../reusable-ui/InputText"

export default function Contact() {
  return (
    <ContactStyled>
      <Title labelprimary={"MY"} labelsecondary={"CONTACT"} />
      <div className="content">
        <div className="left_side side">
          <InputText type={"text"} label={"Username"} name={"username"} />
        </div>
        <div className="right_side side">
          <ContactForm />
        </div>
      </div>
    </ContactStyled>
  )
}

const ContactStyled = styled.div`
  height: 100%;
  width: 90%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-rows: 1fr 5fr;
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .side {
      padding: 10px;
    }
    .left_side {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
`
