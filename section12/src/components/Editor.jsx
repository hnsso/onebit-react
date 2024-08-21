import { useState, useEffect } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  // 이렇게 state를 객체로 보관하게되면 날짜 감정번호 내용을 하나에 state에 담을수있다
  const [input, setInput] = useState({
    createdDate: new Date(), // 오늘 현재 날짜 => getStringDate로 반환
    emotionId: 3,
    content: "",
  });
  // 각각의 프로퍼티로 객체로 저장한다

  const nav = useNavigate();

  // 기본 정보 가져오기
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // 우리가 입력한 것들을 저장해야하기 때문에 onChange함수 사용
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 조건을 하는이유는 우리는 입력한 날짜가 문자열로 들어오기 때문이다
    // 입력한 날짜는 Date객체로 저장하고 화면에는 문자열로 보여야되기 때문이다
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input, // 이전에 우리가 onChange에 담아둔 정보들 스프레드 연산자로 가져오기
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h1>오늘의 날짜</h1>
        <input
          name="createdDate"
          type="date"
          // 순서가 input state에 저장된 createdDate가 getStringedDate함수에 조건을 만나고 return한다
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
        {/* value에다가 문자열로 보내야한다 */}
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        {/* <EmotionItem emotionId={1} emotionName={"완전좋음"} />
        <EmotionItem emotionId={2} emotionName={"좋음"} />
        <EmotionItem emotionId={3} emotionName={""} /> 
        이렇게 하나하나씩 감정마다 하면 너무 코드가 많다 그래서 map메서드 사용
        */}
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
