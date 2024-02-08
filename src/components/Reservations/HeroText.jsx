import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

const StyledHeroText = styled.div`
  ${flex}
  flex-direction: column;
  gap: 1.3rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: start;
  }
`;

function HeroText() {
  return (
    <StyledHeroText>
      <Heading as="h1" $cl="var(--cl-white)" $align="left">
        Reservations
      </Heading>
      <Paragraph
        $type="small"
        $cl="var(--cl-white)"
        $maxWidth="50ch"
        $alignDesktop="left"
        $maxWidthDesktop="40ch"
      >
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </Paragraph>
    </StyledHeroText>
  );
}

export default HeroText;
