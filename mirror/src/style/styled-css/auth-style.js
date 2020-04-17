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

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: #225470;
  z-index: 1;
  opacity: 1;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 2;
  overflow: hidden;
`;

const KeyBoardContainer = styled.div`
  position: relative;
  top: 20px;
  width: 75%;
  clear: both;
  z-index: 2;
`;

const authStyleFinal = {
  error: { ...Error },
  container: { ...Container },
  overlay: { ...Overlay },
  parentContainer: { ...ParentContainer },
  keyBoardContainer: { ...KeyBoardContainer },
};

export default authStyleFinal;
//export { Error, Container, Overlay, ParentContainer, KeyBoardContainer };
