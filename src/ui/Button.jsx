import { styled, css } from "styled-components";

const colors = {
  dark: css`
    color: var(--cl-white);
    border: 1px solid var(--cl-white);
    opacity: ${(props) => props.$type === "inactive" && "0.7"};
    background: var(--cl-dark-gray);

    &:hover {
      background: var(--cl-white);
      color: var(--cl-dark-blue);
      border: 1px solid var(--cl-dark-blue);
    }
  `,
  light: css`
    color: var(--cl-dark-gray);
    border: 1px solid var(--cl-dark-gray);
    opacity: ${(props) => props.$type === "inactive" && "0.7"};
    background: transparent;

    &:hover {
      background-color: var(--cl-dark-gray);
      color: var(--cl-white);
    }
  `,
};

const Button = styled.button`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 16px; /* 94.118% */
  letter-spacing: 2.5px;
  padding-top: 2.5rem;
  padding-bottom: 2.3rem;
  padding-inline: 4.8rem;
  transition: all 0.3s ease-in-out;

  ${(props) => colors[props.$color]}
`;

Button.defaultProps = {
  $color: "dark",
};

export default Button;
