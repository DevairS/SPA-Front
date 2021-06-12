import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 300px;
  align-items: center;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
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
  text-align: end;
  padding-bottom: 25px;
`;
