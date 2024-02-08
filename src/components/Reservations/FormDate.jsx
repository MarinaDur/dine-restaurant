import { styled, css } from "styled-components";
import flex from "../../ui/Flex";
import grid from "../../ui/Grid";
import error from "../../ui/Error";

const StyledFormDate = styled.fieldset`
  border: none;
  background: transparent;
  width: 100%;
`;

const StyledCon = styled.div`
  ${flex}
  gap: 0.8rem;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledLegend = styled.legend`
  color: ${(props) => (props.$error ? " var(--cl-red)" : "var(--cl-black)")};
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  ${(props) =>
    props.$error &&
    css`
      &::after {
        content: "${props.$error}";
        margin-left: 1rem;
        ${error}

        @media (min-width: 768px) {
          display: block;
          margin-left: 0;
        }
      }
    `}
`;

const StyledInputCon = styled.div`
  width: 100%;
  gap: 1.5rem;
  align-items: flex-start;
  ${grid}
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    width: 70%;
  }
`;

function FormDate({ type, children, error }) {
  return (
    <StyledFormDate>
      <StyledCon>
        <StyledLegend $error={error}>{type}</StyledLegend>
        <StyledInputCon>{children}</StyledInputCon>
      </StyledCon>
    </StyledFormDate>
  );
}

export default FormDate;
