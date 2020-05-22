import styled from "styled-components";

const Selection = styled.div`
  position: relative;
  padding-right: 7%;
  padding-left: 7%;
  padding-top: 5%;
`;

const Parent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  top: 1%;
  right: 2%;
  color: #137cbd;
`;

const Instruction = styled.div`
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const finalStyle = {
  selection: { ...Selection },
  parent: { ...Parent },
  title: { ...Title },
  instruction: { ...Instruction },
};

export default finalStyle;
