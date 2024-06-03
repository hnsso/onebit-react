// 1. 배열 순회
let arr = [1, 2, 3];

// 1.배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2  for of 반목문 =>> for of는 배열관련 순회할때 사용
for (let item of arr) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: "27",
  hobby: "테니스",
};

// console.log(person);

// 내장함수

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

// 배열값들을 하나씩 뽑아 오겠다
for (let value of values) {
  console.log(value);
}

// 2.3 for in  =>> 객체를 순회할때
for (let key in person) {
  // person 객체에 있는 key를 할당하겠다
  console.log(key);
}
