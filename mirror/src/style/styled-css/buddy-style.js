import styled from "styled-components";

//
const Divider = styled.div`
  position: relative;
  height: 4vh;
  border: 2px solid ${(props) => props.color};
  margin-right: 2vw;
  margin-left: 2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: "50vw";
`;

const buddyFinalStyle = {
  divider: { ...Divider },
  rowContainer: { ...RowContainer },
};

export default buddyFinalStyle;
