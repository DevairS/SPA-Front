import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f8fa;
  width: 70%;
  border-radius: 16px;
  animation-name: zoom;
  animation-duration: 1s;

  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale3d(0.7, 0.7, 0.7);
    }
    50% {
      opacity: 0.5;
    }
    80% {
      opacity: 1;
    }
  }
`;

export const ContainerCarousel = styled(Carousel)`
  display: flex;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 16px;
  padding: 5px;
  margin: 10px;
  background-color: #fff;
  -webkit-box-shadow: 5px 6px 8px 4px rgba(86, 86, 86, 0.2);
  box-shadow: 5px 6px 8px 4px rgba(86, 86, 86, 0.2);
`;
export const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TextName = styled.p`
  font-weight: bold;
  margin: 5px;
`;
export const Text = styled.p`
  margin: 5px;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const ImageAvatar = styled.img`
  border-radius: 20px;
`;
