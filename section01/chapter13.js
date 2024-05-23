// Callback 함수
// - 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
function main(value) {
  console.log(1);
  value();
  console.log(2);
  console.log("end");
}

main(() => {
  console.log("I am sub");
});
// 메인함수의 인수로 들어가서 main함수에 value 호출하면 => I am sub
main(sub);

// 콜백함수를 그러면 언제 사용하는지 ??

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});
// 화살표함수방식
repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
// repeatDouble(5);

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// 이렇게 중복적인 함수가 나올때 => 콜백함수를 사용한다
// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 3);
//   }
// }
