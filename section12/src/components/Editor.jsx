import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
// Button

const emtionList = [
  {
    emotionId: 1,
    emotionName: "완전좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Editor = () => {
  const emotionId = 1;
  return (
    <div className="Editor">
      <section className="date_section">
        <h1>오늘의 날짜</h1>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        {/* <EmotionItem emotionId={1} emotionName={"완전좋음"} />
        <EmotionItem emotionId={2} emotionName={"좋음"} />
        <EmotionItem emotionId={3} emotionName={""} /> 
        이렇게 하나하나씩 감정마다 하면 너무 코드가 많다 그래서 map메서드 사용
        */}
        <div className="emotion_list_wrapper">
          {emtionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
