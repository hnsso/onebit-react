import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";

import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

// ============ component ============
import Button from "./components/Button";
import Header from "./components/Header";
import { useReducer, useRef, createContext } from "react";

// ===================================

// 임시 데이터 객체 배열로 만들어 놓기
const mokData = [
  {
    // 4개의 프로퍼티를 같는 객체
    id: 1,
    createdDate: new Date("2024-07-19").getTime(),
    emotionId: 1,
    content: "1번 일기내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-08-18").getTime(),
    emotionId: 2,
    content: "2번 일기내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-08-07").getTime(),
    emotionId: 3,
    content: "3번 일기내용",
  },
];

// state는 배열안 객체 , action함수는 dispatch의 객체
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      // 여기서 state는 배열안 객체들을 말한다 그래서 객체들을 순회한다는 의미이다
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      // filter메서드는 남겨두는거다
      return state.filter((item) => String(item.id) !== String(action.id));
  }
};

// 1 . 우리는 날짜관련된 데이터들을 Hoem컴포넌트로 가져가야한다
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
const App = () => {
  // useReducer를 사용한 초기값
  // 앞으로 data는 우리가 담을 객체에대한 프로퍼티로 하자
  const [data, dispatch] = useReducer(reducer, mokData);

  // 글이 작성될때마다 아이디가 추가 useRef();
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기 추가과정
    // 순서 - (1)
    dispatch({
      type: "CREATE",
      data: {
        // 초기값이 3이기 때문에 후위연산자를 사용해서 그다음부터 증가
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  // 우리가 수정할때 필요한 프로퍼티들은 모두다 필요하다
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, emotionId, content },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* 데이터 공급을 위한 createContext */}
      <DiaryStateContext.Provider value={data}>
        {/* 상태변화함수 공급 !! */}
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* URL Parmeter로 이동함 */}
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};

export default App;
