import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // State 관리
  //   const [name, setName] = useState("이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  // 위의 4개의 State가 중복되어 비효율적이기 때문에
  // 하나의 state에 프로퍼티를 저장!!
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // reference 객체 생성 => useRef는 리랜더링이 안된다
  const countRef = useRef(
    0
    // Current라는 프로퍼티를 갖는 객체가 생성이 된다
  );

  // input에 접근하는 객체 생성
  const inputRef = useRef();

  // 제출 관련 핸들러
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM요소에 포커스
      // 만약에 이름을 기제하지 않았을 경우 포커스를 할려면 간접적인 접근인 useRef를 사용해야한다
      // console.log(inputRef.current);

      inputRef.current.focus();
    }
  };

  // 통합 이벤트핸들러 함수
  const onChange = (e) => {
    // 수정될떼 마다 countRef 객체의 값이 변경되어야 한다
    countRef.current++;
    // 상태변화 함수를 호출하여 -> 객체를 만들어 전달
    // -> [] 프로퍼티 키 자리에 [변수]를 적으면
    // e.target.name을 키로 설정하겠다라는 의미다.
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      //
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);

  // 이벤트핸들러 함수 => 그리고 난 다음에 이벤트핸들러 함수도 비효율적이다
  //   const onChangeName = (e) => {
  //     // setName(e.target.value);
  //     setInput({
  //       ...input, // 스프래드 연산자를 이용하여
  //       // > 사용하는이유 ) 관련없는 프로퍼티는 그대로 유지하기위해 !!
  //       name: e.target.value,
  //       // 변경하고자하는 프로퍼티만 적는다.
  //     });
  //     // 상태변화 함수를 호출하고
  //   };

  //   const onChangeBirth = (e) => {
  //     // setBirth(e.target.value);
  //     setInput({
  //       ...input, // 스프래드 연산자를 이용하여
  //       // > 사용하는이유 ) 관련없는 프로퍼티는 그대로 유지하기위해 !!
  //       birth: e.target.value,
  //       // 변경하고자하는 프로퍼티만 적는다.
  //     });
  //     // 상태변화 함수를 호출하고
  //   };

  //   const onChangeCountry = (e) => {
  //     // setCountry(e.target.value);
  //     setInput({
  //       ...input, // 스프래드 연산자를 이용하여
  //       // > 사용하는이유 ) 관련없는 프로퍼티는 그대로 유지하기위해 !!
  //       country: e.target.value,
  //       // 변경하고자하는 프로퍼티만 적는다.
  //     });
  //     // 상태변화 함수를 호출하고
  //   };

  //   const onChangeBio = (e) => {
  //     // setBio(e.target.value);
  //     setInput({
  //       ...input, // 스프래드 연산자를 이용하여
  //       // > 사용하는이유 ) 관련없는 프로퍼티는 그대로 유지하기위해 !!
  //       bio: e.target.value,
  //       // 변경하고자하는 프로퍼티만 적는다.
  //     });
  //     // 상태변화 함수를 호출하고
  //   };

  return (
    <div>
      <div>
        {/* <button
          onClick={() => {
            // useRef은 리렌더링이 일어나지 않는다 !!!
            refObj.current++;
            console.log(refObj.current);
          }}
        ></button> */}
      </div>
      <div>
        {" "}
        <input
          // 이 input태그를 랜더링 하는 DOM 요소가 => ref에 저장이된다
          ref={inputRef}
          name="name"
          onChange={onChange}
          value={input.name}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="date"
          name="birth"
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
        {/* 랜더링이 잘 이루어 지고 있는지 확인 !! */}
        {input.country}
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio}></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
