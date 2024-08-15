import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

// 우리가 부모컴포넌트인 App 컴포넌트에서 Props로 이벤트핸들러함수를 받아오고
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  // 우리가 Props로 함수를 받아오긴 했지만 input태그에 담을 content state가 없기 때문에
  // useState(); 하나 생성
  const [content, setContent] = useState("");
  // => 그래서 우리는 초기값은 "빈배열" 이고 변수가 content이고 상태변화함수가 setContent인 useState함수를 만든다

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 사용자가 키보드를 눌렸을때 저장
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // onSubmit 함수에서 우리가 유의 해야할 것
  // 1 . input태그안 content가 null이면 안된다
  // 2 . 만약에 null일 경우 내용을 다시 기입하겠끔 해야한다
  // 3 . 그리고 content를 제대로 작성하고 제출버튼을 누르면 기존에 content가 ""이어야한다
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    } else {
      onCreate(content); // onCreate함수에 content 저장
      setContent(""); // 초기화
    }
  };

  return (
    <div className="Editor">
      {/* 별도로 input태그에 content의 내용을 담고있는 state가 없어서
          useState(); 하나 만들기 */}
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder=" 새로운 Todo...."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
