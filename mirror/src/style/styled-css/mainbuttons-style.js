import styled from "styled-components";

const Row = styled.div`
  z-index: 2;
  clear: both;
  width: 100%;
`;

const Column = styled.div`
  margin: 20px;
  display: inline-block;
`;

const Auth = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Pad = styled.div`
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  overflow: hidden;
  z-index: 2;
`;

const Title = styled.div`
  z-index: 2;
  margin-bottom: 20px;
`;

const finalStyle = {
  row: { ...Row },
  column: { ...Column },
  auth: { ...Auth },
  pad: { ...Pad },
  container: { ...Container },
  title: { ...Title },
};

export default finalStyle;
