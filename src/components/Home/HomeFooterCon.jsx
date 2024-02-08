import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeFooter from "./HomeFooter";
import grid from "../../ui/Grid";

const StyledHomeFooterCon = styled.footer`
  /* ${flex} */
  ${grid}
  width: 100%;
  justify-items: center;
  background: var(--cl-dark-gray);
  align-items: end;
  justify-self: end;
`;

function HomeFooterCon() {
  return (
    <StyledHomeFooterCon>
      <HomeFooter />
    </StyledHomeFooterCon>
  );
}

export default HomeFooterCon;
