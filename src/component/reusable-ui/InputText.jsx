import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"
import { useForm } from "react-hook-form"

export default function InputText({ type, label, name, register }) {
  return (
    <InputTextStyled>
      <input
        type={type}
        name={name}
        autoComplete="none"
        placeholder={label}
        ref={register}
      />
      <label htmlFor={name}>{label}</label>
    </InputTextStyled>
  )
}

const InputTextStyled = styled.div`
  position: relative;
  label {
    transition: 0.5s;
    position: absolute;
    color: #000000;
    top: 20%;
    left: 39%;
    /* transform: translateY(-140%) translateX(10%); */
    /* transform: translate(-50%, -50%); */
    color: white;
    pointer-events: none;
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
      transform: translateX(10%) translateY(-290%);
      border-color: inherit;
      border: none;
    }
  }
`
