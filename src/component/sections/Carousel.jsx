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
          breakpoints: {
            400: {
              perPage: 1,
              fixedHeight: 400,
              width: "400",
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
  align-items: center;
  justify-content: center;

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
    /* 
    &:hover {
      filter: brightness(0.5) blur(3px);
      zoom: 2;

      &::before {
        content: "OUI C MOI";
        color: red;
      }
    } */
  }
  .splide__slide:hover {
    transition: 0.5s;
    img {
      filter: brightness(0.2);
    }
    .desc_project {
      opacity: 1;
      filter: brightness(1);
      left: 50%;
      top: 30%;
      transform: translate(-50%);
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
`
