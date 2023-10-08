import React from "react"
import { styled } from "styled-components"
import MenuButton from "../MenuButton"
import { getMenuButtonsConfig } from "../menuButtonConfig"
import { MdContactSupport } from "react-icons/md"
import Doted from "../../reusable-ui/Doted"

export default function Menu() {
  const buttons = getMenuButtonsConfig()
  return (
    <MenuStyled>
      {buttons.map((button) => (
        <div>
          <MenuButton icon={button.icon} key={button.id} />
          <Doted version={"right"} />
        </div>
      ))}
      <MenuButton icon={<MdContactSupport />} key={5} />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  right: 2%;
  top: 25%;
  padding: 24px 0px;
  border-radius: 20px;
  position: fixed;
  width: 50px;
  height: 400px;
  background-color: #ffba31;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
