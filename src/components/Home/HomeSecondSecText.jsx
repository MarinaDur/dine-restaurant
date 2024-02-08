import { styled } from "styled-components";
import flex from "../../ui/Flex";
import Divider from "../../ui/Divider";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

const StyledHomeSecondText = styled.div`
  ${flex}
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const StyledTextCon = styled.div`
  ${flex}
  flex-direction: column;
  gap: 1.3rem;
  @media (min-width: 768px) {
    gap: 2.7rem;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

function HomeSecondSecText({ title, par }) {
  return (
    <StyledHomeSecondText>
      <Divider />
      <StyledTextCon>
        <Heading as="h2" $align="left">
          {title}
        </Heading>
        <Paragraph $type="small" $maxWidth="38ch" $alignDesktop="left">
          {par}
        </Paragraph>
      </StyledTextCon>
    </StyledHomeSecondText>
  );
}

export default HomeSecondSecText;
