import { styled } from "styled-components";

const ImageBg = styled.div`
  width: 100%;
  height: 410px;
  background: ${(props) => `url(${props.$image}-mobile.jpg)`} no-repeat bottom;
  background-size: cover;
  box-shadow: 0px 37px 115px -56px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 37px 115px -56px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 37px 115px -56px rgba(0, 0, 0, 0.75);

  @media (min-width: 768px) {
    background: ${(props) => `url(${props.$image}-tablet.jpg)`} no-repeat bottom;
    background-size: cover;
  }

  @media (min-width: 1024px) {
    background: ${(props) => `url(${props.$image}-desktop.jpg)`} no-repeat
      bottom;
    background-size: cover;
    width: ${(props) =>
      props.$widthDesktop ? `${props.$widthDesktop}` : "50%"};
    height: ${(props) =>
      props.$heightDesktop ? `${props.$heightDesktop}` : "600px"};
  }
`;

export default ImageBg;
