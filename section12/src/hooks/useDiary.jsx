import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// use를 붙이면 커스텀 훅이된다
const useDiary = (id) => {
  const [curDiaryItem, setCurDiaryItem] = useState();
  // 우리가 Detail 페이지로 들어갔을때 이전 작성한 데이터들을 가져와야하기때문에
  const data = useContext(DiaryStateContext);

  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기장입니다");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
