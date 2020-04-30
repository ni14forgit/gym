import styled from "styled-components";

const Title = styled.div`
  color: #357edd;
  text-align: center;
  font-size: 30px;
`;

const WeightTitle = styled.div`
  color: #357edd;
  text-align: center;
  font-size: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const finalStyle = {
  title: { ...Title },
  weighttitle: { ...WeightTitle },
  container: { ...Container },
  buttonVertical: { ...ButtonVertical },
};

export default finalStyle;
