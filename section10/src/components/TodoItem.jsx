import { memo } from "react";
import "./TodoItem.css";

// props로 받아와서
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 HOC
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라 , Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 o
//   // F -> Props 바뀜 -> 리렌더링 x

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
