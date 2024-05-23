// 함수선언

function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
// 함수를 호출해야한다 !!
greeting();
console.log("호출 후");

// 호이스팅: 최상단으로 끌어 올려서 호출한다
//                 매개변수
function getArea(width, height) {
  function anothoer() {
    // 중첩함수
    console.log("another");
  }
  anothoer();
  let area = width * height;

  return area; // 반환값
}

let area1 = getArea(10, 20);
console.log(area1);

getArea(10, 20);
getArea(120, 200);
//      인수
