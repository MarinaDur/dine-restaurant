import { styled } from "styled-components";
import HomeHero from "./HomeHero";
import HomeSecondSecCon from "./HomeSecondSecCon";
import HomeThirdSecCon from "./HomeThirdSecCon";
import HomeForthSecCon from "./HomeForthSecCon";
import HomeFifthSecCon from "./HomeFifthSecCon";
import HomeFooterCon from "./HomeFooterCon";

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <HomeHero />
      <HomeSecondSecCon />
      <HomeThirdSecCon />
      <HomeForthSecCon />
      <HomeFifthSecCon />
      <HomeFooterCon />
    </StyledHome>
  );
}

export default Home;
