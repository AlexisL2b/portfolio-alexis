import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../reusable-ui/LabelPost"

export default function ResumeCard({
  years,
  version,
  content,
  title,
  button,
  city,
}) {
  return (
    <ResumeCardStyled>
      <h3>{title}</h3>
      <LabelPost label={years} version={"secondarySmall"} />
      <h4 className="city">{city}</h4>
      <div className="desc">{content}</div>
    </ResumeCardStyled>
  )
}

const ResumeCardStyled = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 15px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  h3 {
    font-size: 32px;
  }
  .desc {
    font-size: 16px;
    font-weight: 900;
    /* margin-top: 10px;   */
    margin-bottom: 18px;
  }

  .city {
    font-size: 24px;
    font-weight: 900;
    color: #ffba31;
  }
  @media (max-width: 970px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
  @media (max-width: 375px) {
    height: 100%;

    width: 100%;
  }
`
