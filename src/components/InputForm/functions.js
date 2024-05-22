export const isDateInputValidate = (inputValue) => {
  const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

  return dateRegExp.test(inputValue);
}

export const isInputValidate = (inputValue) => {
  return inputValue.length > 0;
}

export const isAmountInputValidate = (inputValue) => {
  return Number(inputValue) > 0;
}