import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const HeadingContainer = styled.h1`
  animation: ${slideIn} 1s ease-in-out;
`;

const Heading = () => {
  return (
    <HeadingContainer>
      <div className="text-3xl md:text-5xl px-8 text-gray-500 font-bold font-cursive body-font">Social Enterprise for Community Empowerment</div>

    </HeadingContainer>
  );
};

export default Heading;
