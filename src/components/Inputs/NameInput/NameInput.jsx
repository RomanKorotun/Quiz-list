import { Input, Label } from "./NameInput.styled";
import { Error } from "../../CreateQuizForm/CreateQuizForm.styled";

export const NameInput = ({ handleNameChange, name, error }) => {
  return (
    <>
      <Label>
        Name
        <Input onChange={handleNameChange} value={name} />
        {error && <Error>{error}</Error>}
      </Label>
    </>
  );
};
