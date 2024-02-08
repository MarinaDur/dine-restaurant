import { styled, css } from "styled-components";
import flex from "../../ui/Flex";
import { useDine } from "../../context/DineContext";

const StyledHomeForthSecMenu = styled.ul`
  ${flex}
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 2/3;
    flex-direction: column;
    align-items: flex-start;
    align-self: start;
  }
`;

const StyledItem = styled.li`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 2.5px;
  color: var(--cl-brownish-gray);
  position: relative;
  opacity: ${(props) => !props.$active && "0.5"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.$active &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 4.8rem;
        height: 1px;
        background: var(--cl-brown);
      }
    `}

  @media (min-width: 1024px) {
    ${(props) =>
      props.$active &&
      css`
        &::after {
          left: 0;
          transform: translate(-50%, -50%);
          width: 9.5rem;
        }
      `}
  }
  @media (min-width: 1280px) {
    ${(props) =>
      props.$active &&
      css`
        &::after {
          top: 50%;
          left: 0;
          transform: translate(-110%, -50%);
          z-index: 1;
        }
      `}
  }
`;

function HomeForthSecMenu() {
  const { handleMenu, menu } = useDine();
  return (
    <StyledHomeForthSecMenu>
      <StyledItem onClick={() => handleMenu(1)} $active={menu === 1}>
        FAMILY GATHERING
      </StyledItem>
      <StyledItem onClick={() => handleMenu(2)} $active={menu === 2}>
        SPECIAL EVENTS
      </StyledItem>
      <StyledItem onClick={() => handleMenu(3)} $active={menu === 3}>
        SOCIAL EVENTS
      </StyledItem>
    </StyledHomeForthSecMenu>
  );
}

export default HomeForthSecMenu;
