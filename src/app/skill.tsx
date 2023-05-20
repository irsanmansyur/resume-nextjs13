"use client";

import { styled } from "styled-components";

type Props = {};
export const Skill = ({ ...props }: Props) => {
  return (
    <DivStyled className="relative ">
      <h2 className="md:text-4xl font-bold flex md:items-center gap-4 flex-col md:flex-row ">
        <span className="font-extrabold md:text-5xl text-2xl text-primary">Develover</span>
        <div className="relative">
          <span className="skill text-2xl text-transparent whitespace-nowrap">`Frontend` || `Backend`</span>
          <div className="skillCursor absolute top-0 left-0 w-0 h-full scale-105 border-r-2 border-primary " />
        </div>
      </h2>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  .skill {
    -webkit-text-stroke: 0.7px #10b981;
    background-image: linear-gradient(#10b981, #10b981);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    animation: homeBgText 6s linear infinite;
    animation-delay: 2s;
  }
  .skillCursor {
    animation: homeCursorText 6s linear infinite;
    animation-delay: 2s;
  }
`;
