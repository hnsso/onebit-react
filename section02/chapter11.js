console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);
// 콜백함수와 함께 비동기 작업을 처리하는 Web APIs에 보낸다

console.log(3);

// 여기서 알아보고 넘어가자

// 1. JavaScript에서는 동기적처리만 가능한데
//    => why ) 쓰레드가 1개 밖에 없는데
//                          비동기처리가 가능할까 ?

// Sol) 비동기 작업들은 자바스크립트 엔진이 아닌
//      Web APIs에서 실행되기때문이다
