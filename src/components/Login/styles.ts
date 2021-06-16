import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  margin-right: 300px;
  @media (max-width: 1200px) {
    justify-content: center;
    margin-right: 0px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: fade;
  animation-duration: 2s;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translate3d(0, 70%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px 25px 0px 25px;
  border-radius: 6px;
  width: 300px;
  -webkit-box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);
  box-shadow: 6px 9px 11px 4px rgba(0, 0, 0, 0.64);

  @media (max-width: 1200px) {
    width: 500px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 70%;
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

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img``;

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

export const ButtonLogin = styled.a`
  color: blue;
  cursor: pointer;
  padding-bottom: 15px;
  margin-top: 10px;
`;
export const ContainerSwap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
