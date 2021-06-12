import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px;
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
