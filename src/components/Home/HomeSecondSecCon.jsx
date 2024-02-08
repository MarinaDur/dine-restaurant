import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeSecondSec from "./HomeSecondSec";

const StyledHomeSecondSecCon = styled.div`
  background: var(--cl-white);
  width: 100%;
  flex-direction: column;
  gap: 9rem;
  padding-bottom: 8rem;
  position: relative;

  ${flex}

  @media (min-width: 768px) {
    background: var(--cl-white) url("./patterns/pattern-curve-top-left.svg")
      no-repeat left;
    background-position: -530px 140px;
    background-size: 915px;
    gap: 12rem;

    /* &::after {
      content: "";
      position: absolute;
      bottom: 370px;
      right: 50px;
      width: 150px;
      height: 150px;
      background: url("./patterns/pattern-lines.svg") no-repeat;
      z-index: 99999;
    } */
  }

  @media (min-width: 1024px) {
    background-position: -80px 220px;
    background-size: 700px;

    &::after {
      bottom: 300px;
    }
  }

  @media (min-width: 1024px) {
    background-position: -80px 220px;
    background-size: 1000px;

    &::after {
      right: 20px;

      bottom: 300px;
    }
  }
`;

function HomeSecondSecCon() {
  return (
    <StyledHomeSecondSecCon>
      <HomeSecondSec
        image="./homepage/enjoyable-place"
        title="Enjoyable place for all the family"
        par="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        imageMargin="firstPic"
        num="1"
      />
      <HomeSecondSec
        image="./homepage/locally-sourced"
        title="The most locally sourced food"
        par="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
        imageMargin="secPic"
        num="2"
      />
    </StyledHomeSecondSecCon>
  );
}

export default HomeSecondSecCon;
