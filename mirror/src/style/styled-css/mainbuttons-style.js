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
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  overflow: hidden;
  z-index: 2;
`;

const GridContainer = styled.div`
  margin: auto;
  align-items: center;
`;

const Title = styled.div`
  z-index: 2;
`;

const Copyright = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 2vh;
  left: 75vw;
`;

const finalStyle = {
  row: { ...Row },
  column: { ...Column },
  auth: { ...Auth },
  pad: { ...Pad },
  container: { ...Container },
  title: { ...Title },
  gridContainer: { ...GridContainer },
  copyright: { ...Copyright },
};

export default finalStyle;
