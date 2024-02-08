import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeFifthSec from "./HomeFifthSec";

const StyledHomeFifthSecCon = styled.section`
  background: url("./homepage/ready-bg-mobile.jpg") no-repeat center;
  background-size: cover;
  width: 100%;
  flex-direction: column;
  ${flex}

  @media (min-width: 768px) {
    background: url("./homepage/ready-bg-tablet.jpg") no-repeat center;
    background-size: cover;
  }
  @media (min-width: 768px) {
    background: url("./homepage/ready-bg-desktop.jpg") no-repeat left;
    background-size: cover;
  }
`;

function HomeFifthSecCon() {
  return (
    <StyledHomeFifthSecCon>
      <HomeFifthSec />
    </StyledHomeFifthSecCon>
  );
}

export default HomeFifthSecCon;
