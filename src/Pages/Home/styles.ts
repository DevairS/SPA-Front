import styled from 'styled-components';
import imageBackground from '../../assets/space2.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const LoginContainer = styled.div`
  display: flex;
  height: 100%;
`;
