import { useState } from "react";

const Viewer = () => {
  const [counter, setCounter] = useState("");

  const onCount = () => {
    setCounter();
  };

  return (
    <>
      <h1>현재 카운트 :</h1>
      {counter}
    </>
  );
};

export default Viewer;
