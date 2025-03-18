import { useParams } from "react-router-dom";
import { Container, Section } from "../GlobalStyle";
import { useEffect, useState } from "react";
import { getByIdQuiz } from "../api/quiz";
import { TitlePage } from "../components/common/TitlePage";
import { TakeQuizForm } from "../components/takeQuizForm/takeQuizForm";

const TakeQuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await getByIdQuiz(id);
        setQuiz(data);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, [id]);
  return (
    <Section>
      <Container>
        {quiz && (
          <>
            <TitlePage>Take Quiz</TitlePage>
            <TakeQuizForm quiz={quiz} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default TakeQuizPage;
