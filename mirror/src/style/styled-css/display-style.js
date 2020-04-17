import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const DistributionOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: 1;
  opacity: 0.3;
`;
const Inner = styled.div`
  font-weight: bold;
  font-size: "10px";
  z-index: 2;
  position: relative;
  height: "99vh";
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
`;
const PadLeft = styled.div`
  position: absolute;
  left: 5%;
  height: "99vh";
  width: 100vw;
  height: 100%;
  top: 15%;
`;
const HeaderStyleCool = styled.div`
  color: white;
  font-size: 50px;
`;

const finalStyle = {
  container: { ...Container },
  distributionoverlay: { ...DistributionOverlay },
  inner: { ...Inner },
  padleft: { ...PadLeft },
  headerstylecool: { ...HeaderStyleCool },
};

export default finalStyle;
