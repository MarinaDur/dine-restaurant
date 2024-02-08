import { styled } from "styled-components";
import AmPmSelector from "./AmPmSelector";
import flex from "./Flex";
import Paragraph from "./Paragraph";
import { useDine } from "../context/DineContext";

const StyledSelectOption = styled.div`
  border-bottom: 1px solid var(--cl-light-gray);
  /* width: 84.8px; */
  width: 100%;
  padding: 0 1.6rem 1.2rem;
  ${flex}
  gap: 1rem;
  cursor: pointer;
`;

const StyledCon = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: 16px;
  transform: ${(props) => props.$isDropped && " rotate(180deg)"};
  transition: all 0.4s ease-in-out;
`;

function SelectOption() {
  const { handleDrop, isDropped, dropDownTime } = useDine();
  return (
    <StyledCon onClick={handleDrop}>
      <StyledSelectOption>
        <Paragraph $type="select">{dropDownTime}</Paragraph>
        <StyledImg
          src="./icons/icon-arrow.svg"
          alt="icon"
          $isDropped={isDropped}
        />
      </StyledSelectOption>
      <AmPmSelector />
    </StyledCon>
  );
}

export default SelectOption;
