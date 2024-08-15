import { useSearchParams } from "react-router-dom";

// useSearchParams; 이방법은 쿼리스트링으로 이동

const Home = () => {
  const [params, setParams] = useSearchParams();
  return <div>Home</div>;
};

export default Home;
