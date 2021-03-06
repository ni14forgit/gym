import styled from "styled-components";

const ContainerWeight = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  z-index: 2;
`;

const ContainerAttendance = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  z-index: 2;
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

const FlexBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Normalize = styled.div`
  position: absolute;
  height: "99vh";
  width: 100vw;
  height: 100%;
  top: 15%;
`;

const HeaderStyleCool = styled.div`
  color: white;
  font-size: 40px;
  position: absolute;
  z-index: 2;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const NoDataMessage = styled.div`
  color: white;
  font-size: 35px;
  z-index: 2;
  position: relative;
  margin: auto;
`;

const ExitButton = styled.div`
  top: 0 vh;
  left: 0vh;
  position: absolute;
  z-index: 100;
`;

const DoneButton = styled.div`
  position: relative;
  margin: auto;
`;

const finalStyle = {
  containerweight: { ...ContainerWeight },
  containerattendance: { ...ContainerAttendance },
  distributionoverlay: { ...DistributionOverlay },
  inner: { ...Inner },
  flexbottom: { ...FlexBottom },
  padleft: { ...PadLeft },
  headerstylecool: { ...HeaderStyleCool },
  normalize: { ...Normalize },
  exitButton: { ...ExitButton },
  noDataMessage: { ...NoDataMessage },
  doneButton: { ...DoneButton },
};

export default finalStyle;
