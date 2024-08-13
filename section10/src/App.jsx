import { useState, useRef, useReducer } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
// import Exam from "./components/Exam";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

const App = () => {
  // state를 이용해야하는 조상인 부모컴포넌트에서 관리해야한다.
  // todos에 배열형태로 List를 보관하기 !!
  // const [todos, setTodos] = useState(mockData); -- (1) useState

  // useReducer
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // onCreate 함수를 만듬
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      date: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* Editor컴포넌트에 props로 전달 */}
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default App;
