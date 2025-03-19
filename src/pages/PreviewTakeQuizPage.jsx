import { useEffect, useState } from "react";
import { Section, Container } from "../GlobalStyle";
import { TitlePage } from "../components/common/TitlePage";
import { CreateTakeQuiz } from "../components/PreviewTakeQuiz/PreviewTakeQuiz";

const handleInitialData = () => {
  const data = localStorage.getItem("preview-take-quiz");
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

const handleInitialTime = () => {
  const time = localStorage.getItem("take-quiz-duration");
  if (time) {
    return JSON.parse(time);
  } else {
    return null;
  }
};

const handleInitialOwner = () => {
  const owner = localStorage.getItem("quizId");
  if (owner) {
    return JSON.parse(owner);
  } else {
    return null;
  }
};

const PreviewTakeQuizPage = () => {
  const [previewTakeQuiz] = useState(handleInitialData);
  const [takeQuizDuration] = useState(handleInitialTime);
  const [owner] = useState(handleInitialOwner);

  useEffect(() => {
    return () => {
      localStorage.removeItem("owner");
      localStorage.removeItem("preview-take-quiz");
      localStorage.removeItem("take-quiz-duration");
    };
  }, []);

  return (
    <Section>
      <Container>
        {previewTakeQuiz && (
          <>
            <TitlePage>Preview Take Quiz</TitlePage>
            <CreateTakeQuiz
              previewTakeQuiz={previewTakeQuiz}
              takeQuizDuration={takeQuizDuration}
              owner={owner}
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default PreviewTakeQuizPage;
