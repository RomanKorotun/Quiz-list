import { CreateQuizForm } from "../components/CreateQuizForm/CreateQuizForm";
import { Container, Section } from "../GlobalStyle";

const CreateQuiz = () => {
  return (
    <Section>
      <Container>
        <CreateQuizForm />
      </Container>
    </Section>
  );
};

export default CreateQuiz;
