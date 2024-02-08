import { styled, css } from "styled-components";
import flex from "../../ui/Flex";

const StyledHomeFooterText = styled.ul`
  ${flex}
  flex-direction: column;
  align-self: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const StyledListItem = styled.li`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cl-white);

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

function HomeFooterText({ first, second, third }) {
  return (
    <StyledHomeFooterText>
      <StyledListItem>{first}</StyledListItem>
      <StyledListItem>{second}</StyledListItem>
      <StyledListItem>{third}</StyledListItem>
    </StyledHomeFooterText>
  );
}

export default HomeFooterText;
