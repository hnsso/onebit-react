// 객체의 구조분해 할당을 count props를 받아낸다
const Viewer = ({ count }) => {
  return (
    <div>
      <h1>현재 카운트 :</h1>
      <div>{count}</div>
    </div>
  );
};

// 우리는 Controller컴포넌트에서 입력해서 Viewer에 보여지는거는 불가능하다
// 그럴러면 props를 사용해야하는데
// 그러나 props는 부모 -> 자식 으로만 값을 보낼수 있다

export default Viewer;
