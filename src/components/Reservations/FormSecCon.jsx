import { styled } from "styled-components";
import flex from "../../ui/Flex";
import FormCon from "./FormCon";

const StyledFormSecCon = styled.section`
  ${flex}
  background: var(--cl-white);
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    background: url("./patterns/pattern-lines.svg") no-repeat,
      url("./patterns/pattern-curve-bottom-right.svg") no-repeat;
    background-size: 150px, cover;
    background-position: 50% 50%, -450px;
    /* height: 100%; */
  }
`;

function FormSecCon() {
  return (
    <StyledFormSecCon>
      <FormCon />
    </StyledFormSecCon>
  );
}

export default FormSecCon;
