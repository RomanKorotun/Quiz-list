import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdQuiz } from "../api/quiz";
import { Container, Section } from "../GlobalStyle";
import { TitlePage } from "../components/common/TitlePage";
import { TakeQuizQuestion } from "../components/TakeQuizQuestion/TakeQuizQuestion";
import styled from "styled-components";
import { convertTime } from "../helpers/convertTime";

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 50px;
`;

export const Time = styled.div`
  margin-bottom: 30px;
`;

const CreateTakeQuizPageNew = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState();

  const [timer, setTimer] = useState(0);
  // const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await getByIdQuiz(id);
        setQuiz(data);
        setQuestion(data.questions[0]);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, [id]);

  const handleClickBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setQuestion(quiz.questions[currentIndex - 1]);
    }
  };

  const handleClickNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setQuestion(quiz.questions[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    // setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  const time = convertTime(timer);
  const isBackDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === quiz?.questions.length - 1;
  const isSubmitAction = currentIndex === quiz?.questions.length - 1;

  return (
    <Section>
      <Container>
        {quiz && question && (
          <>
            <TitlePage>Take Quiz</TitlePage>
            <SubTitle>{quiz.name}</SubTitle>
            <Description>{quiz.description}</Description>
            <Time>Time Taken for the Quiz: {time}</Time>
            <TakeQuizQuestion
              questions={quiz.questions}
              questionItem={question}
              isBackDisabled={isBackDisabled}
              isNextDisabled={isNextDisabled}
              isSubmitAction={isSubmitAction}
              currentIndex={currentIndex}
              time={time}
              quizId={id}
              handleClickBack={handleClickBack}
              handleClickNext={handleClickNext}
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default CreateTakeQuizPageNew;
