import { TitlePage } from "../components/common/TitlePage";
import { CreateQuizForm } from "../components/CreateQuizForm/CreateQuizForm";
import { Container, Section } from "../GlobalStyle";

const CreateQuizPage = () => {
  return (
    <Section>
      <Container>
        <TitlePage>Create Quiz</TitlePage>
        <CreateQuizForm />
      </Container>
    </Section>
  );
};

export default CreateQuizPage;
