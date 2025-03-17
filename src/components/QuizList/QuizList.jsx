import { QuizCard } from "../QuizCard/QuizCard";
import { Item, List } from "./QuizList.styled";

export const QuizList = ({ quizList, quizDelete }) => {
  return (
    <List>
      {quizList.map((quiz, index) => {
        return (
          <Item key={index}>
            <QuizCard quiz={quiz} quizDelete={quizDelete} />
          </Item>
        );
      })}
    </List>
  );
};
