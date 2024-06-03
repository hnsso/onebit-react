// 5가지 요소 순회 및 탐색 매서드
// 1. forEech
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 매서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

// 빈 배열을 만들어두고
let doublArr = [];

// arr1에 각각의 요소들에게
arr1.forEach((item) => {
  doublArr.push(item * 2);
});

console.log(doublArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 매서드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

console.log(isInclude); // 존재하지 않는다 그래서 false 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 매서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); //  배열상태에서는 위치인 1을반환

// indexOf가 -1을 반환하면 배열에 요소가 존재하지 않는거고
// [2, 2, 2] 라는 배열에서 indexOf(2)를 하면 제일 앞에 있는 요소인 0 을 반환환다

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 매서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

console.log(findedIndex);

// 여기서 indexOf 랑 findIndex
// indexOf는 객체 값에 대한 존재는 얕은비교를이용해서 찾을수있기때문에
// findIndex를 사용해서 가져올수있다

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요고를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded); // 첫번째인 객체 자체를 반환
