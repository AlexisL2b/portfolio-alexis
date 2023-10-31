import React, { useState } from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { styled } from "styled-components"
import "@splidejs/react-splide/css/sea-green"
import crazee_burger from "../../../assets/Crazee-Burger-Alexis(1).png"
import aflokkat from "../../../assets/aflokkat.png"
import beluga from "../../../assets/beluga-diving.png"

export default function Carousel() {
  const [hoverable, setHoverable] = useState("")
  return (
    <CarouselStyled>
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          // fixedHeight: 450,
          width: "100%",
          perPage: 3,
          gap: "30px",
          type: "loop",
          drag: false,
          breakpoints: {
            1440: {
              perPage: 2,
              width: "auto",
              drag: true,
            },
            970: {
              perPage: 1,
              width: "auto",
              drag: true,
            },
            768: {
              perPage: 1,
              width: "100%",
              drag: true,
            },
            480: {
              perPage: 1,
              width: "auto",
              // fixedWidth: "400px",
              drag: true,
            },
            375: {
              perPage: 1,
              width: "100%",
              // fixedWidth: "400px",
              drag: true,
            },
          },
          snap: true,
          pagination: false,
          arrows: true,
        }}
      >
        <SplideTrack className="slide">
          <SplideSlide className="slide_img">
            <img
              src={crazee_burger}
              alt="crazee"
              onMouseEnter={() => setHoverable("crazee")}
              onMouseLeave={() => setHoverable("")}

              // onMouseEnter={setHoverable("crazee")}
            />
            <div className="desc_project">
              <h3>
                <a
                  href="https://crazee-burger-alexisl2b.vercel.app/"
                  target="_blank"
                >
                  Crazee-burger
                </a>
              </h3>
              <p className="desc">
                Crazee-burger, une application conçue en React qui sert
                d'échantillon de ce que cette technologie peut offrir.
                L'application, centrée sur la commande de fast-food, intègre une
                base de données Firebase et un panneau d'administration. Bien
                qu'elle ne soit pas encore fonctionnelle et responsive, elle
                préfigure le développement d'une version en React Native.
                "Crazee-burger" témoigne de la diversité et de la complexité des
                projets que l'on peut réaliser avec React.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide className="slide_img">
            <img
              src={aflokkat}
              alt="aflokkat"
              onMouseEnter={() => setHoverable("aflokkat")}
              onMouseLeave={() => setHoverable("")}
              // onMouseEnter={setHoverable("aflokkat")}
            />
            <div className="desc_project">
              <h3>
                <a href="http://hatz4.art/login " target="_blank">
                  AfloSchool
                </a>
              </h3>
              <p className="desc">
                AfloSchool est une application web responsive conçue pour la
                gestion de planning éducatif. Elle offre aux élèves et
                professeurs la possibilité de consulter leurs plannings, tandis
                que le rôle admin peut les modifier. Développée en collaboration
                avec un camarade pour notre certification, ce projet a été
                réalisé en utilisant fullcalendar.js et repose sur une base de
                données MySQL.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide className="slide_img">
            <img
              src={beluga}
              alt="beluga"
              // onMouseEnter={setHoverable("beluga")}
              onMouseEnter={() => setHoverable("beluga")}
              onMouseLeave={() => setHoverable("")}
            />
            <div className="desc_project">
              <h3>
                <a href="https://www.beluga-diving.com/fr/" target="_blank">
                  Beluga-Diving
                </a>
              </h3>
              <p className="desc">
                Beluga-Diving est un site vitrine conçu pour mettre en avant une
                entreprise familiale spécialisée en plongée sous-marine.
                Initialement créé avec WordPress, le site a ensuite été repensé
                et développé avec Joomla pour relever un défi. La version
                finale, basée sur Joomla, est multilingue et a été élaborée en
                utilisant le framework Asteroid
              </p>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </CarouselStyled>
  )
}
const CarouselStyled = styled.div`
  width: 80%;
  height: auto;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 450px;
    height: 450px;
    border-radius: 15px;
    object-fit: cover;
    filter: brightness(0.8);
    position: relative;
    left: 0;
    transition: 0.5s;

    top: 0;
  }
  .splide__slide:hover {
    transition: 0.5s;
    img {
      filter: brightness(0.2);
    }
    .desc_project {
      opacity: 1;
      filter: brightness(1);
      /* left: 50%; */
      /* top: 30%; */
      transform: translateY(20%);
    }
  }
  .desc_project {
    width: 100%;
    transition: 0.8s;
    position: absolute;
    left: 0%;
    top: 0;
    transform: translateY(100%);
    transition: all 0.5s;
    opacity: 0;

    text-align: center;
    .desc {
      margin-top: 20px;
      font-weight: 700;
    }
  }

  .slide {
    border-radius: 15px;
    position: relative;
  }
  .splide__arrow {
    /* background-color: red; */
    svg {
      fill: white;
      &:hover {
        transition: 0.3s;
        fill: #ffba31;
      }
    }
  }
  @media (max-width: 970px) {
    width: 100%;
    .splide__slide img {
      width: 100%;
    }
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
    /* .splide__slide img {
      width: 100%;
    } */
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 375px) {
    width: 375px;
    height: 100%;
  }
  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit; /* Cela prend la couleur du texte environnant, mais vous pouvez également définir une couleur spécifique si vous le souhaitez. */
  }
  a {
    text-decoration: underline;
    transition: text-decoration 1s;
  }
`
