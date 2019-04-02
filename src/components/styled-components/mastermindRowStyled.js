import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const RowBoxes = styled.div`
  display: flex;
`;

export const RowAuditors = styled.div`
  display: flex;
`;

export const CheckButton = styled.button`
  background-color: #ea6153;
  font-size: 20px;
  width: 55px;
  height: 55px;
  border: #ea6153 5px solid;
  border-radius: 100px;
  color: #2ecc71;
  border-style: none;
  transition: 0.2s;
`;
