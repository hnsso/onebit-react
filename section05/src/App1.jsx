// import "./App.css";
// import Header from "./components/Header"; // EX모듈 시스템으로 가져오는거다 !!
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// // 나는 화살표 함수 방식으로 가자!

// // 컴포넌트를 생성하는 함수에선는 무조건 대문자로시작해야 컴포넌트로 인식한다

// // App 컴포넌트 => 이자 함수 컴포넌트이다

// // App 컴포넌트는 부모컴포넌트이다 => 결국에 제일 조상인 App은 => 결국에 Root 컴포넌트라고 한다

// function App() {
//   const buttonProps = {
//     text: "매일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       {/* 우리는 같은 UI이인 상활에서는 하나의 태그에 값을 전달해야만 한다 */}
//       {/* 그값을 우리는 Props = Properties의 줄임말 */}
//       {/**/}
//       {/* <Button text={"메일"} color={"red"} /> */}
//       <Button {...buttonProps} /> {/* 스프래트 연산자로도 가능하다 */}
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <div>자식요소</div>
//       </Button>
//       {/* 자식 컴포넌트 */}
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;
