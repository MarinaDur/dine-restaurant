import { styled } from "styled-components";
import flex from "./Flex";
import Paragraph from "./Paragraph";
import { useDine } from "../context/DineContext";

const StyledAmPmSelector = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
  height: ${(props) => (props.$isDropped ? "85px" : "0")};
  width: 100%;
  position: absolute;
  bottom: -5px;
  left: 0;
  transform: translateY(100%);
  background: var(--cl-white);
  /* padding: 1.3rem 0; */
  gap: 1rem;
  box-shadow: 0px 15px 25px 0px rgba(56, 66, 85, 0.25);
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  cursor: pointer;
`;

const StyledCon = styled.div`
  width: 100%;
  padding-inline: 1.6rem;
  position: relative;
  padding-left: 3rem;

  @media (min-width: 768px) {
    padding-right: 3rem;
    padding-left: 4rem;
  }
`;

const StyledImg = styled.img`
  width: 1rem;
  padding-bottom: 5px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(50%, -50%);

  @media (min-width: 768px) {
    left: 1.3rem;
  }
`;

function AmPmSelector() {
  const { isDropped, handleDropDown, dropDownTime } = useDine();
  return (
    <StyledAmPmSelector $isDropped={isDropped}>
      <StyledCon>
        {dropDownTime === "AM" && (
          <StyledImg src="./icons/icon-check.svg" alt="check" />
        )}
        <Paragraph $type="select" onClick={() => handleDropDown("AM")}>
          AM
        </Paragraph>
      </StyledCon>
      <StyledCon>
        {dropDownTime === "PM" && (
          <StyledImg src="./icons/icon-check.svg" alt="check" />
        )}
        <Paragraph $type="select" onClick={() => handleDropDown("PM")}>
          PM
        </Paragraph>
      </StyledCon>
    </StyledAmPmSelector>
  );
}

export default AmPmSelector;
