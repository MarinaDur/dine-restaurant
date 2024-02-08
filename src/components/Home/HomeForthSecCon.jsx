import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeForthSec from "./HomeForthSec";

const StyledHomeForthSecCon = styled.section`
  background: var(--cl-white);
  width: 100%;
  flex-direction: column;
  position: relative;

  ${flex}

  @media (min-width: 768px) {
    background: var(--cl-white) url("./patterns/pattern-curve-top-right.svg")
      no-repeat left top;
    background-size: 400px 300px;
    /* background-position: 300% 140px; */

    /* &::after {
      content: "";
      position: absolute;
      top: 82px;
      left: 40px;
      width: 150px;
      height: 150px;
      background: url("./patterns/pattern-lines.svg") no-repeat;
      z-index: 99999;
    } */
  }

  @media (min-width: 1280px) {
    &::after {
      top: 82px;
      left: 20px;
    }
  }
`;

function HomeForthSecCon() {
  return (
    <StyledHomeForthSecCon>
      <HomeForthSec />
    </StyledHomeForthSecCon>
  );
}

export default HomeForthSecCon;
