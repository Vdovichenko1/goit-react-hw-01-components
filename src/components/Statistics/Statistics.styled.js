import styled from '@emotion/styled';

export const StatisticsCss = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  font-size: 16px;
`;

export const Title = styled.h2`
  color: blue;
  margin: 0;
  margin-top: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  color: white;
  padding: 10px;
  font-size: 16px;
  fon-weight: 400;
  weight: 50px;
  height: 50px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 900;
`;
