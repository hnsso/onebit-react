// const Button = ({ text, color, children }) => {
//   // 여기서 객체의 구조 분해 할당으로 props를 => {text, color} 구분해도 된다
//   // props가 객체형태로 닮겨져온다 => text={"매일"} color={"red"} 이렇게
//   //   console.log(props);

//   // 이벤트 객체
//   const onClickButton = (e) => {
//     console.log(e);
//     console.log(text);
//   };

//   return (
//     <button
//       //   onClick={() => {
//       //     console.log(text);
//       //   이렇게 함수의 형태로 해도 괜찮고 밑에 처럼 함수를 변수로 닮아서 설정해도 괜찮다
//       //   }}
//       //      이벤트 핸들러 함수 호출 !!
//       onClick={onClickButton}
//       //   onMouseEnter={onClickButton}
//       style={{ color: color }}
//     >
//       {text} - {color.toUpperCase()}
//       {children}
//     </button>
//   );
// };

// Button.defaultProps = {
//   color: "black",
// };

// export default Button;
