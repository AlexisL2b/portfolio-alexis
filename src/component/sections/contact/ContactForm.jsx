import React from "react"
import { styled } from "styled-components"
import { useForm } from "react-hook-form"
import { theme } from "../../../theme"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, r) => {
    const templateId = "template_fd9zkto"
    const serviceID = "service_mfxn4qi"
    sendFeedback(serviceID, templateId, {
      firstname: data.firstname,
      phone: data.phone,
      email: data.email,
      lastname: data.lastname,
      message: data.message,
      reply_to: r.target.reset(),
    })
  }

  const sendFeedback = (serviceID, templateId, data) => {
    emailjs
      .send(serviceID, templateId, data, "xpNISBwSKi4jBdsHa")
      .then((res) => {
        console.log("Succes ")
      })
      .catch((err) => console.error(err))
  }

  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="input_container">
        <input
          type="text"
          name="firstname"
          autoComplete="none"
          placeholder="firstname"
          {...register("firstname")}
          required
        />
        <label htmlFor="firstname">Firstname</label>
      </div>

      <div className="input_container">
        <input
          type="text"
          name="lastname"
          autoComplete="none"
          placeholder="lastname"
          {...register("lastname")}
          required
        />
        <label htmlFor="lastname">Lastname</label>
      </div>

      <div className="input_container">
        <input
          type="email"
          name="email"
          autoComplete="none"
          placeholder={"Email"}
          {...register("email")}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input_container">
        <input
          type="tel"
          name="phone"
          autoComplete="none"
          placeholder="Phone"
          {...register("phone")}
        />
        <label htmlFor={"phone"}>{"Phone"}</label>
      </div>

      <div className="input_container">
        <textarea
          type={"text"}
          {...register("message")}
          name={"message"}
          placeholder="Message"
          rows={5}
          required
        />
        <label htmlFor={"message"}>Message</label>
      </div>
      <button type="submit">Send</button>
    </ContactFormStyled>
  )
}
const ContactFormStyled = styled.form`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  height: 70%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  gap: 10px;

  border-radius: 15px;
  padding: 8px;

  .input_container {
    position: relative;
    label {
      transition: 0.5s;
      position: absolute;
      color: #000000;

      top: 20%;
      left: 39%;
      /* transform: translate(-50%, -50%); */
      color: white;
      /* pointer-events: none; */
    }
    textarea {
      background: rgba(232, 232, 232, 0.65);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      font-weight: 900;
      text-align: center;
      transition: 0.5s;
      color: white;
      resize: none;
      width: 100%;
      text-justify: center;

      margin-top: 15px;
      &::placeholder {
        color: transparent;
      }
      &:focus {
        border-color: inherit;
        border: solid 1px white;
        outline: none;
        outline-color: red;
      }
      &:not(:placeholder-shown) {
        background-color: #80808046;
      }

      &:focus + label,
      &:not(:placeholder-shown) + label {
        transform: translateY(-150%);
        border-color: inherit;
        border: none;
      }
    }
    input {
      padding: 5px 50px;

      background: rgba(232, 232, 232, 0.65);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      font-weight: 900;
      text-align: center;
      text-justify: center;
      transition: 0.5s;
      color: white;
      font-family: ${theme.fonts.open};
      &::placeholder {
        color: transparent;
      }

      &:focus {
        border-color: inherit;
        border: solid 1px white;
        outline: none;
        outline-color: red;
      }
      &:not(:placeholder-shown) {
        background-color: #80808046;
      }

      &:focus + label,
      &:not(:placeholder-shown) + label {
        transform: translateY(-150%);
        border-color: inherit;
        border: none;
      }
    }
  }
  button {
    width: 50%;
    align-self: center;
    justify-self: center;
    margin: 8px;
    height: 28px;
    background-color: #0bc12746;
    border: 1px solid white;
    border-radius: 5px;
    font-family: ${theme.fonts.open};
    font-weight: 900;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #0bc1267e;
    }
  }
`
