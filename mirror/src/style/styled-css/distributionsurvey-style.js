import styled from "styled-components";

const Selection = styled.div`
  position: relative;
  padding-right: 2%;
  padding-left: 2%;
  padding-bottom: 1%;
`;

const Parent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
`;

const finalStyle = {
  selection: { ...Selection },
  parent: { ...Parent },
  title: { ...Title },
};

export default finalStyle;
