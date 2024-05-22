// 연산자
// 1. 대입 연산자
let var1 = 1;
// 값을 저장할 이름 = 값

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 20;
// let num6 = (1 + 2) * 20;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);
// 이뜻은 위에있는 num7에대한 값에다가 20을 더하라 라는 뜻이다

// 4. 증감 연산자
let num8 = 10;
num8++; // 이 라인이 끝나고 더하라
++num8; // 즉시 더하라
console.log(++num8); // 전위연산자
console.log(num8++); // 후위연산자
console.log(num8);

// 5. 논리 연산자
let or = true || false; // 하나만 true면 true

let and = true && false; // 하나가 false면 false

let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true
console.log(comp1, comp2);

let comp3 = 2 > 1; // false
let comp4 = 2 < 1; // true
let comp5 = 2 >= 2; // true
let comp6 = 2 <= 2; // true
