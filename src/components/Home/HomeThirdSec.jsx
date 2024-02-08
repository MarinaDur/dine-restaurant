import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeThirdSecDesc from "./HomeThirdSecDesc";
import padding from "../../ui/Padding";
import HomeThirdSecItems from "./HomeThirdSecItems";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";

const StyledHomeThirdSec = styled.div`
  width: 100%;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 10.2rem;
  gap: 8.5rem;
  ${flex}
  ${padding}
  ${maxSectionsWidth}

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 12rem;
    padding-bottom: 10rem;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 17rem;
    padding-bottom: 13rem;
    justify-content: space-between;
  }
`;

function HomeThirdSec() {
  return (
    <StyledHomeThirdSec>
      <HomeThirdSecDesc />
      <HomeThirdSecItems />
    </StyledHomeThirdSec>
  );
}

export default HomeThirdSec;
