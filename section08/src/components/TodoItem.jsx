import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">todo...</div>
      <div className="date">DAte</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
