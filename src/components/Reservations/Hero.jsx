import { styled } from "styled-components";
import grid from "../../ui/Grid";
import Logo from "../../ui/Logo";
import padding from "../../ui/Padding";
import HeroText from "./HeroText";
import { useDine } from "../../context/DineContext";
import { NavLink } from "react-router-dom";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";
import Form from "./Form";

const StyledHero = styled.div`
  ${grid}
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  width: 100%;
  ${padding}
  ${maxSectionsWidth}

  @media (min-width: 768px) {
    padding-inline: 3.9rem;
  }
  @media (min-width: 1024px) {
    ${padding}
  }

  @media (min-width: 1280px) {
    grid-template-columns: auto auto;
    grid-template-rows: repeat(2, auto);
    row-gap: 17rem;
  }
`;

const StyledNav = styled(NavLink)`
  display: block;
  justify-self: left;
  align-self: center;

  @media (min-width: 1280px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <StyledNav to="/">
        <Logo justify="left" reservatioPage="true" />
      </StyledNav>
      <HeroText />
      <Form smallScreen="none" />
    </StyledHero>
  );
}

export default Hero;
