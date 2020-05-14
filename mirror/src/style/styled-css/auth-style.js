import styled from "styled-components";

const Error = styled.div`
  color: white;
  font-size: 12px;
  text-align: center;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 40vw;
  height: 70vh;
  background: pink;
  border-radius: 20px;
  top: 40px;
  z-index: 2;
`;

const Overlay = styled.div`
  background-color: #137cbd;
  z-index: 1;
  opacity: 1;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 2vh;
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
  padding-bottom: 15px;
  width: 75%;
  clear: both;
  z-index: 2;
`;

const ExitButton = styled.div`
  position: absolute;
  top: 1vh;
  left: 1vh;
  z-index: 3;
`;

const authStyleFinal = {
  error: { ...Error },
  container: { ...Container },
  overlay: { ...Overlay },
  parentContainer: { ...ParentContainer },
  keyBoardContainer: { ...KeyBoardContainer },
  exitButton: { ...ExitButton },
  navBar: { ...NavBar },
};

export default authStyleFinal;
