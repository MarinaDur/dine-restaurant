import { styled } from "styled-components";
import flex from "./Flex";
import Paragraph from "./Paragraph";
import { useDine } from "../context/DineContext";

const StyledForHowMany = styled.div`
  border-bottom: 1px solid var(--cl-light-gray);
  width: 100%;
  padding: 0 1.9rem 1.2rem;
  ${flex}
  justify-content: space-between;
`;

const StyledImg = styled.img`
  cursor: pointer;
`;

function ForHowMany() {
  const { handleIncreaseAmount, handleLowerAmount, amount } = useDine();
  return (
    <StyledForHowMany>
      <StyledImg
        src="./icons/icon-minus.svg"
        alt="less"
        onClick={handleLowerAmount}
      />
      <Paragraph $type="peopleNum">
        {amount} {amount > 1 ? "people" : "person"}
      </Paragraph>
      <StyledImg
        src="./icons/icon-plus.svg"
        alt="more"
        onClick={handleIncreaseAmount}
      />
    </StyledForHowMany>
  );
}

export default ForHowMany;
