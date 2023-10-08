import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../theme"
import Doted from "../../reusable-ui/Doted"

export default function LinksContainer() {
  return (
    <LinksContainerStyled>
      <ul>
        <li>
          <a href="">ACCEUIL</a>
          <Doted version={"left"} />
        </li>
        <li>
          <a href="">A PROPOS DE MOI</a>
          <Doted version={"left"} />
        </li>
        <li>
          <a href="">RÉSUMÉ</a>
          <Doted version={"left"} />
        </li>
        <li>
          <a href="">PROJETS</a>
          <Doted version={"left"} />
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </LinksContainerStyled>
  )
}
const LinksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 66%;
  padding: 16px 8px;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  li {
    margin: 0px 0px;
  }
  a {
    font-size: 24px;
    font-family: ${theme.fonts.anton};
    font-weight: 700;
    color: black;
    &:hover {
      color: white;
    }
    &:active {
      color: black;
    }
  }
`
