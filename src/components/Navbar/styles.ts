import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 40px;
`;

export const LogoMenu = styled.div``;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 80vw;
  justify-content: end;
`;

export const Navlinks = styled.a`
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.4rem;
  color: #000;
`;
