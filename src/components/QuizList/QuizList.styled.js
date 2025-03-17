import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 30px * 2) / 3);
`;
