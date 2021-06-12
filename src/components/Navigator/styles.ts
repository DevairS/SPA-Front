import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin-bottom: 100px;
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
`;
