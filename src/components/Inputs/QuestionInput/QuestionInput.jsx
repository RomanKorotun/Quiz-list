import { Error } from "../../CreateQuizForm/CreateQuizForm.styled";
import { Input, Label } from "./QuestionInput.styled";

export const QuestionInput = ({
  questionIndex,
  question,
  error,
  handleQuestionChange,
}) => {
  return (
    <Label>
      {`${questionIndex + 1}.`} Question
      <Input onChange={handleQuestionChange} value={question} />
      {error && <Error>{error}</Error>}
    </Label>
  );
};
