import styled from "styled-components";

const Image = styled.div`
  width: 20vw;
  height: 38vh;
  position: relative;
  padding-right: 1vh;
  img {
    border: 2px solid #137cbd;
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
  width: 20vw;
  height: 38vh;
  border: 2px solid ${(props) => props.color};
  border-radius: 5%;
`;

const ImageBio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 4vw;
  padding-left: 4vw;
`;

const TotalProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-between;
`;

const VerticalCenter = styled.div`
  margin-top: 18vh;
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
};

export default finalStyle;
