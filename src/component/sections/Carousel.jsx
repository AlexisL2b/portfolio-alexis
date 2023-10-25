import React, { useState } from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { styled } from "styled-components"
import "@splidejs/react-splide/css/sea-green"

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
            970: {
              perPage: 1,
              width: "600px",
              drag: true,
            },
            768: {
              perPage: 1,
              width: "100%",
              drag: true,
            },
            480: {
              perPage: 1,
              width: "150%",
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
              src="src\assets\Crazee-Burger-Alexis(1).png"
              alt="crazee"
              onMouseEnter={() => setHoverable("crazee")}
              onMouseLeave={() => setHoverable("")}

              // onMouseEnter={setHoverable("crazee")}
            />
            <div className="desc_project">
              <h3>DESC</h3>
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur earum repellendus unde veniam autem explicabo at ut
                error officiis sunt, iste voluptates cum similique, veritatis
                repellat ipsa sapiente. Explicabo, consequuntur?
              </p>
            </div>
          </SplideSlide>

          <SplideSlide className="slide_img">
            <img
              src="src\assets\aflokkat.png"
              alt="aflokkat"
              onMouseEnter={() => setHoverable("aflokkat")}
              onMouseLeave={() => setHoverable("")}
              // onMouseEnter={setHoverable("aflokkat")}
            />
            <div className="desc_project">
              <h3>DESC</h3>
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur earum repellendus unde veniam autem explicabo at ut
                error officiis sunt, iste voluptates cum similique, veritatis
                repellat ipsa sapiente. Explicabo, consequuntur?
              </p>
            </div>
          </SplideSlide>
          <SplideSlide className="slide_img">
            <img
              src="src\assets\beluga-diving.png"
              alt="beluga"
              // onMouseEnter={setHoverable("beluga")}
              onMouseEnter={() => setHoverable("beluga")}
              onMouseLeave={() => setHoverable("")}
            />
            <div className="desc_project">
              <h3>DESC</h3>
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur earum repellendus unde veniam autem explicabo at ut
                error officiis sunt, iste voluptates cum similique, veritatis
                repellat ipsa sapiente. Explicabo, consequuntur?
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
  height: 80%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-self: center;
  justify-self: center;

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
      transform: translateY(80%);
    }
  }
  .desc_project {
    width: 100%;
    transition: 0.8s;
    position: absolute;
    left: 0%;
    top: 0%;
    transform: translateY(-50%);
    transition: all 0.5s;
    opacity: 0;
    text-align: center;
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
    width: 100%;
    height: 100%;
  }
  @media (max-width: 375px) {
    width: 375px;
    height: 100%;
  }
`
