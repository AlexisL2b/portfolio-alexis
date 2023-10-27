import React from "react"
import { styled } from "styled-components"
import InputText from "../../reusable-ui/InputText"
import { useForm } from "react-hook-form"
import { theme } from "../../../theme"

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }
  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      {/* <InputText
        type={"text"}
        register={register("firstname")}
        name={"firstname"}
        label={"Firstname"}
      /> */}
      <div className="input_container">
        <input
          type="text"
          name="firstname"
          autoComplete="none"
          placeholder="firstname"
          {...register("firstname")}
        />
        <label htmlFor="firstname">Firstname</label>
      </div>
      {/* <InputText
        type={"text"}
        register={register("lastname")}
        name={"lastname"}
        label={"Lastname"}
      /> */}
      <div className="input_container">
        <input
          type="text"
          name="lastname"
          autoComplete="none"
          placeholder="lastname"
          {...register("lastname")}
        />
        <label htmlFor="lastname">Lastname</label>
      </div>
      {/* <InputText
        type={"email"}
        register={...register("email")}
        name={"email"}
        label={"Email"}
      /> */}
      <div className="input_container">
        <input
          type="email"
          name="email"
          autoComplete="none"
          placeholder={"Email"}
          {...register("email")}
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
        <input
          type={"text"}
          {...register("message")}
          name={"message"}
          placeholder="Message"
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
  width: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

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
    input {
      padding: 5px 20px;
      outline-color: red;
      background-color: transparent;
      border: solid 1px white;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 5px;
      font-weight: 900;
      text-align: center;
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
  }
`
