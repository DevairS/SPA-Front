import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  width: 100%;
  height: 100px;
  margin-bottom: 60px;
  @media (max-width: 1200px) {
    margin-bottom: 0px;
  }

  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const LogoMenu = styled.div`
  cursor: pointer;
`;

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
  color: #fff;
`;

export const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  width: 150px;
  letter-spacing: 1px;
  background-color: #fff;
  border: none;
  border-radius: 12px;
  color: #d00000;
  padding: 15px;
  transition-duration: 0.4s;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 10px;
    margin: 2px;
  }
  &:hover {
    background: #9d0208;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 78px;
  @media (max-width: 500px) {
    width: 80px;
    height: 36px;
    margin: 2px;
  }
`;
