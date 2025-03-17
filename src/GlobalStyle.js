import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color:#000000;
}
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 1200px;
`;

export const Section = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;
