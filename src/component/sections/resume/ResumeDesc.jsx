import React from "react"
import { styled } from "styled-components"
import ResumeDescCard from "./ResumeDescCard"

export default function ResumeDesc() {
  return (
    <ResumeDescStyled>
      <div className="title_div">
        <span className="title">EDUCATION </span>
        <ResumeDescCard
          post={"2022-2023"}
          content={
            " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
          }
          secondtitle={"Stagiaire"}
        />
      </div>

      <ResumeDescCard
        post={"2022-2023"}
        content={
          " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
        }
        secondtitle={"Stagiaire"}
      />
      <ResumeDescCard
        firsttitle={"EDUCATION"}
        post={"2022-2023"}
        content={
          " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
        }
        secondtitle={"Stagiaire"}
      />
      <div className="divider"></div>
      <div className="title_div">
        EXPERIENCE
        <ResumeDescCard
          post={"2022-2023"}
          content={
            " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
          }
          secondtitle={"Stagiaire"}
        />
      </div>
      <ResumeDescCard
        firsttitle={"EDUCATION"}
        post={"2022-2023"}
        content={
          " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
        }
        secondtitle={"Stagiaire"}
      />
      <ResumeDescCard
        firsttitle={"EDUCATION"}
        post={"2022-2023"}
        content={
          " amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste vero voluptatem adipisci aut quia dolor commodi sunt in sint??"
        }
        secondtitle={"Stagiaire"}
      />
    </ResumeDescStyled>
  )
}
const ResumeDescStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .divider {
    position: absolute;
    border: 1px solid red;
    width: 100%;
  }
  .title_div {
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
      margin: 45px 10px;
    }
  }
`
