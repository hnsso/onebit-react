// 객체의 구조분해 할당을 count props를 받아낸다
const Viewer = ({ count }) => {
  return (
    <div>
      <h1>현재 카운트 :</h1>
      <div>{count}</div>
    </div>
  );
};

// 우리는 부모 -> 자식 컴포넌트로 state와 함수를 보낼수있다 !!

export default Viewer;
