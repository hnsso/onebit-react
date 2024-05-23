// 우리는 여러가지의 기능을 하나의 js 파일로 관리를 하게된다면
// 방대한 양의 코드들을 다찾아 나가야한다 그래서
// 기능별로 User.js Packge.js 등 나누어서 관리를 하는데 각각을 묘듈이라고 하고

// 묘듈 시스템 : 묘듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한기능을 제공하는 시스템

// ESM (ES 묘듈 시스템) : import{우리가 가저오고 싶은 함수명} from "확장자명까지"
// import { add, sub } from "./math.js";
// import mul from "./math.js";

import mul, { add, sub } from "./math.js"; // 한줄로 요약가능 !
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
