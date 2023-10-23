import React, { useContext, useState } from "react"
import { createPortal } from "react-dom"
import { styled } from "styled-components"
import ModalContent from "./ModalContent"
import FirstPageContext from "../pages/FirstPageContext"

export default function ModalButton() {
  const { showModal, setShowModal } = useContext(FirstPageContext)
  const openModal = () => {
    console.log(showModal)
  }
  return (
    <ModalButtonStyled onClick={() => openModal()}>
      <a className="btn">
        <svg width="277" height="62">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="#ffc95d" />
              <stop offset="100%" stop-color="#f37c44" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="5"
            rx="25"
            fill="none"
            stroke="url(#grad1)"
            width="266"
            height="50"
          ></rect>
        </svg>
        <span>Compétences</span>
      </a>
      {showModal === "true" &&
        createPortal(
          <ModalContent closemodal={setShowModal(false)} />,
          document.body
        )}
    </ModalButtonStyled>
  )
}

const ModalButtonStyled = styled.div`
  align-self: center;
  .btn {
    /* margin-top: calc(50% + 25px); */
    position: relative;
    display: inline-block;
    width: 277px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 17px;
    letter-spacing: 0.045em;
  }

  .btn svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn svg rect {
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
  }

  .btn span {
    background: rgb(255, 130, 130);
    background: -moz-linear-gradient(left, #ffc95d 0%, #f37c44 100%);
    background: -webkit-linear-gradient(
      left,
      #ffc95d 0%,

      #f37c44 100%
    );
    background: linear-gradient(
      to right,
      #ffc95d 0%,

      #f37c44 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btn:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
  }
  a:active {
    transform: scale(0.9);
    transition: 100ms;
  }
`
