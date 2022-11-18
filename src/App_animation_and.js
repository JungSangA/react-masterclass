import styled, { keyframes } from "styled-components";
import ca from "./img/캐터피.png";
import ra from "./img/rami.jpg";
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`

0% {
  transform : rotate(0deg);
  border-radius: 0px;
}
50%{
  border-radius: 100px;
}
100%{
  transform:rotate(360deg);
  border-radius: 0px;
}`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 2s linear infinite;
  // span안에 &을 쓰면 &은 곧, span을 가리킨다.#
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😁</span>
      </Box>
    </Wrapper>
  );
}

export default App;
