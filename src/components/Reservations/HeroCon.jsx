import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Hero from "./Hero";

const StyledHeroCon = styled.section`
  height: 600px;
  width: 100%;
  background: url("./booking/hero-bg-mobile.jpg") no-repeat top;
  background-size: cover;
  ${flex}
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    background: url("./booking/hero-bg-tablet.jpg") no-repeat top;
    background-size: cover;
  }
  @media (min-width: 1024px) {
    background: url("./booking/hero-bg-desktop.jpg") no-repeat top;
    background-size: cover;
  }
  @media (min-width: 1280px) {
    padding-top: 5rem;
  }
`;

function HeroCon() {
  return (
    <StyledHeroCon>
      <Hero />
    </StyledHeroCon>
  );
}

export default HeroCon;
