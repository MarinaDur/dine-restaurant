import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

const StyledHomeForthSecDesc = styled.div`
  ${flex}
  flex-direction: column;
  gap: 1.3rem;

  @media (min-width: 768px) {
    gap: 1.9rem;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

function HomeForthSecDesc() {
  return (
    <StyledHomeForthSecDesc>
      <Heading as="h2" $width="100%" $align="left">
        Family Gathering
      </Heading>
      <Paragraph $type="small" $maxWidth="40ch" $alignDesktop="left">
        We love catering for entire families. So please bring everyone along for
        a special meal with your loved ones. We’ll provide a memorable
        experience for all.
      </Paragraph>
    </StyledHomeForthSecDesc>
  );
}

export default HomeForthSecDesc;
