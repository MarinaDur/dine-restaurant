import { styled } from "styled-components";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import flex from "../../ui/Flex";

const StyledHomeHeroText = styled.div`
  gap: 2.1rem;
  flex-direction: column;
  ${flex}

  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 507px;
  }
`;

function HomeHeroText() {
  return (
    <StyledHomeHeroText>
      <Heading as="h1" $cl="var(--cl-white)" $align="left">
        Exquisite dining since 1989
      </Heading>
      <Paragraph $type="small" $cl="var(--cl-white)" $alignDesktop="left">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </Paragraph>
    </StyledHomeHeroText>
  );
}

export default HomeHeroText;
