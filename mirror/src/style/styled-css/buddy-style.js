import styled from "styled-components";

const Divider = styled.div`
  position: relative;
  height: 8vh;
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

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: "100vh";
  padding: 2vw;
  // border: 2px solid ${(props) => props.color};
  border-radius: 10%;
  margintop: "1vh";
`;

const ParentBackground = styled.div`
  background-color: ${(props) => props.color};
  height: 100%;
  width: 100%;
  min-height: 100vh;
  border: 2px solid black;
`;

const ExitButton = styled.div`
  top: 0vh;
  left: 1vh;
  position: absolute;
`;

const HorizontalDivider = styled.div`
  position: relative;
  width: 15vw;
  border: 2px solid ${(props) => props.color};
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const Message = styled.div`
  top: 5%;
  right: 5%;
  position: absolute;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: 2vh;
`;

const NavOptions = styled.div`
  position: relative;
  margin-right: 0.5vw;
  margin-left: 0.5vw;
`;

const buddyFinalStyle = {
  divider: { ...Divider },
  rowContainer: { ...RowContainer },
  columnContainer: { ...ColumnContainer },
  horizontalDivider: { ...HorizontalDivider },
  parentBackground: { ...ParentBackground },
  message: { ...Message },
  navBar: { ...NavBar },
  navOptions: { ...NavOptions },
  exitButton: { ...ExitButton },
};

export default buddyFinalStyle;
