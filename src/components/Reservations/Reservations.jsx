import { styled } from "styled-components";
import HeroCon from "./HeroCon";
import FormSecCon from "./FormSecCon";
import HomeFooterCon from "../Home/HomeFooterCon";
import grid from "../../ui/Grid";

const StyledReservations = styled.div`
  ${grid}
  min-height: 100vh;
  grid-template-rows: auto minmax(400px, 1fr) auto;
`;

function Reservations() {
  return (
    <StyledReservations>
      <HeroCon />
      <FormSecCon />
      <HomeFooterCon />
    </StyledReservations>
  );
}

export default Reservations;
