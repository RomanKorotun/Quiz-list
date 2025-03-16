import { Label, Textarea } from "./DescriptionInput.styled";
import { Error } from "../../CreateQuizForm/CreateQuizForm.styled";

export const DescriptionInput = ({ handleDescChange, description, error }) => {
  return (
    <Label>
      Description
      <Textarea rows={4} onChange={handleDescChange} value={description} />
      {error && <Error>{error}</Error>}
    </Label>
  );
};
