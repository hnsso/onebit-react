// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// ...arr1을 쓰게되면 뿌려해쳐라라는 의미를 같는 Spread

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

console.log(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

//            여기서는 스프래드 연산자가 아닌 ...rest 매개변수이다
// rest 매개변수는 제일 마지막으로 써야한다.
// 그이유는 나머지를 다 뿌려준다는 의미로 ...rest, four - x 불가능하다
function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
