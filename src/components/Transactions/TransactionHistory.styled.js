import styled from '@emotion/styled';
import { Children } from 'react';

export const Transaction = styled.table`
  display: table;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 4px;
  text-align: center;
  width: 80%;
`;

export const HeaderTable = styled.tr`
  text-transform: uppercase;
  color: white;
  background-color: aqua;
  font-size: 18px;
`;

export const ListTransactions = styled.tbody`
  background-color: bisque;
  text-transform: capitalize;
  color: #808080;
`;
