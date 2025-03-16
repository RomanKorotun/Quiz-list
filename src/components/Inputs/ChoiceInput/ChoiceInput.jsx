import { Error } from "../../CreateQuizForm/CreateQuizForm.styled";
import { Input, Label } from "./ChoiceInput.styled";

export const ChoiceInput = ({
  answer,
  answerIndex,
  questionIndex,
  error,
  handleChoiceChange,
}) => {
  return (
    <Label>
      {`${answerIndex + 1}.`} Choice
      <Input
        value={answer}
        onChange={(event) =>
          handleChoiceChange(event, questionIndex, answerIndex)
        }
      />
      {error && <Error>{error}</Error>}
    </Label>
  );
};
