// 1. 배열 생성
let arrA = new Array(); // 배열 생성자 방식
let arrB = []; // 배열 리터럴 방식 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
// 어떤 타입이든 다 저장가능하다 !!
// 길이에 대한 한계도 없다 !!

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2
// 인덱스의 0부터 끝까지 접근가능하다

arrC[0] = "hello"; // 인덱스로 접근하여 수정 삭제 추가 가능 !!

console.log(item1, item2);

console.log(arrC);
