import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 15vw;
  align-items: center;
  z-index: 2;
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
  container: { ...Container },
  title: { ...Title },
  copyright: { ...Copyright },
  flexrow: { ...FlexRow },
};

export default finalStyle;
