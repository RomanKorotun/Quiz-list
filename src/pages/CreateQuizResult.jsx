import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Section } from "../GlobalStyle";
import { useEffect } from "react";

const CreateQuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { success, error, message } = location.state || {};

  useEffect(() => {
    if (!success && !error) {
      navigate("/create-quiz");
    }
  }, [success, error, navigate]);

  return (
    <Section>
      <Container>
        {success && (
          <>
            <div>{message}</div>
            <div>
              You can go to the&nbsp;
              <Link to="/quizzes">page of all quizzes</Link> or&nbsp;
              <Link to="/create-quiz">create a new quiz!</Link>
            </div>
          </>
        )}
        {error && (
          <>
            <div>{message}...</div>
            <div>
              You can try&nbsp;
              <Link to="/create-quiz">create a new quiz again</Link> or go to
              the&nbsp;
              <Link to="/quizzes">page of all quizzes!</Link>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};

export default CreateQuizResult;
