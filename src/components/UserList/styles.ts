import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Table = styled.table`
  width: 70%;
`;

export const Tr = styled.tr`
  :nth-child(1) {
    background-color: #018adf;
  }

  :nth-child(even) {
    background-color: #dddddd;
  }
`;

export const Th = styled.th``;
