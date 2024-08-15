import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

// 이렇게 우리가 App.jsx에서 하나씩 import로 가져오기는 빡세기 때문에
// util폴더에 따로 switch문으로 해서 export로 가져와서 App에 import로 가져오자

export const getEmotionImage = (emotionId) => {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
};
