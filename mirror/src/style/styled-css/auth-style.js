import styled from "styled-components";

const Error = styled.div`
  color: white;
  font-size: 12px;
  text-align: center;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 500px;
  height: 600px;
  background: pink;
  border-radius: 20px;
  top: 40px;
  z-index: 2;
`;

// height: 100%;
// width: 100%;
// position: absolute;
// top: 0;
// left: 0;

const Overlay = styled.div`
  background-color: #225470;
  z-index: 1;
  opacity: 1;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  z-index: 2;
  overflow: hidden;
`;

const KeyBoardContainer = styled.div`
  position: relative;
  padding-top: 30px;
  width: 75%;
  clear: both;
  z-index: 2;
`;

const ExitButton = styled.div`
  position: relative;
  z-index: 3;
`;

const authStyleFinal = {
  error: { ...Error },
  container: { ...Container },
  overlay: { ...Overlay },
  parentContainer: { ...ParentContainer },
  keyBoardContainer: { ...KeyBoardContainer },
  exitButton: { ...ExitButton },
};

export default authStyleFinal;
//export { Error, Container, Overlay, ParentContainer, KeyBoardContainer };
