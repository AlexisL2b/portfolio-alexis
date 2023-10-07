import React from "react"
import FirstPage from "./component/pages/FirstPage"
import { styled } from "styled-components"

export default function App() {
  return (
    <AppStyled>
      <FirstPage />
    </AppStyled>
  )
}
const AppStyled = styled.div`
  /* width: 100%; */
`
