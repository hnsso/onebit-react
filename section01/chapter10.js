// 반복문
// for (초기식; 조건식; 증감식) {
// 언제까지 반복을 할건지
// }
for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue;
    // 나머지가 0인 부분에서는 다시 반복문을 돌리겠다
  }
  if (idx >= 5) {
    break;
  }
  console.log(idx);
}
