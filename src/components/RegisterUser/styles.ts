import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px;
  border-radius: 6px;
  width: 300px;
  -webkit-box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);
  box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);
  animation-name: zoom;
  animation-duration: 1s;

  @media (max-width: 1200px) {
    width: 500px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 70%;
  }

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

export const Label = styled.label`
  font-size: 1.4rem;
  margin-top: 5px;
`;

export const Error = styled.div`
  color: red;
`;
export const Input = styled.input`
  padding: 10px;
  border: 2px solid black;
  margin-top: 2px;
  &:hover {
    border: 2px solid #a7a7a7;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 25px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  transition: 500ms ease-in-out;
  padding: 10px;
  &:hover {
    box-shadow: 20px 5px 0 #a7a7a7, -20px -5px 0 #a7a7a7;
    border: 2px solid #a7a7a7;
  }

  &:focus {
    outline: none;
  }
`;

export const ContainerSwap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ButtonLogin = styled.a`
  color: blue;
  cursor: pointer;
`;
