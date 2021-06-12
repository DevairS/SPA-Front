import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Table = styled.table`
  width: 70%;
  border-radius: 20px;
`;

export const Tr = styled.tr`
  background-color: #fff;
  :nth-child(1) {
    background-color: #fff;
  }

  :nth-child(even) {
    background-color: #fff;
  }
`;

export const Th = styled.th`
  padding: 10px;
`;
