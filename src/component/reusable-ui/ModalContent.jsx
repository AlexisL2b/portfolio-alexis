import React, { useContext } from "react"
import { styled } from "styled-components"
import FirstPageContext from "../pages/FirstPageContext"

export default function ModalContent({ closemodal }) {
  const { setShowModal, showModal } = useContext(FirstPageContext)
  const closeModale = () => {
    close
  }

  return (
    <ModalContentStyled>
      <div className="overlay" onClick={() => setShowModal("false")}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div className="modale_content">modal contetn</div>
    </ModalContentStyled>
  )
}
const ModalContentStyled = styled.div`
  .overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: slategray;
    opacity: 75%;
    cursor: pointer;
  }
`
