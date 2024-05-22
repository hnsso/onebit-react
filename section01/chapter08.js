// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined 값이다
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // = 10
let var5 = var1 ?? var3; // = 20
// 양쪽에 null이나 undefined가 아닌값을 저장 시킨다

let var6 = var2 ?? var3; // = 10
// 만약에 둘다 null이랑 undefined가 아니면 제일 앞에 값을 반환한다

// !! null 병합 연산자를 실무에서 사용하는 상황

let userName;
let userNickName = "winterlood";

let displayName = userName ?? userNickName;
//  유저이름과 닉네임의 존재 여부를 가릴때 유용하다

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello"; // String
var7 = ture; // Boolean
let t1 = typeof var7;
console.log(t1); // String 문자열을 반환한다

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떼의 값을 다르게 반환한다

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값을 짝수 -> "짝" , 홀수 -> "홀"

let res = var8 % 2 === 0 ? "짝" : "홀";
//             조건식     참일때  거짓일떼

console.log(var8); // 짝
