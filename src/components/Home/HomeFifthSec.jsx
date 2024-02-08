import { styled } from "styled-components";
import flex from "../../ui/Flex";
import padding from "../../ui/Padding";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";
import { useDine } from "../../context/DineContext";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";

const StyledHomeFifthSec = styled.div`
  flex-direction: column;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
  gap: 2rem;
  ${padding}
  ${flex}
  ${maxSectionsWidth}

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledButton = styled(Button)`
  background: transparent;
`;

function HomeFifthSec() {
  const { handleSroll } = useDine();
  return (
    <StyledHomeFifthSec>
      <Heading
        as="h2"
        $cl="var(--cl-white)"
        $width="14ch"
        $widthTablet="25ch"
        $widthDesktop="50%"
        $align="left"
        $widthDesktopLarge="60%"
      >
        Ready to make a reservation?
      </Heading>
      <NavLink to="reservations">
        <StyledButton onClick={handleSroll}>BOOK A TABLE</StyledButton>
      </NavLink>
    </StyledHomeFifthSec>
  );
}

export default HomeFifthSec;
