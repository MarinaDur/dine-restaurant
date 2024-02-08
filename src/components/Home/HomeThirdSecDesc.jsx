import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Divider from "../../ui/Divider";

const StyledHomeThirdSecDesc = styled.div`
  flex-direction: column;
  gap: 3.6rem;
  position: relative;
  ${flex}

  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 40%;
  }
`;
const StyledTextCon = styled.div`
  flex-direction: column;
  gap: 1.3rem;

  ${flex}

  @media (min-width: 768px) {
    gap: 2.7rem;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

function HomeThirdSecDesc() {
  return (
    <StyledHomeThirdSecDesc>
      <Divider thirdSec="thirdSec" />
      <StyledTextCon>
        <Heading
          as="h2"
          $cl="var(--cl-white)"
          $width="17ch"
          $align="left"
          $widthDesktop="10ch"
          $widthDesktopLarge="18ch"
        >
          A few highlights from our menu
        </Heading>
        <Paragraph
          $type="small"
          $cl="var(--cl-white)"
          $maxWidth="37ch"
          $alignDesktop="left"
        >
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </Paragraph>
      </StyledTextCon>
    </StyledHomeThirdSecDesc>
  );
}

export default HomeThirdSecDesc;
