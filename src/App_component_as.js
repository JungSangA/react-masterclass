import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// attrs : input의 속성을 부여할 수 있음
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

// as = "div", as = "a" 등 기존의 component를 스타일은 유지한 채
// 다른 tag로 바꿀 수 있음

function App() {
  return (
    <Father as="header">
      <Btn>button</Btn>
      <Btn as="a" href="Z">
        button
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
