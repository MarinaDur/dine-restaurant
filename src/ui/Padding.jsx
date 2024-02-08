import { css } from "styled-components";

const padding = css`
  padding-inline: 2.4rem;
  @media (min-width: 768px) {
    padding-inline: 9.7rem;
  }
  @media (min-width: 1280px) {
    padding-inline: 0;
  }
`;

export default padding;
