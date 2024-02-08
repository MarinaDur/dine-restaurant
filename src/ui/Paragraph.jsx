import { styled, css } from "styled-components";

const Paragraph = styled.p`
  ${(props) =>
    props.$type === "small" &&
    css`
      text-align: center;
      font-weight: 400;
      line-height: 26px;
      color: ${(props) => (props.$cl ? `${props.$cl}` : "var(--cl-dark-blue)")};

      @media (min-width: 768px) {
        font-size: 2rem;
        font-weight: 400;
        line-height: 30px;
        max-width: ${(props) => props.$maxWidth && `${props.$maxWidth}`};
        text-align: ${(props) => props.$align && `${props.$align}`};
      }

      @media (min-width: 1024px) {
        text-align: ${(props) =>
          props.$alignDesktop && `${props.$alignDesktop}`};
        max-width: ${(props) =>
          props.$maxWidthDesktop && `${props.$maxWidthDesktop}`};
      }
    `};

  ${(props) =>
    props.$type === "select" &&
    css`
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      color: ${(props) => (props.$cl ? `${props.$cl}` : "var(--cl-black)")};

      @media (min-width: 768px) {
        text-align: center;
      }
    `};

  ${(props) =>
    props.$type === "peopleNum" &&
    css`
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.25px;
      color: ${(props) =>
        props.$cl ? `${props.$cl}` : "var(--cl-light-black)"};
    `};
`;

export default Paragraph;
