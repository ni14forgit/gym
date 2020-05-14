import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 2vh;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 4vh;
`;

const finalStyle = {
  parent: { ...Parent },
  buttonrow: { ...ButtonRow },
};

export default finalStyle;
