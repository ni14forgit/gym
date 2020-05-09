import styled from "styled-components";

const Selection = styled.div`
  position: relative;
`;

const Parent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Title = styled.div`
  position: relative;
  text-align: center;
  margin: 3vh;
`;

const finalStyle = {
  selection: { ...Selection },
  parent: { ...Parent },
  title: { ...Title },
};

export default finalStyle;
