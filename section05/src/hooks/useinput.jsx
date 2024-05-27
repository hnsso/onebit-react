import { useState } from "react";

// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.
//  원래는 getInput이지만 커스텀 훅을 이용하여 useInput
const useInput = () => {
  // state는 사용자의 입력을 처리해주는 !!
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
};

export default useInput;
