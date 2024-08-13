import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  // 임시데이터 객체 3가지를 만들어 주고 시작한다
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
  // todos에 배열형태로 List를 보관하기 !!
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // onCreate 함수를 만듦
  const onCreate = (content) => {
    const newTodo = {
      // useRef 객체를 사용해서 id의 고유의 값들을 만들어내자
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // 상태변화함수로 값을 넣어야한다
    setTodos([newTodo, ...todos]);
    // 우리가 추가하고자하는 데이터 / 원래 ...(스프레드 연산자)todos 정보들 닮고
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      {/* Editor컴포넌트에 props로 전달 */}
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
};

export default App;
