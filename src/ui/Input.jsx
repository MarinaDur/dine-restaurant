import { styled, css } from "styled-components";
import error from "./Error";

const StyledLabel = styled.label`
  padding-bottom: 1.2rem;
  border-bottom: ${(props) =>
    props.$error
      ? " 1px solid var(--cl-red)"
      : " 1px solid var(--cl-light-gray)"};

  width: 100%;
  display: block;
  position: relative;

  ${(props) =>
    props.$error &&
    (props.$name === "name" || props.$name === "email") &&
    css`
      &::after {
        content: "${props.$error}";
        position: absolute;
        bottom: -1rem;
        left: 1.5rem;
        transform: translateY(100%);
        /* margin-left: 1rem; */
        ${error}
      }
    `}
`;
const StyledInput = styled.input`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: var(--cl-black);
  width: 100%;
  display: block;
  border: none;
  padding-left: ${(props) => props.$pad && "1.5rem"};

  &::placeholder {
    color: ${(props) => (props.$error ? " var(--cl-red)" : " var(--cl-black)")};
    opacity: 0.5;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:disabled {
    background: none;
  }
`;

function Input({
  ph,
  name,
  pad,
  value,
  handleChange,
  error,
  handleBlur,
  handleClick,
  isDisabled,
}) {
  return (
    <StyledLabel $error={error} $name={name}>
      <StyledInput
        type="text"
        name={name}
        placeholder={ph}
        autoComplete={name}
        $pad={pad}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
        $error={error}
        onBlur={handleBlur}
        onClick={handleClick}
      />
    </StyledLabel>
  );
}

export default Input;
