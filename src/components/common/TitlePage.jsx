import styled from "styled-components";

const Wrapper = styled.h2`
  margin-bottom: 30px;
`;

export const TitlePage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
