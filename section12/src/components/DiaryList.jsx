import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// useState;

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  // 정렬옵션
  const [sortType, setSorType] = useState("latest");

  const onChangeSortType = (e) => {
    setSorType(e.target.value);
  };

  const getSortedDate = () => {
    // toSorted같은 경우는 우리가 List에 대한 정보는 객체이기 때문에
    // 정렬하는 함수에 조건을 넣어야한다
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새로운 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {/* 우리가 Create한 게시물을 랜더링하기위해서는
        map메서드와 고유의 키값과 스프래드 연산자로 정보들을 props로 전달  */}
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
