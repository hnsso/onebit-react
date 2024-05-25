// 1. Faldy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("Truthy");
}

// 3 . 활용 사레
// 매개변수 person함수를 받는 printName이라는 함수
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name); // 객체에 특정 프로퍼티에 접근할려고 할때는
}

// let person = { name: "이정환" }; // 이렇게 하면 콘솔에 이정환이라고 출력이되지만
// let person; // undefined가 나온다
let person = null;
printName(person);

// 여기서 문제가 일어난다 만약에 우리가 person 객체에 프로퍼티에 접근할려고하는데
// 이렇게 undefined관련과 null 관련조건을 다 처리하기에는 나중에 방대한 프로퍼티면 복잡해진다.

function printName(person1) {
  // person1 매개변수가 들어왔을때
  if (!person1) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person1.name);
}

let person1 = { name: "이정환" };
printName(person1);
