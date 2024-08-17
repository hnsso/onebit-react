import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
// 여기서 우리가 데이터를 받아와야하기 때문에 useContext와 DiaryStateContext import

import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  // 여기서 beginTime은 Date객체를 이용하여서
  // 이번년도 달 1시 0분 0초를 숫자값 형식 getTime()으로 저장

  // console.log(beginTime);

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  // 그래서 0시는 그전날의 마지막날을 의미한다 !

  return data.filter(
    // filter는 이번달에 작성한거를 얘기한다
    // 이조건에 해당하는거만 filter해서 남기겠다는 의미이다
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  // App컴포넌트에서 데이터를 가져올때 useContext문
  const data = useContext(DiaryStateContext);

  // 초기값이 날짜 함수 / 상태변화함수이다
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      {/* props로 가져와서 title에 입력가능 */}
      <Header
        // 우리는 Home Header에서는 현재 년도와 월이 있는데
        // 문자로 보여줄려면 탬플릿 리터럴로 하자
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      {/* monthlyData객체 데이터를 Props로 전달 */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
