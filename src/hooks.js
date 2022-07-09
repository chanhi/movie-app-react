import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
/*
입력값에 대해서 inspect를 하여 입력값 제한
initialValue는 default 입력값
validator 에 입력으로 const maxLen = value => value.length < 10;처럼 값에 대한 제한을 둬서
입력값을 제한할 수 있음
const name = useInput("Mr.", maxLen);
*/
