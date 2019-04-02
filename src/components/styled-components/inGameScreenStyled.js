import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e74c3c;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const BackButton = styled.button`
  background-color: #2ecc71;
  border-style: none;
  color: white;
  padding: 10px;
  margin: 0 auto;
  font-size: 24px;
  transition: 0.3s;
  border-radius: 50% 0% 0% 50%;
  &:hover {
    cursor: pointer;
    background-color: #27ae60;
    transition: 0.3s;
  }
`;

export const HeaderGame = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const UserColors = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
`;
