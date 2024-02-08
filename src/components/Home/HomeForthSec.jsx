import { styled, keyframes } from "styled-components";
import grid from "../../ui/Grid";
import padding from "../../ui/Padding";
import ImageBg from "../../ui/ImageBg";
import HomeForthSecMenu from "./HomeForthSecMenu";
import HomeForthSecDesc from "./HomeForthSecDesc";
import Button from "../../ui/Button";
import flex from "../../ui/Flex";
import { NavLink } from "react-router-dom";
import { useDine } from "../../context/DineContext";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";
import LinesPattern from "../../ui/LinesPattern";

const StyledHomeForthSec = styled.div`
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 10.2rem;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  grid-template-rows: 3fr;
  grid-template-columns: 1fr;
  ${grid}
  ${padding}
  ${maxSectionsWidth}

  @media (min-width: 768px) {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }

  @media (min-width: 1024px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }

  @media (min-width: 1280px) {
    column-gap: 8rem;
    justify-content: space-between;
    align-items: end;
  }
`;

const StyledBg = styled(ImageBg)`
  transition: all 0.4s ease-in-out;
  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 1/3;
    align-self: start;
    position: relative;
  }
  @media (min-width: 1280px) {
    height: 650px;
    max-width: 580px;
  }
`;

const StyledTextBtnCon = styled.div`
  ${flex}
  flex-direction: column;
  gap: 2.7rem;

  @media (min-width: 768px) {
    gap: 6rem;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const StyledPattern = styled(LinesPattern)`
  @media (min-width: 1024px) {
    top: 0;
    left: 0;
    transform: translate(-20%, -50%);
  }
`;

function HomeForthSec() {
  const { menu, handleSroll } = useDine();
  return (
    <StyledHomeForthSec>
      <StyledBg
        $image={
          menu === 1
            ? "./homepage/family-gathering"
            : menu === 2
            ? "./homepage/special-events"
            : "./homepage/social-events"
        }
        $widthDesktop="100%"
        $heightDesktop="450px"
      >
        <StyledPattern />
      </StyledBg>
      <HomeForthSecMenu />
      <StyledTextBtnCon>
        <HomeForthSecDesc />
        <NavLink to="reservations">
          <Button $color="dark" onClick={handleSroll}>
            BOOK A TABLE
          </Button>
        </NavLink>
      </StyledTextBtnCon>
    </StyledHomeForthSec>
  );
}

export default HomeForthSec;
