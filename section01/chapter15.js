// 객체(Object) : 여러가지 값들을 동시에 저장할수있는 자료형을 의미

let obj1 = new Object(); // 객체 생성자 (내장함수방식)
let obj2 = {}; // 리터럴 방식 {대부분 리터럴 방식을 사용한다 }

// 2 . 객체 프로퍼티 (객체 속성이라고 말한다)
// 프로퍼티 = 정보 => 속성 / 키 : 값
// 그래서 우리는 부를때 name 프로퍼티 , age 프로퍼티 .. 으로 말한다
let person = {
  name: "이정환",
  age: 24,
  hobby: "야구",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cate": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name; // 점 표기법

//  "" 표로 표시해야하는 이유는 age로 쓰게되면 변수로 인식하게됩니다
let age = person["age"]; // 괄호 표기법

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3-3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3-4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
// 이뜻은 name이라는 프로퍼티가 person 객체안에 있는지에 대한 유무
