import { FaEllipsisV } from "react-icons/fa";
import {
  CardWrapper,
  Description,
  Name,
  Option,
  OptionsButton,
  OptionsList,
  Questions,
  SubmissionsCount,
} from "./QuizCard.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizCard = ({ quiz, quizDelete }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const navigate = useNavigate();

  const handleClickRun = (id) => {
    navigate(`/create-take-quiz/${id}`);
  };

  const handleClickUpdate = (id) => {
    navigate(`/update-quiz/${id}`);
  };

  const handleClickDelete = (id) => {
    quizDelete(id);
    setIsOptionsVisible((prevState) => !prevState);
  };

  return (
    <CardWrapper>
      <div>
        <Name>{quiz.name}</Name>
        <Description>{quiz.description}</Description>
      </div>
      <div>
        <Questions>Questions: {quiz.questionsCount}</Questions>
        <SubmissionsCount>Number of submissions: {quiz.count}</SubmissionsCount>
      </div>
      <OptionsButton
        onClick={() => setIsOptionsVisible((prevState) => !prevState)}
      >
        <FaEllipsisV />
      </OptionsButton>
      {isOptionsVisible && (
        <OptionsList>
          <Option onClick={() => handleClickRun(quiz._id)}>Run</Option>
          <Option onClick={() => handleClickUpdate(quiz._id)}>Edit</Option>
          <Option onClick={() => handleClickDelete(quiz._id)}>Delete</Option>
        </OptionsList>
      )}
    </CardWrapper>
  );
};
