import { useState } from "react";

const Counter = () => {
  //   const state = useState();
  const [count, setCount] = useState(0);
  //          초기값 / 상태변화함수 : State를 변경시키는 함수
  // useState로 생성된 초기값 /

  // Component에 state 값이 변경될때 마다 리랜더링이 일어난다 !!
  // 여기서 let li ght = "OFF"; 일때는 리랜더링이 일어나지 않기 때문에 !!
  // 그래서 const [A, setA] = useState(); 의 상태관리가를 하게된다

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
