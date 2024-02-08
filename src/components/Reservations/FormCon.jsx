import { styled } from "styled-components";
import padding from "../../ui/Padding";
import Form from "./Form";
import flex from "../../ui/Flex";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";

const StyledFormCon = styled.div`
  ${padding}
  width: 100%;
  padding-bottom: 8.6rem;
  ${flex}
  ${maxSectionsWidth}

  @media (min-width: 1280px) {
    display: none;
  }
`;

function FormCon() {
  return (
    <StyledFormCon>
      <Form largeScreen="none" />
    </StyledFormCon>
  );
}

export default FormCon;
