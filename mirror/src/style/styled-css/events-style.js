import styled from "styled-components";

const Image = styled.div`
  width: 27vw;
  height: 25vh;
  position: relative;
  margin: auto;
  margin-top: 2vh;
  img {
    width: 100%;
    border-radius: 5%;
    height: 100%;
    border: 4px solid white;
  }
`;

const Background = styled.div`
  position: relative;
  width: 30vw;
  height: 60vh;
  margin: 0.5vw;
  background-color: ${(props) => props.color};
  border-radius: 5%;
`;

const ExitButton = styled.div`
  top: 3%;
  left: 3%;
`;

const Title = styled.div`
  color: white;
  padding-top: 2vh;
  padding-left: 2vh;
  font-size: 28px;
  font-family: Arial;
  font-weight: bold;
`;

const Description = styled.div`
  color: white;
  padding-top: 2vh;
  padding-left: 2vh;
  font-size: 20px;
  font-family: Arial;
  font-weight: bold;
`;

const DateDiv = styled.div`
  color: white;
  position: absolute;
  bottom: 1vh;
  padding-left: 2vh;
  font-size: 25px;
  font-family: Arial;
  font-weight: bold;
`;

const Like = styled.div`
  color: white;
  position: absolute;
  bottom: 0vh;
  right: 1vh;
`;

const finalStyle = {
  image: { ...Image },
  background: { ...Background },
  title: { ...Title },
  date: { ...DateDiv },
  like: { ...Like },
  description: { ...Description },
  exitbutton: { ...ExitButton },
};

export default finalStyle;
