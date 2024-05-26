import "./Main.css"; // 컴포넌트에서 css를 불러올때는 경로만 불러와도 된다

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 랜더링이 가능하다
// 3. 모든 태그는 닫혀 있어야 한다 . => <></>
// 4. 최상위 태그는 반드시 하나여야 한다.

const Main = () => {
  //   const number = 10;
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    // 1 . 여기서 Style을 직접 줄때는 중괄호가 두개인 이유는 객체를 전달하기 때문이다 !!
    return (
      <div
        // style={{
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue",
        //  근데 이렇게 하면 가속성이 떨어진다}}
        className="logout"
      >
        로그아웃
      </div>
    ); // 조건이 참이기 때문에 true를 랜더링
  } else {
    return <div>로그인</div>;
  }

  //   return (
  //     <>
  //     {/* {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>} */}
  //     </>

  // <main>
  //   <h1>main</h1>
  //   {/* 삼항연산자도 가능하다 */}
  //   <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //   {10}
  //   {number}{" "}
  //   {/* 이렇게 한줄의 코드가 값을 나타내는 자바스크립트 코드만 가능하다 */}
  //   {/* {if(){}} */}
  //   {/* {for(){}} */}
  //   {true}
  //   {[1, 2, 3]}
  // </main>
  //   );
};

export default Main;
