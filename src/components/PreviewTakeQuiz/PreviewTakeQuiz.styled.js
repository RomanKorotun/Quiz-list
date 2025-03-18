import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Time = styled.div`
  margin-bottom: 30px;
`;

export const Button = styled.button`
  height: 35px;
`;
