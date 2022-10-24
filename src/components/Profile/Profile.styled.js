import styled from '@emotion/styled';

export const ProfileCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  list-style: none;
  font-size: 16px;
`;

export const Description = styled.div`
  outline: 2px solid red;
  display: contents;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: green;
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 900;
`;

export const Tag = styled.p`
  margin: 0;
  color: grey;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  margin: 0;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const List = styled.li`
  border: 1px solid grey;
  padding-top: 10px;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 60px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  color: chocolate;
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 900;
`;
