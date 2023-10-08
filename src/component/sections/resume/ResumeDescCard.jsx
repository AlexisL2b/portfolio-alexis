import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../reusable-ui/LabelPost"
import { theme } from "../../../theme"

export default function ResumeDescCard({
  firsttitle,
  secondtitle,
  post,
  content,
}) {
  return (
    <ResumeDescCardStyled>
      <div className="title">{firsttitle && firsttitle}</div>
      <LabelPost label={post} version={"secondary"} />
      <div className="info_title">{secondtitle}</div>
      <p>{content}</p>
    </ResumeDescCardStyled>
  )
}
const ResumeDescCardStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  align-self: center;
  .title {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 24px;
  }
  .info_title {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 16px;
  }
`
