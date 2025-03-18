import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Section } from "../GlobalStyle";
import { TitlePage } from "../components/common/TitlePage";

const CreateTakeQuizResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { success, error, message } = location.state || {};

  useEffect(() => {
    if (!success && !error) {
      navigate("/quizzes");
    }
  }, [success, error, navigate]);

  return (
    <Section>
      <Container>
        {(success || error) && <TitlePage>Take Quiz Creation Result</TitlePage>}
        {success && (
          <>
            <div>{message}</div>
            <div>
              You can go to the&nbsp;
              <Link to="/quizzes">page of all quizzes</Link>
            </div>
          </>
        )}
        {error && (
          <>
            <div>{message}...</div>
            <div>
              You can go to the&nbsp;
              <Link to="/quizzes">page of all quizzes</Link>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};

export default CreateTakeQuizResultPage;
