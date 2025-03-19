import { Formik, Field } from "formik";
import {
  Button,
  ButtonsWrapper,
  CustomField,
  CustomForm,
  Error,
  Label,
} from "./TakeQuizQuestion.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const TakeQuizQuestion = ({
  questions,
  questionItem,
  isBackDisabled,
  isNextDisabled,
  isSubmitAction,
  currentIndex,
  handleClickBack,
  handleClickNext,
  time,
  quizId,
}) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const initialValues = questions.reduce((acc, question) => {
    const fieldName = `${question.question}-${question._id}`;
    acc[fieldName] = question.type === "Multiple choices" ? [] : "";
    return acc;
  }, {});

  const renderQuestionField = (questionItem, values) => {
    const fieldName = `${questionItem.question}-${questionItem._id}`;

    switch (questionItem.type) {
      case "Text":
        return (
          <CustomField
            name={fieldName}
            placeholder="Text"
            value={values[fieldName] || ""}
          />
        );

      case "Single choice":
        return questionItem.answers.map((answer, answerIndex) => (
          <div key={answerIndex}>
            <Field
              type="radio"
              name={fieldName}
              value={answer}
              checked={values[fieldName] === answer}
            />
            {answer}
          </div>
        ));

      case "Multiple choices":
        return questionItem.answers.map((answer, answerIndex) => (
          <div key={answerIndex}>
            <Field
              type="checkbox"
              name={fieldName}
              value={answer}
              checked={values[fieldName]?.includes(answer) || false}
            />
            {answer}
          </div>
        ));

      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const keys = Object.keys(values);
        const isFormValid = keys.some(
          (elem) =>
            values[elem] === "" ||
            (Array.isArray(values[elem]) && values[elem].length === 0)
        );

        if (isFormValid) {
          setError(true);
        } else {
          localStorage.setItem("quizId", JSON.stringify(quizId));
          localStorage.setItem("preview-take-quiz", JSON.stringify(values));
          localStorage.setItem("take-quiz-duration", JSON.stringify(time));
          navigate("/preview-take-quiz");
        }
      }}
    >
      {({ values }) => (
        <CustomForm>
          <Label>
            <h4>
              {currentIndex + 1} {questionItem.question}
            </h4>
            {renderQuestionField(questionItem, values)}
            {error && <Error>One or more fields are empty!</Error>}
          </Label>

          <ButtonsWrapper>
            <div>
              <Button
                type="button"
                onClick={() => {
                  handleClickBack();
                  setError(false);
                }}
                disabled={isBackDisabled}
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={handleClickNext}
                disabled={isNextDisabled}
              >
                Next
              </Button>
            </div>
            {isSubmitAction && <Button type="submit">Submit</Button>}
          </ButtonsWrapper>
        </CustomForm>
      )}
    </Formik>
  );
};
