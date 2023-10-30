import React from "react"
import styled from "styled-components"

export default function CircularProgressBar({ percentage, color, tech, img }) {
  return (
    <ProgressCircleStyled percentage={percentage} color={color}>
      <div className="circle">
        <h2>
          {percentage} <small>%</small>
        </h2>
        <div className="icon">
          <img src={img} alt="" />
        </div>
      </div>
      <h3>{tech}</h3>
    </ProgressCircleStyled>
  )
}

const ProgressCircleStyled = styled.div`
  color: white;
  width: auto;
  display: flex;
  flex-direction: column;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.58);
  /* align-self: center; */
  justify-self: center;
  align-items: center;
  .circle {
    position: relative;
    width: 150px;
    height: 150px;
    background: conic-gradient(
      from 0deg,
      ${(props) => props.color} 0%,
      ${(props) => props.color} ${(props) => props.percentage}%,
      transparent ${(props) => props.percentage}%,
      #333 100%
    );
    border-radius: 50%;
    -webkit-box-shadow: inset 7px -1px 26px 5px rgba(0, 0, 0, 0.5);
    box-shadow: inset 7px -1px 26px 5px rgba(0, 0, 0, 0.5);
    &:before {
      content: "";
      position: absolute;
      inset: 10px;

      background: #333;
      border-radius: 50%;
    }
    h2 {
      position: relative;
      text-align: center;
      top: 25px;
      left: 5px;
      font-size: 1.5em;
      font-weight: 600;
    }
    small {
      position: relative;
      left: -5px;
      top: -2px;
      font-weight: 300;
    }
    .icon img {
      position: absolute;
      width: 70px;
      height: 70px;
      object-fit: contain;
      left: 40px;
      top: 55px;
    }
  }
  h3 {
    text-transform: uppercase;
    margin-top: 10px;
    text-align: center;
  }
  @media (max-width: 970px) {
    .intro {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    .circle {
      width: 66%;
      height: 66%;
      left: 15%;
      .icon img {
        width: 25%;
        height: 25%;
      }
      h3 {
        left: 10;
      }
    }
  }
  @media (max-width: 375px) {
    .circle {
    }
  }
`
