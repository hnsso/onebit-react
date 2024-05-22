// 형 변환 : Type Casting
// => 어떤 값의 타입을 다른 타입으로 변경하는 것을 말함

// 1. 묵시적 형변환 :
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
// 결과값이 1020 으로 나오는 이유는 숫자값 10을 묵시적으로 자바스크립트에서 문자열로 형변환 시킴
console.log(result); // 1020

// 2. 명시적 형변환 :
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1); // Number라는 내장함수를 사용해서 형변환
console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = parseInt(str1); // 예외로는 문자가 숫자 앞으로 있으면 안됨
console.log(strToNum2); // 10

// -> 숫자 => 문자열
let num1 = 20;
let numToStr1 = String(num1); // 숫자를 문자열로 형변환 !!

console.log(numToStr1 + "입니다");
//           문자열   +   문자열  =>  문자열
