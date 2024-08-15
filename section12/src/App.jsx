import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";

// =====================================

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      {/* 우리는 Img를 불러올때는 assets폴더에다가 넣고 import로 가져와야한다
          => why ) public폴더에서 URL경로로 파일을 가져오면 안된다 근데 소수의 경우이고 다수이면 public 폴더에 넣자 */}
      <div>
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
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* URL Parmeter로 이동함 */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
