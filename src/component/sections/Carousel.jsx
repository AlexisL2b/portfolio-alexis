import React from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { styled } from "styled-components"
import "@splidejs/react-splide/css/sea-green"

export default function Carousel() {
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
            <img src="src\assets\Crazee-Burger-Alexis(1).png" alt="Image 1" />
          </SplideSlide>
          <SplideSlide className="slide_img">
            <img src="src\assets\aflokkat.png" alt="Image 2" />
          </SplideSlide>
          <SplideSlide className="slide_img">
            <img
              src="src\assets\beluga-diving.png"
              alt="Image 3"
              className="beluga"
            />
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
  .slide_image {
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center;
  }
  img {
    max-width: 100%;
    width: 450px;
    height: 450px;
    border-radius: 15px;
    transition: 0.5s;
    object-fit: cover;
    filter: brightness(0.8);
    position: relative;
    left: 0;
    top: 0;

    &:hover {
      filter: brightness(0.5) blur(3px);
      zoom: 2;
    }
  }
  .beluga {
    /* position: relative;
    top: 10px; /* déplace l'image de 10px vers le bas */
    /* left: 10px;  */
  }
  .slide {
    border-radius: 15px;
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
