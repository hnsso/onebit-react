// 조건문(Conditional Statement) => if , switch
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법

// 1 . if 조건문 (if문)
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다 ");
  console.log("조건이 참 입니다");
} else if (num >= 5) {
  console.log("num은 5이상입니다");
} else if (num >= 3) {
  console.log("num은 5이상입니다");
} else {
  console.log("조건이 거짓입니다");
}

// if문에서 else if or else로 끝내야 한다 !

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할때 if보다 더 직관적이다

let animal = "owl";

switch (animal) {
  case "cate": {
    console.log("고양이");
  }
  case "dog": {
    console.log("개");
  }
  case "bear": {
    console.log("곰");
  }
  case "snake": {
    console.log("뱀");
  }
  case "tiger": {
    console.log("호랑이");
  }
  default: {
    console.log("그런 동물은 없습니다");
  }
}
