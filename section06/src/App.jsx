import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* 여기서는 viewer 컴포넌트에게 props로 전달해야하고 */}
        <Viewer count={count} />
      </section>
      <section>
        {/* controller에는 이벤트 핸들러 함수를 보내줘야지 값을 공유할수있다 */}
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

// 부모 자식 관계가 아니여서 값을 공유할수가 없다

export default App;
