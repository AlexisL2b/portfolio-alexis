import React, { useState } from "react"
import { styled } from "styled-components"
import { getDeepClone } from "../../../../../utils/window"

export default function Skills() {
  const [isSelected, setIsSelected] = useState("")

  const onClick = (e) => {
    // const copyIsSelected = getDeepClone(isSelected)
    // copyIsSelected.splice(0, copyIsSelected.length)
    // copyIsSelected.push(e.currentTarget.alt)
    setIsSelected(e.currentTarget.alt)
    console.log(isSelected)
  }
  return (
    <SkillsStyled selected={isSelected}>
      <div className="left_side">
        <div className="first_icon">
          <img
            onClick={onClick}
            className="icon js"
            src="src\assets\kisspng-javascript-portable-network-graphics-logo-clip-art-javascript-programs-amp-output-apps-on-google-5b69409b183213.5468079715336244750991.png"
            alt="js"
          />
        </div>
        <div className="second_icon">
          <img
            onClick={onClick}
            className="icon css"
            src="src\assets\kisspng-responsive-web-design-cascading-style-sheets-css3-5af3bcd38ce761.4872052615259230275772.png"
            alt="css"
          />
        </div>
        <div className="third_icon">
          <img
            onClick={onClick}
            className="icon html"
            src="src\assets\kisspng-responsive-web-design-html-computer-icons-css3-wor-css-5ada2556b56739.2541863015242458467431.png"
            alt="html"
          />
        </div>
        <div className="fourth_icon">
          <img
            onClick={onClick}
            className="icon php "
            src="src\assets\kisspng-php-joomla-installation-hhvm-content-management-sy-5b00d8b1c3b063.0435587815267821298016.png"
            alt="php"
          />
        </div>
      </div>
      <div className="right_side">
        <div className="library">
          {isSelected === "js" ? (
            <div className="js_library">
              <img
                className="icon_library"
                src="src\assets\kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
                alt=""
              />
              <img
                className="icon_library"
                src="src\assets\kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
                alt=""
              />
              <img
                className="icon_library"
                src="src\assets\kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
                alt=""
              />
              <img
                className="icon_library"
                src="src\assets\kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
                alt=""
              />
            </div>
          ) : null}
          {isSelected === "html" ? <div className="rouge">aa</div> : null}
        </div>
        <div className="desc_library"></div>
      </div>
    </SkillsStyled>
  )
}
const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: black;
  .js_library {
    display: flex;
    gap: 15px;
  }
  .icon_library {
    height: 96px;
    width: 96px;
  }
  .left_side {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    place-content: center;

    .icon {
      cursor: pointer;
      height: 130px;
      width: 130px;
      object-fit: contain;
      filter: grayscale(70%);
      opacity: 60%;
      &:hover {
        transition: 300ms;
        filter: grayscale(0%);
        opacity: 100%;
      }
    }
    .${(props) => props.selected} {
      filter: grayscale(0%);
      opacity: 100%;
    }
  }
  .right_side {
    display: grid;
    grid-template-rows: 2fr 4fr;
    .library {
      border: 1px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      .jaune {
        background: yellow;
      }
      .rouge {
        background: red;
      }
    }
    .desc_library {
      border: 1px solid blue;
    }
  }
`
