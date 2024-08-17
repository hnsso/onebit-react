import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
// DiaryList;

const Home = () => {
  return (
    <div>
      {/* props로 가져와서 title에 입력가능 */}
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
