import { styled, css } from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => props.$width && `${props.$width}`};
  align-self: center;
  justify-self: ${(props) => (props.$justify ? `${props.$justify}` : "center")};

  @media (min-width: 768px) {
    width: ${(props) => props.$tabletWidth && `${props.$tabletWidth}`};
    align-self: ${(props) => props.$align && `${props.$align}`};
    justify-self: ${(props) => props.$justify && `${props.$justify}`};
  }

  @media (min-width: 1024px) {
    align-self: ${(props) => props.$alignDesktop && `${props.$alignDesktop}`};
    justify-self: ${(props) =>
      props.$justifyDesktop && `${props.$justifyDesktop}`};
  }
  @media (min-width: 1280px) {
    ${(props) =>
      props.$reservatioPage &&
      css`
        grid-column: 1/3;
        grid-row: 1/2;
      `}
  }
`;

function Logo({
  width,
  tabletWidth,
  align,
  justify,
  justifyDesktop,
  alignDesktop,
  reservatioPage,
}) {
  return (
    <StyledLogo
      src="logo.svg"
      alt="logo"
      $width={width}
      $tabletWidth={tabletWidth}
      $align={align}
      $justify={justify}
      $justifyDesktop={justifyDesktop}
      $alignDesktop={alignDesktop}
      $reservatioPage={reservatioPage}
    />
  );
}

export default Logo;
