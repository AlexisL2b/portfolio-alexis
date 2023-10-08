import React from "react"
import FirstPage from "./component/pages/FirstPage"
import { styled } from "styled-components"
import SecondPage from "./component/pages/second-page/SecondPage"

export default function App() {
  return (
    <AppStyled>
      <FirstPage />
      <SecondPage />
    </AppStyled>
  )
}
const AppStyled = styled.div``
