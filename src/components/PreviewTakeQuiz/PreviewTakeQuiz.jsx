import { useNavigate } from "react-router-dom";
import { addTakeQuiz } from "../../api/quiz";
import { Button, Item, List, Time, Wrapper } from "./PreviewTakeQuiz.styled";

export const CreateTakeQuiz = ({
  previewTakeQuiz,
  takeQuizDuration,
  owner,
}) => {
  const navigate = useNavigate();
  const updatePreviewTakeQuiz = {};

  for (const key in previewTakeQuiz) {
    const newKey = key.split("-")[0];
    updatePreviewTakeQuiz[newKey] = previewTakeQuiz[key];
  }

  const entries = Object.entries(updatePreviewTakeQuiz);

  const handleSubmit = async () => {
    try {
      await addTakeQuiz({ questions: updatePreviewTakeQuiz, quizId: owner });

      navigate("/create-take-quiz-result", {
        state: { success: true, message: "Take quiz created successfully!" },
      });
    } catch {
      navigate("/create-take-quiz-result", {
        state: {
          error: true,
          message: "An error occurred while creating the take quiz.",
        },
      });
    }
  };

  return (
    <>
      <List>
        {entries.map(([key, value], index) => {
          return (
            <Item key={index}>
              <div>
                {index + 1}. {key}
              </div>
              {typeof value === "object" ? (
                <Wrapper>
                  <div>Answer:</div>
                  <div>{value.join(", ")}</div>
                </Wrapper>
              ) : (
                <div>Answer: {value}</div>
              )}
            </Item>
          );
        })}
      </List>
      <Time>Time Taken for the Quiz: {takeQuizDuration}</Time>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};
