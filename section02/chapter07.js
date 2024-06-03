// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 맨뒤에 있는 3을 반환 한다
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3);
console.log(shiftedItem); // 배열의 맨앞에 있는 요소 1 제거 후 반환

// 4. unShift
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4);
console.log(newLength2);

// 여기서 shift랑 unshift는 배열의 요소 맨앞을 제거하고나 추가함으로 인해
// 인덱스가 하나하나씩 앞으로 밀리거나 추가되고 함으로 속도가 느려
// 되도록이면 pop이랑 push로 해결해보자

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];

//           (앞은 인덱스, 뒤는 몇번째)
let sliced = arr5.slice(2, 5);

// 자르는 구간이 하나일 경우는 하나만 표기해도 상관없다
let sliced2 = arr5.slice(2);

// 음수로는 뒤에서 몇번째라고 표현한다
let sliced3 = arr5.slice(-3);

console.log(sliced);
console.log(sliced2);
console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
