import styled from "styled-components";

const Image = styled.div`
  z-index: 0;
  img {
    z-index: 10;
    // border-radius: 5%;
    width: 30vw;
    height: 30vh;
  }
`;

const Background = styled.div`
  width: 30vw;
  height: 30vh;
  position: relative;
  margin: 0.5vh;
`;

const ExitButton = styled.div`
  top: 0%;
  left: 0%;
  position: absolute;
  z-index: 10;
`;

const Title = styled.div`
  top: 2vh;
  left: 1vw;
  color: white;
  position: absolute;
  z-index: 10;
`;

const Description = styled.div`
  bottom: 10vh;
  left: 1vw;
  color: white;
  position: absolute;
`;

const DateDiv = styled.div`
  position: absolute;
  color: white;
  bottom: 2vh;
  padding-left: 1vw;
`;

const Tint = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #137cbd;
  z-index: 0;
  opacity: 0.4;
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
  tint: { ...Tint },
  description: { ...Description },
  exitbutton: { ...ExitButton },
};

export default finalStyle;
