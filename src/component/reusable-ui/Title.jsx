import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"

export default function Title({
  labelprimary,
  labelsecondary,
  undertitle,
  classname,
}) {
  return (
    <TitleStyled className={classname}>
      <div className="under-title">{undertitle}</div>
      <div className="title">
        <span className="label1">{labelprimary} </span>
        <span className="label2">{labelsecondary} </span>
      </div>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  white-space: nowrap;

  font-size: 80px;
  font-weight: 900;
  width: 50%;
  font-family: ${theme.fonts.anton};
  .title {
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
    display: flex;
    justify-content: center;
    .label2 {
      color: #ffba31;
    }
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
  @media (max-width: 970px) {
    font-size: 48px;

    .under-title {
      font-size: 90px;
    }
  }
  @media (max-width: 768px) {
    font-size: 48px;

    .under-title {
      font-size: 90px;
    }
  }
  @media (max-width: 480px) {
    font-size: 40px;
    .under-title {
      display: none;
    }
  }
  @media (max-width: 375px) {
    font-size: 36px;
    white-space: normal;

    .under-title {
      display: none;
    }
  }
`
