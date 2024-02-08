export function checkDate(value, bigNum, smallNum) {
  if (value === "") return "empty";
  else if (!isNaN(Number(value))) {
    const number = Number(value);

    if (number <= bigNum && number > smallNum) {
      return value.trim();
    }
  }
}

export function returnWithZero(value) {
  if (value) {
    const enteredValue = Number(value);

    if (!isNaN(enteredValue) && enteredValue < 10 && enteredValue > 0) {
      return `0${enteredValue}`;
    } else {
      return value;
    }
  } else {
    return "";
  }
}
