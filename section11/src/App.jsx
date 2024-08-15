import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  // props의 계층적 전달대신 => 다이렉트로 전달하고 싶을때
} from "react";
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

// Props로 인해 리렌더링이 일어나는 component
export const TodoStateContext = createContext();

// context로 리렌더링이 일어나지 않는 component
export const TodoDispatchContext = createContext();

const App = () => {
  // state를 이용해야하는 조상인 부모컴포넌트에서 관리해야한다.
  // todos에 배열형태로 List를 보관하기 !!
  // const [todos, setTodos] = useState(mockData); -- (1) useState

  // useReducer
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // onCreate 함수를 만듬
  // const onCreate = (content) => {
  //   dispatch({
  //     type: "CREATE",
  //     date: {
  //       id: idRef.current++,
  //       isDone: false,
  //       content: content,
  //       date: new Date().getTime(),
  //     },
  //   });
  // };

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // const onUpdate = (targetId) => {
  //   dispatch({
  //     type: "UPDATE",
  //     targetId: targetId,
  //   });
  // };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  // 최적화하고 싶은 인수 / []
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <TodoStateContext.Provider
        // value로 Editor , List , TodoItem 컴포넌트는 데이터를 공급받을수 있다
        value={todos}
      >
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          {/* Editor컴포넌트에 props로 전달 */}
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};

export default App;
