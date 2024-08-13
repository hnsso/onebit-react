import "./TodoItem.css";

// props로 받아와서
const TodoItem = (id, isDone, content, date, onUpdate) => {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
