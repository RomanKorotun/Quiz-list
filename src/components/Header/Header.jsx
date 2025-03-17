import { NavLink } from "react-router-dom";
import { Container } from "../../GlobalStyle";
import { HeaderSection, Nav } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <NavLink to="/quizzes">Quizzes</NavLink>
          <NavLink to="/create-quiz">Create_Quiz</NavLink>
        </Nav>
      </Container>
    </HeaderSection>
  );
};
