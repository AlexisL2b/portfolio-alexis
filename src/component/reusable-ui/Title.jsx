import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"

export default function Title({ label, undertitle }) {
  return (
    <TitleStyled>
      <div className="under-title">{undertitle}</div>
      <div className="title">{label}</div>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  text-align: center;
  font-size: 80px;
  font-weight: 900;
  width: 50%;
  font-family: ${theme.fonts.anton};
  .title {
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
  }
  .under-title {
    /* z-index: -1 */
    position: absolute;
    font-size: 170px;
    font-family: ${theme.fonts.anton};
    color: transparent;
    left: 50%;
    transform: translate(-50%, -30%);
    letter-spacing: 20px;
    -webkit-background-clip: text;

    background-image: linear-gradient(
      rgba(207, 179, 18, 0.5),
      rgba(226, 15, 15, 0.2)
    );
  }
  /* .under-title {
    font-size: 5em;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    );
    position: relative;
  }

  .under-title::before {
    content: attr(data-text);
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
    color: rgba(0, 0, 0, 0.3);
  }

  .under-title::after {
    content: attr(data-text);
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    color: rgba(255, 255, 255, 0.2);
  } */
`
