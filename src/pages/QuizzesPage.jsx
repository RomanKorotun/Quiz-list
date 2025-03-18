import { useEffect, useState } from "react";
import { Container, Section } from "../GlobalStyle";
import { deleteQuiz, getAllQuizzes } from "../api/quiz";
import { QuizList } from "../components/QuizList/QuizList";
import { Link } from "react-router-dom";
import { TitlePage } from "../components/common/TitlePage";

const QuizzesPage = () => {
  const [quizList, setQuizList] = useState(null);

  const quizDelete = async (id) => {
    try {
      const { data: deletedQuiz } = await deleteQuiz(id);
      setQuizList((prevState) =>
        prevState.filter((quiz) => quiz._id !== deletedQuiz._id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await getAllQuizzes();
        setQuizList(data);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  return (
    <Section>
      <Container>
        <TitlePage>Quizzes</TitlePage>
        {quizList?.length > 0 && (
          <QuizList quizList={quizList} quizDelete={quizDelete} />
        )}
        {quizList?.length === 0 && (
          <div>
            Квізів не знайдено... Щоб стоврити квіт перейденть на&nbsp;
            <Link to="/create-quiz">сторінку створення квіза!</Link>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default QuizzesPage;
