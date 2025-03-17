import { FaEllipsisV } from "react-icons/fa";
import {
  CardWrapper,
  Description,
  Name,
  Option,
  OptionsButton,
  OptionsList,
  Questions,
} from "./QuizCard.styled";
import { useState } from "react";

export const QuizCard = ({ quiz, quizDelete }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  return (
    <CardWrapper>
      <Name>{quiz.name}</Name>
      <Description>{quiz.description}</Description>
      <Questions>Questions: {quiz.questionsCount}</Questions>
      <OptionsButton
        onClick={() => setIsOptionsVisible((prevState) => !prevState)}
      >
        <FaEllipsisV />
      </OptionsButton>
      {isOptionsVisible && (
        <OptionsList>
          <Option>Run</Option>
          <Option>Edit</Option>
          <Option
            onClick={() => {
              quizDelete(quiz._id);
              setIsOptionsVisible((prevState) => !prevState);
            }}
          >
            Delete
          </Option>
        </OptionsList>
      )}
    </CardWrapper>
  );
};
