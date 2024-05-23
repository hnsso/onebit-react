// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  // 이름이 없는 함수는 익명함수라고 한다
  console.log("funcB");
};

varB();

// 2. 화살표 함수 : 빠르고 간결하게
let varC = (value) => {
  return value + 1;
};

console.log(varC(10));
