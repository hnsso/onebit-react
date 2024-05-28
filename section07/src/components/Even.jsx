import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업 , 정리함수
    return () => {
      console.log("umount");
    };
  }, []);
  // 이렇게 빈배열이면 useEffect는 Mount시 발생한다
  return <div>짝수입니다</div>;
};

export default Even;
