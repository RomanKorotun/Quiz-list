import { NavLink } from "react-router-dom";
import { Container } from "../../GlobalStyle";
import { HeaderSection, Nav } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <NavLink to="/catalog">Quiz_Catalog</NavLink>
          <NavLink to="/create">Create_Quiz</NavLink>
        </Nav>
      </Container>
    </HeaderSection>
  );
};
