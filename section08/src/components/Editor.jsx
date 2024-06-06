import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 사용자가 키보드를  눌렸다 땠을때
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    } else {
      onCreate(content);
      setContent("");
    }
  };

  return (
    <div className="Editor">
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
