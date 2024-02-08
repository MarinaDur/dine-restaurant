import { styled, css } from "styled-components";

const StyledDivider = styled.div`
  @media (min-width: 1280px) {
    ${(props) =>
      props.$thirdSec &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, -70px);
      `}
  }
`;
const StyledImage = styled.img``;

function Divider({ thirdSec }) {
  return (
    <StyledDivider $thirdSec={thirdSec}>
      <StyledImage src="./patterns/pattern-divide.svg" alt="pattern-divider" />
    </StyledDivider>
  );
}

export default Divider;
