import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
// 구조분해 할당으로 props로 객체를 받아올수있다
const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFileteredData = () => {
    // search에 "빈배열"이면 todos를 반환하고
    if (search === "") {
      return todos;
    }
    // todos에 todo가 포함되어있으면 찾아내겠다
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFileteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default List;
