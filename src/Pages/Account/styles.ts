import styled from 'styled-components';

import imageBackground from '../../assets/space2.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-items: center;
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 50px;
    margin-top: 20px;
  }
`;
export const Select = styled.a`
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  padding: 10px;
  font-size: 20px;
  transition: 500ms ease-in-out;
  width: 200px;
  text-align: center;
  border-radius: 6px;

  &:hover {
    background-color: black;
    -webkit-box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);
    box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    padding: 5px;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 15px;
    margin: 2px;
  }

  @media (max-width: 320px) {
    justify-content: center;
  }
`;
