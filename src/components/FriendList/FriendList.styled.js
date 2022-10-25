import styled from '@emotion/styled';

export const Status = styled.span`
  background-color: ${props => {
    return !props.isOnline ? 'red' : 'green';
  }};
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 15px;
  margin-right: 10px;
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;
  border: 1px solid black;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(82, 50, 82, 0.32);
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Friend = styled.ul`
  padding: 0;
  margin-left: 550px;
`;

export const NameFriend = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;
