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
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기내용",
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

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

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
  const onCreate = (createDate, emotionId, content) => {
    // 새로운 일기 추가과정
    // 순서 - (1)
    dispatch({
      type: "CREATE",
      data: {
        // 초기값이 3이기 때문에 후위연산자를 사용해서 그다음부터 증가
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  // 우리가 수정할때 필요한 프로퍼티들은 모두다 필요하다
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createDate, emotionId, content },
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
      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        type={"DEFUALT"}
        text={"123"}
        onClick={() => {
          console.log("버튼 클릭 !!");
        }}
      />
      <Button
        type={"POSITIVE"}
        text={"123"}
        onClick={() => {
          console.log("버튼 클릭 !!");
        }}
      />
      <Button
        type={"NEGATIVE"}
        text={"123"}
        onClick={() => {
          console.log("버튼 클릭 !!");
        }}
      /> */}
      {/* 우리는 Img를 불러올때는 assets폴더에다가 넣고 import로 가져와야한다
          => why ) public폴더에서 URL경로로 파일을 가져오면 안된다 근데 소수의 경우이고 다수이면 public 폴더에 넣자 */}
      {/* <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div> */}
      {/* <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        일기 추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된일기입니다");
        }}
      >
        일기 수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button>
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
