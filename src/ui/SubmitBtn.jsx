import { styled } from "styled-components";
import Button from "./Button";

const StyledSubmitBtn = styled(Button)``;

function SubmitBtn({ handleSubmit }) {
  return (
    <StyledSubmitBtn
      as="input"
      type="submit"
      value="MAKE RESERVATION"
      onClick={handleSubmit}
    />
  );
}

export default SubmitBtn;
