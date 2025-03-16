import { Label, Select } from "./TypeInput.styled";

export const TypeInput = ({ type, handleTypeChange }) => {
  return (
    <Label>
      Type
      <Select onChange={handleTypeChange} value={type}>
        <option>Text</option>
        <option>Single choice</option>
        <option>Multiple choices</option>
      </Select>
    </Label>
  );
};
