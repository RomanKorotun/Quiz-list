import { useParams } from "react-router-dom";
import { Container, Section } from "../GlobalStyle";
import { CreateQuizForm } from "../components/CreateQuizForm/CreateQuizForm";
import { useEffect, useState } from "react";
import { getByIdQuiz } from "../api/quiz";
import { TitlePage } from "../components/common/TitlePage";
import { Loader } from "../components/Loader/Loader";

const UpdateQuizPage = () => {
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
        {!quiz && <Loader />}
        {quiz && (
          <>
            <TitlePage>Update Quiz</TitlePage>
            <CreateQuizForm quiz={quiz} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default UpdateQuizPage;
