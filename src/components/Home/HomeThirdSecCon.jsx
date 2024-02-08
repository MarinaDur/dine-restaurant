import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeThirdSec from "./HomeThirdSec";

const StyledHomeThirdSecCon = styled.section`
  background: var(--cl-dark-gray);
  width: 100%;
  flex-direction: column;
  ${flex}
`;

function HomeThirdSecCon() {
  return (
    <StyledHomeThirdSecCon>
      <HomeThirdSec />
    </StyledHomeThirdSecCon>
  );
}

export default HomeThirdSecCon;
