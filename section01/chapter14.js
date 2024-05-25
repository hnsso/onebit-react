// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1;
// 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {}
  // 함수안에 함수가 있어도 지역스코프를 가지고 있다
  // 그러나 / 반복문이나 조건문에서는 사용가능하다 !!
}
// 함수 내부에서 선언한 변수는 지역스코프이여서 특정 부분에서만 사용가능하고

funcA();
console.log(b);

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

console.log(d);