import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // React.js 라이프사이클
  // 1. 마운트 : 탄생
  useEffect(() => {
    //  첫번째함수인 콜백함수를 실행시켜준다
    console.log("mount");
  }, []);
  //  deps에 state 값이 변경될때마다 콜백함수를 실행시킨다
  //  = 의존성 배열 (dependency array) = deps

  // 2. 업데이트 : 변화 , 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      {/* 그럴러면 props를 사용해야하는데 */}
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          // 이렇게되면 input태그에 입력된 값은
          // input state에 보관된다 !!
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

// 부모 자식 관계가 아니여서 값을 공유할수가 없다

export default App;
