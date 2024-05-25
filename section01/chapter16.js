// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가 => 나이라는 프로퍼트를 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// => animal = 123; 새로운값을 할당하는건 불가능하지만
// 위에 처럼 저장되어있는 프로퍼티를 추가하거나 수정하는거는 가능하다

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼트를 말함 !!

const person = {
  name: "이정현",
  // 메서드 선언

  // 화살표 함수
  //   sayHi: () => {
  //     console.log("안녕");
  //   },

  // 익명함수
  sayHi: function () {
    console.log("안녕");
  },
};

// 함수 호출 가능
person.sayHi();
person["sayHi"]();
