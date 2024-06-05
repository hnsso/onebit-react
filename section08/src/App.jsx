import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  //
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

const App = () => {
  // state를 이용해야하는 조상인 부모컴포넌트에서 관리해야한다.
  const [todos, setTodos] = useState(mockData);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
};

export default App;
