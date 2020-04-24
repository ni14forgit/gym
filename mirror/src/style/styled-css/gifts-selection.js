import styled from "styled-components";

const Selection = styled.div`
  position: relative;
  padding-right: 7%;
  padding-left: 7%;
  padding-top: 10%;
`;

const Parent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
// font-size: 60px;
// text-align: center;
// position: relative;
// padding-top: 10%;
// color: white;
const Title = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: 60px;
  color: white;
`;

const finalStyle = {
  selection: { ...Selection },
  parent: { ...Parent },
  title: { ...Title },
};

export default finalStyle;
