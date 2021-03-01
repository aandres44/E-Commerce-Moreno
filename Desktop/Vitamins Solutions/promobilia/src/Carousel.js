import react, { useState } from "react";
import styled from "@emotion/styled";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.css";

const Carousel = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1614251944909-11aaa27d6b11?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFJfRnluLUd3dGx3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558942548-89bf85600e32?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fFJfRnluLUd3dGx3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597098079673-d241199656dd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fFJfRnluLUd3dGx3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1482867899247-e295efdd8c1a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfFJfRnluLUd3dGx3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613553483056-c8cb4c5d2a7b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfFJfRnluLUd3dGx3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <FaArrowAltCircleLeft
        style={{ width: "25%" }}
        className="left"
        onClick={prevSlide}
      />
      {data.map((obj, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={obj.image} alt="Image" className="image" />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight
        style={{ width: "25%" }}
        className="right"
        onClick={nextSlide}
      />
    </Slider>
  );
};

const Slider = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  margin-top: 6%;
`;

export default Carousel;
