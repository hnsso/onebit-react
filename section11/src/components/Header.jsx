import "./Header.css";
import { memo } from "react";
// 불필요한 리랜더링이 될때

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘의 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 이렇게 되면 자신이 받는 props가 바뀌지 않으면
// 리랜더링이 되지않는다
const memoizedHeader = memo(Header);

export default memoizedHeader;

// Header Component 는 런더링이 계속 일어나지 않아도 괜찮기 때문에 !!
