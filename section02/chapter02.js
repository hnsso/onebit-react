// 단락 평가 (논리 연산자 && , ||)

returnFalse = () => {
  return false;
};

returnTrue = () => {
  return true;
};

//           피연산자         피연산자
console.log(returnFalse() && returnTrue());
// 논리연산자에선 and(&&)는 하나라도 false이면
// 나머지 하나의 조건은 보지 않아도 상관없는 상황이 나오는 그 상황을 단락평가라고한다

returnFalse1 = () => {
  console.log("False 함수");
  return false;
};

returnTrue1 = () => {
  console.log("true 함수");
  return true;
};

console.log(returnTrue1() && returnFalse1());
//              T  이고 난 다음 False여서
// => 첫번째 피연산자의 값이 true여서 끝나지 못 해서
//    다음 연산자 까지 호출하는 상황이 일어난다 !!

returnFalse2 = () => {
  console.log("False 함수");
  return undefined;
};

returnTrue2 = () => {
  console.log("true 함수");
  return 10;
};

console.log(returnTrue2() || returnFalse2());
//              10               x  => true 함수 호출

// 단락 평가의 활용 사례

function printName(person) {
  const name = person && person.name;

  console.log(name || "person의 값이 없음");
  //
}

printName();

printName({ name: "이정환" });
// 둘다 Truthy이면  A || B => A
// 둘다 Truthy인데 A && B => B
