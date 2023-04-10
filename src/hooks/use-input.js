import { useState } from "react";

const useInput = (checkInput) => {
  const [inputValue, setInputValue] = useState("");
  const [hasTouched, setHasTouched] = useState(false);

  const validText = checkInput(inputValue);
  const hasError = !validText && hasTouched;

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setHasTouched(false);
  };

  const handleOnBlur = () => {
    setHasTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setHasTouched(false);
  };
  return {
    inputValue,
    validText,
    hasError,
    handleOnChange,
    handleOnBlur,
    resetInput,
  };
};

export default useInput;
