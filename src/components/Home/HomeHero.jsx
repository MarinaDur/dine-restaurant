import { styled } from "styled-components";
import Logo from "../../ui/Logo";
import HomeHeroText from "./HomeHeroText";
import Button from "../../ui/Button";
import padding from "../../ui/Padding";
import grid from "../../ui/Grid";
import { NavLink } from "react-router-dom";
import { useDine } from "../../context/DineContext";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";
import flex from "../../ui/Flex";

const StyledHomeHero = styled.div`
  height: 74.8rem;
  width: 100%;
  background: url("./homepage/hero-bg-mobile.jpg") no-repeat center;
  background-size: cover;
  ${flex}
  align-items: start;

  @media (min-width: 768px) {
    background: url("./homepage/hero-bg-tablet.jpg") no-repeat center;
    background-size: cover;
    min-height: 99.2rem;
  }

  @media (min-width: 1024px) {
    background: url("./homepage/hero-bg-desktop.jpg") no-repeat center;
    background-size: cover;
    min-height: 35rem;
    align-items: flex-start;
  }
  @media (min-width: 1280px) {
    height: 83rem;
  }
`;

const StyledHomeCon = styled.div`
  grid-template-rows: 230px 1fr;
  justify-items: center;
  width: 100%;
  align-items: flex-start;

  ${maxSectionsWidth}
  ${padding}
  ${grid}

  @media (min-width: 768px) {
    grid-template-rows: 380px 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-rows: 50px 1fr;
    grid-template-columns: 1fr;
    justify-content: left;
  }
  @media (min-width: 1024px) {
  }
`;

const StyledConFiller = styled.div``;

const StyledTextCon = styled.div`
  width: 100%;
  gap: 3.6rem;
  ${maxSectionsWidth}

  ${grid}

  @media (min-width: 1024px) {
    gap: 12rem;
  }
`;

const StyledTextConWithBtn = styled.div`
  width: 100%;
  gap: 5.3rem;
  justify-items: center;
  ${grid}

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-items: left;
  }
`;

const StyledButton = styled(Button)`
  width: 245px;
`;

function HomeHero() {
  const { topOfPageRef, handleSroll } = useDine();

  return (
    <StyledHomeHero ref={topOfPageRef}>
      <StyledHomeCon>
        <StyledConFiller />
        <StyledTextCon>
          <Logo width="82.4px" tabletWidth="103px" justifyDesktop="left" />
          <StyledTextConWithBtn>
            <HomeHeroText />
            <NavLink to="reservations">
              <StyledButton onClick={handleSroll}>BOOK A TABLE</StyledButton>
            </NavLink>
          </StyledTextConWithBtn>
        </StyledTextCon>
      </StyledHomeCon>
    </StyledHomeHero>
  );
}

export default HomeHero;
