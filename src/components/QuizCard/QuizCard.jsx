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
import { useNavigate } from "react-router-dom";

export const QuizCard = ({ quiz, quizDelete }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const navigate = useNavigate();

  const handleClickUpdate = () => {
    navigate(`/update-quiz/${quiz._id}`);
  };

  const handleClickDelete = (id) => {
    quizDelete(id);
    setIsOptionsVisible((prevState) => !prevState);
  };

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
          <Option onClick={handleClickUpdate}>Edit</Option>
          <Option onClick={() => handleClickDelete(quiz._id)}>Delete</Option>
        </OptionsList>
      )}
    </CardWrapper>
  );
};
