import React from "react"
import { styled } from "styled-components"
import LabelPost from "../../../reusable-ui/LabelPost"
import Button from "../../../reusable-ui/Button"
import { theme } from "../../../../theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"

//RESPONSIVE : YES

export default function Welcome() {
  return (
    <TransitionGroup component={WelcomeStyled}>
      <CSSTransition
        appear={true}
        timeout={1000} // La durée de votre animation en ms
        classNames="text-focus-in"
      >
        <div>
          <span className="surtitle">BONJOUR!</span>
          <div className="presentation">
            <span>
              JE SUIS <span className="firstname">ALEXIS</span>
            </span>
            <span> Développeur web junior!</span>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const WelcomeStyled = styled.div`
  width: 100%;
  text-align: center;

  .surtitle {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 56px;
    color: #ffffff;
  }
  .presentation {
    font-family: ${theme.fonts.anton};
    font-weight: 900;
    font-size: 56px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    .firstname {
      font-family: "Big Shoulders Stencil Text", " cursive";
      font-weight: 900;
      font-size: 64px;
      color: #ffba31;
    }
  }
  .text-focus-in-appear {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  .text-focus-in-appear-active {
    transition: 1000ms;
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }

  p {
    color: white;
  }

  span {
    white-space: nowrap;
    text-transform: uppercase;
  }

  // Placez votre media query après les autres styles
  @media (max-width: 970px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: CENTER;
    .surtitle {
      font-weight: 900;

      font-size: 48px;
    }
    .presentation {
      font-weight: 900;

      font-size: 48px;

      .firstname {
        font-weight: 900;

        font-size: 52px;
      }
    }
    span {
      white-space: normal;
      text-transform: uppercase;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .surtitle {
      font-weight: 900;

      font-size: 48px;
    }
    .presentation {
      font-weight: 900;

      font-size: 48px;

      .firstname {
        font-weight: 900;

        font-size: 52px;
      }
    }
    span {
      white-space: normal;
      text-transform: uppercase;
    }
  }
  @media (max-width: 480px) {
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .surtitle {
      font-weight: 900;

      font-size: 32px;
    }
    .presentation {
      font-weight: 900;

      font-size: 32px;

      .firstname {
        font-weight: 900;

        font-size: 36px;
      }
    }
    span {
      white-space: normal;
      text-transform: uppercase;
    }
  }
  @media (max-width: 375px) {
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .surtitle {
      font-weight: 900;

      font-size: 24px;
    }
    .presentation {
      font-weight: 900;

      font-size: 24px;

      .firstname {
        font-weight: 900;

        font-size: 24px;
      }
    }
    span {
      white-space: normal;
      text-transform: uppercase;
    }
  }
`
