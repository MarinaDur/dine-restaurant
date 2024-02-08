import { styled, css } from "styled-components";
import flex from "../../ui/Flex";
import ImageBg from "../../ui/ImageBg";
import padding from "../../ui/Padding";
import HomeSecondSecText from "./HomeSecondSecText";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";
import LinesPattern from "../../ui/LinesPattern";

const StyledHomeSecondSec = styled.section`
  width: 100%;
  flex-direction: column;
  gap: 4rem;
  ${flex}
  ${padding}
  ${maxSectionsWidth}

  @media (min-width: 1024px) {
    flex-direction: ${(props) => (props.$num === "2" ? "row-reverse" : "row")};
  }
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

const StyledImage = styled(ImageBg)`
  margin-top: ${(props) => (props.$imageMargin === "firstPic" ? "-7rem" : "0")};

  @media (min-width: 768px) {
    margin-top: ${(props) =>
      props.$imageMargin === "firstPic" ? "-9rem" : "0"};
  }

  @media (min-width: 1024px) {
    margin-top: ${(props) =>
      props.$imageMargin === "firstPic" ? "-3rem" : "0"};
    margin-bottom: ${(props) =>
      props.$imageMargin === "firstPic" ? "0" : "-11rem"};

    ${(props) =>
      props.$num === "2" &&
      css`
        position: relative;
      `}
  }
  @media (min-width: 1280px) {
    margin-top: ${(props) =>
      props.$imageMargin === "firstPic" ? "-9rem" : "0"};
    margin-bottom: ${(props) =>
      props.$imageMargin === "firstPic" ? "0" : "-15rem"};
    height: 800px;
    max-width: 600px;
  }
`;

const StyledLinesPattern = styled(LinesPattern)`
  @media (min-width: 1024px) {
    top: 40%;
    left: 100%;
    transform: translateX(-60%);
  }
  @media (min-width: 1280px) {
    transform: translateX(-80%);
  }
  @media (min-width: 1380px) {
    transform: translateX(-40%);
  }
`;

function HomeSecondSec({ image, title, par, imageMargin, num }) {
  return (
    <StyledHomeSecondSec $num={num}>
      <StyledImage $image={image} $imageMargin={imageMargin} $num={num}>
        {num === "2" && <StyledLinesPattern />}
      </StyledImage>
      <HomeSecondSecText title={title} par={par} />
    </StyledHomeSecondSec>
  );
}

export default HomeSecondSec;
