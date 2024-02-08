import { styled } from "styled-components";
import grid from "../../ui/Grid";
import padding from "../../ui/Padding";
import Logo from "../../ui/Logo";
import HomeFooterText from "./HomeFooterText";
import flex from "../../ui/Flex";
import maxSectionsWidth from "../../ui/MaxSectionsWidth";

const StyledHomeFooter = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  padding-top: 8rem;
  padding-bottom: 8rem;
  gap: 4rem;
  width: 100%;
  ${padding}
  ${grid}
  ${maxSectionsWidth}


  @media (min-width: 768px) {
    justify-items: start;
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    padding-inline: 3.9rem;
    justify-items: left;
    gap: 0;
  }
  @media (min-width: 1024px) {
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
  }
  @media (min-width: 1280px) {
    padding-inline: 0;
  }
`;

const TextCon = styled.div`
  justify-self: center;
  gap: 4rem;
  flex-direction: column;
  ${flex}
  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    grid-row: 1/2;
    width: 70%;
  }
`;

function HomeFooter() {
  return (
    <StyledHomeFooter>
      <Logo alignDesktop="start" />
      <TextCon>
        <HomeFooterText
          first="Marthwaite, Sedbergh"
          second="Cumbria"
          third="+00 44 123 4567"
        />

        <HomeFooterText
          first="OPEN TIMES"
          second="MON - FRI: 09:00 AM - 10:00 PM"
          third="SAT - SUN: 09:00 AM - 11:30 PM"
        />
      </TextCon>
    </StyledHomeFooter>
  );
}

export default HomeFooter;
