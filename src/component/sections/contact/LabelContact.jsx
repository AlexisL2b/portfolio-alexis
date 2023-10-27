import React from "react"
import { styled } from "styled-components"

export default function LabelContact({ icon, label, href, onClick }) {
  return (
    <LabelContactStyled href={href} onClick={onClick && onClick}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </LabelContactStyled>
  )
}
const LabelContactStyled = styled.a`
  cursor: pointer;
  width: auto;
  background: #80808046;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: 900;
  width: 50%;
  height: 5%;

  display: grid;
  grid-template-columns: 24px 1fr;
  column-gap: 20px;
  color: white;
  transition: 0.3s;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.58);
  letter-spacing: 2px;
  &:hover {
    background: #80808082;
  }
  &:active {
    background: #80808046;
  }

  .icon {
    font-size: 24px;
    display: flex;
    margin-left: 5px;
    justify-self: center;
    align-items: center;
  }
  .label {
    display: flex;
    align-items: center;
  }
  a {
  }
  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit; /* Cela prend la couleur du texte environnant, mais vous pouvez également définir une couleur spécifique si vous le souhaitez. */
  }
`
