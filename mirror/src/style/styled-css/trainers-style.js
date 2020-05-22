import styled from "styled-components";

const Image = styled.div`
  width: 15vw;
  height: 30vh;
  position: relative;
  padding-right: 0.5vh;
  img {
    width: 100%;
    border-radius: 5%;
    height: 100%;
  }
`;

const Title = styled.div`
  color: ${(props) => props.color};
  margin: auto 0;
  padding: 1vh;
`;

const Description = styled.div`
  color: ${(props) => props.color};
  padding: 1vh;
`;

const Email = styled.div`
  color: ${(props) => props.color};
  position: absolute;
  bottom: 0vh;
  right: 1vh;
`;

const Background = styled.div`
  position: relative;
  width: 15vw;
  height: 30vh;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 5%;
`;

const ImageBio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const YesNo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TotalProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0.4vw;
  padding-left: 0.4vw;
  padding-bottom: 3vh;
`;

const VerticalCenter = styled.div`
  margin-top: 18vh;
`;

const ExitButton = styled.div`
  top: 0%;
  left: 0%;
  position: absolute;
  z-index: 10;
`;

const finalStyle = {
  image: { ...Image },
  background: { ...Background },
  email: { ...Email },
  description: { ...Description },
  title: { ...Title },
  imageBio: { ...ImageBio },
  totalProfile: { ...TotalProfile },
  verticalCenter: { ...VerticalCenter },
  exitButton: { ...ExitButton },
  yesno: { ...YesNo },
};

export default finalStyle;
