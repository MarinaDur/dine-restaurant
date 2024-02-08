import { styled, css } from "styled-components";
import Input from "../../ui/Input";
import flex from "../../ui/Flex";
import FormDate from "./FormDate";
import SelectOption from "../../ui/SelectOption";
import ForHowMany from "../../ui/ForHowMany";
import SubmitBtn from "../../ui/SubmitBtn";
import { useDine } from "../../context/DineContext";

const StyledForm = styled.form`
  padding: 3.4rem 3.5rem 3.2rem;
  width: 100%;
  background: var(--cl-white);
  margin-top: -13rem;
  z-index: 9999;

  /* box-shadow: 0px 75px 100px -50px rgba(56, 66, 85, 0.5); */
  box-shadow: 0px 20px 150px -5px rgba(56, 66, 85, 0.5);
  ${flex}
  flex-direction: column;
  gap: 3.4rem;
  max-width: 540px;

  @media (min-width: 1280px) {
    ${(props) =>
      props.$largeScreen === "none" &&
      css`
        display: none;
      `}
  }
  @media (max-width: 1279px) {
    ${(props) =>
      props.$smallScreen === "none" &&
      css`
        display: none;
      `}
  }

  @media (min-width: 1280px) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-top: 0;
    padding: 4.8rem 4.8rem 5rem;
  }
`;

function Form({ largeScreen, smallScreen }) {
  const {
    handleName,
    handleEmail,
    handleday,
    handleMonth,
    handleHour,
    handleMinutes,
    name,
    email,
    day,
    month,
    year,
    hour,
    minutes,
    handleSubmit,
    errors,
    handleClickField,
    handleBlur,
  } = useDine();

  const { nameErr, emailErr, dateErr, timeErr } = errors;

  return (
    <StyledForm $largeScreen={largeScreen} $smallScreen={smallScreen}>
      <Input
        ph="Name"
        name="name"
        pad="pad"
        value={name}
        handleChange={handleName}
        error={nameErr}
      />
      <Input
        ph="Email"
        name="email"
        pad="pad"
        value={email}
        handleChange={handleEmail}
        error={emailErr}
      />
      <FormDate type="Pick a date" error={dateErr}>
        <Input
          ph="MM"
          pad="pad"
          value={month}
          handleChange={handleMonth}
          error={dateErr}
          handleBlur={() => handleBlur("month")}
          handleClick={() => handleClickField("month")}
        />
        <Input
          ph="DD"
          pad="pad"
          name="date"
          value={day}
          handleChange={handleday}
          error={dateErr}
          handleBlur={() => handleBlur("day")}
          handleClick={() => handleClickField("day")}
        />
        <Input ph="YY" pad="pad" name="date" value={year} isDisabled={true} />
      </FormDate>
      <FormDate type="Pick a time" error={timeErr}>
        <Input
          ph="09"
          pad="pad"
          name="time"
          value={hour}
          handleChange={handleHour}
          error={timeErr}
          handleBlur={() => handleBlur("hour")}
          handleClick={() => handleClickField("hour")}
        />
        <Input
          ph="00"
          pad="pad"
          name="time"
          value={minutes}
          handleChange={handleMinutes}
          error={timeErr}
          handleBlur={() => handleBlur("minutes")}
          handleClick={() => handleClickField("minutes")}
        />
        <SelectOption />
      </FormDate>
      <ForHowMany />
      <SubmitBtn handleSubmit={handleSubmit} />
    </StyledForm>
  );
}

export default Form;
