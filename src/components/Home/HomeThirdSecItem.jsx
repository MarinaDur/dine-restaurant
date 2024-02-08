import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Image from "../../ui/Image";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

const StyledHomeThirdSecItem = styled.div`
  ${flex}
  flex-direction: column;
  gap: 4rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }
`;
const StyledTextCon = styled.div`
  ${flex}
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const StyledCon = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 768px) {
    width: 45%;

    &::after {
      content: "";
      width: 32px;
      height: 1px;
      display: block;
      position: absolute;
      background: var(--cl-brown);
      right: -32px;
      top: 20px;
      z-index: 999999;
    }
  }
`;

function HomeThirdSecItem({ image, alt, title, par }) {
  return (
    <StyledHomeThirdSecItem>
      <StyledCon>
        <Image src={image} alt={alt} />
      </StyledCon>
      <StyledTextCon>
        <Heading as="h3" $cl="var(--cl-white)" $align="left">
          {title}
        </Heading>
        <Paragraph $type="small" $cl="var(--cl-white)" $align="left">
          {par}
        </Paragraph>
      </StyledTextCon>
    </StyledHomeThirdSecItem>
  );
}

export default HomeThirdSecItem;
