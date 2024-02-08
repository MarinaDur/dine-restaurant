import { styled, css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 300;
      letter-spacing: -0.4px;
      text-align: center;
      color: ${(props) => (props.$cl ? `${props.$cl}` : "var(--cl-dark-blue)")};
      width: 12ch;
      line-height: 1.2;

      @media (min-width: 768px) {
        font-size: 4.8rem;
        letter-spacing: -0.6px;
      }
      @media (min-width: 1024px) {
        text-align: ${(props) => props.$align && `${props.$align}`};
      }
      @media (min-width: 1280px) {
        font-size: 8rem;
        letter-spacing: -1px;
      }
    `};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.2rem;
      text-align: center;
      font-weight: 700;
      line-height: 40px; /* 100% */
      letter-spacing: -0.4px;
      color: ${(props) =>
        props.$cl ? `${props.$cl}` : "var(--cl-dark-grayish-blue)"};
      width: ${(props) => (props.$width ? `${props.$width}` : "12ch")};

      @media (min-width: 768px) {
        font-size: 4.8rem;
        line-height: 48px; /* 100% */
        letter-spacing: -0.5px;
        width: ${(props) => props.$widthTablet && `${props.$widthTablet}`};
      }

      @media (min-width: 1024px) {
        text-align: ${(props) => props.$align && `${props.$align}`};
        width: ${(props) => props.$widthDesktop && `${props.$widthDesktop}`};
      }
      @media (min-width: 1280px) {
        width: ${(props) =>
          props.$widthDesktopLarge && `${props.$widthDesktopLarge}`};
      }
    `};

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 24px; /* 120% */
      letter-spacing: -0.25px;
      color: ${(props) => (props.$cl ? `${props.$cl}` : "var(--cl-dark-blue)")};

      @media (min-width: 768px) {
        text-align: ${(props) => props.$align && `${props.$align}`};
        font-size: 2rem;
      }
    `};
`;

export default Heading;
