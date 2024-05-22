// 자료형 -> (1) 원시타입

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 사칙 연산
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

console.log(1 * "hello");

// 2. String Type => 문자열을 할때는 무조건 "" , '' 랑 같이 적어야한다.
let myName = "김현수";
let myLocation = "신림동";
let introduce = myName + myLocation;

console.log(introduce); // 문자열간의 합 김현수 신림동

// `` 라는 빼틱이라는 문자열로 만들수도 있다
let introductText = `${myName}은 ${myLocation}에 거주합니다`;

console.log(introductText);

// 탬플릿 리터럴 문법 이라고도 말한다 !!

// 3. Boolean Type 참이거나 거짓인걸 저장하는 상태
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// 4 , 5 는 둘다 들어있는 값이 없다라는 뜻은 비슷하지만
// 4는 우리가 직접 아무것도 없다는걸 변수에다가 선언을해 초기화를 한거고
// 5는 변수선언 최기화자체가 되지 않은것을 의미한다 .
