import React, { useContext } from "react"
import { styled } from "styled-components"
import MenuButton from "../MenuButton"
import { getMenuButtonsConfig } from "../menuButtonConfig"
import { MdContactSupport } from "react-icons/md"
import Doted from "../../reusable-ui/Doted"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import FirstPageContext from "../../pages/FirstPageContext"

export default function Menu() {
  const buttons = getMenuButtonsConfig()

  const { setSection, section } = useContext(FirstPageContext)

  const onClick = (e) => {
    const sectionValue = e.currentTarget.id
    setSection(sectionValue)
    console.log(section)
  }
  return (
    <MenuStyled>
      <div>
        {buttons.map((button) => (
          <div key={button.name}>
            <MenuButton
              icon={button.icon}
              key={button.id}
              onClick={onClick}
              id={button.name}
            />
            <Doted version={"right"} />
          </div>
        ))}
        <MenuButton icon={<MdContactSupport />} key={5} />
      </div>
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  z-index: 1;
  right: 2%;
  top: 25%;
  padding: 24px 0px;
  position: fixed;
  width: 50px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //////
  background: rgba(247, 167, 8, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`
