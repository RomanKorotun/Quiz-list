import { Formik, Form, FieldArray } from "formik";
import {
  AddButton,
  AnswersGroup,
  ChoiceWrapper,
  QuestionGroup,
  RemoveButton,
  SubmitButton,
  TitleAnswers,
  Wrapper,
} from "./CreateQuizForm.styled";
import { NameInput } from "../Inputs/NameInput/NameInput";
import { DescriptionInput } from "../Inputs/DescriptionInput/DescriptionInput";
import { QuestionInput } from "../Inputs/QuestionInput/QuestionInput";
import { TypeInput } from "../Inputs/TypeInput/TypeInput";
import { ChoiceInput } from "../Inputs/ChoiceInput/ChoiceInput";
import { CreateQuizSchema } from "../../validation/quizzes/createQuizValidation";
import { addQuiz, updateQuiz } from "../../api/quiz";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

export const CreateQuizForm = ({ quiz }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleTypeChange = (e, questionIndex, setFieldValue, setFieldError) => {
    const newType = e.target.value;
    const question = `questions[${questionIndex}].question`;
    const answers = `questions[${questionIndex}].answers`;
    const type = `questions[${questionIndex}].type`;
    setFieldError(question, undefined);
    setFieldError(answers, undefined);
    setFieldValue(type, newType);
    if (newType === "Single choice" || newType === "Multiple choices") {
      setFieldValue(answers, [""]);
    }
    if (newType === "Text") {
      setFieldValue(answers, []);
    }
  };

  const handleAnswerRemove = (
    question,
    questionIndex,
    answerIndex,
    setFieldValue
  ) => {
    const updatedAnswers = [...question.answers];
    updatedAnswers.splice(answerIndex, 1);
    const answers = `questions[${questionIndex}].answers`;
    const type = `questions[${questionIndex}].type`;
    setFieldValue(answers, updatedAnswers);
    if (updatedAnswers.length === 0) {
      setFieldValue(type, "Text");
    }
  };

  const handleChoiceAdd = (question, questionIndex, setFieldValue) => {
    const updatedAnswers = [...question.answers, ""];
    const answers = `questions[${questionIndex}].answers`;
    setFieldValue(answers, updatedAnswers);
  };

  const handleQuestionAdd = (arrayHelpers) => {
    arrayHelpers.push({ question: "", type: "Text", answers: [] });
  };

  const onSubmit = async (values) => {
    setLoading(true);
    if (!quiz) {
      try {
        await addQuiz(values);

        navigate("/create-quiz-result", {
          state: { success: true, message: "Quiz created successfully!" },
        });
      } catch {
        navigate("/create-quiz-result", {
          state: {
            error: true,
            message: "An error occurred while creating the quiz.",
          },
        });
      }
    } else {
      const response = await updateQuiz(quiz._id, values);
      if (response) {
        navigate("/quizzes");
      }
    }
  };

  const newQuiz = quiz;
  if (newQuiz) {
    newQuiz.questions.forEach((question) => {
      delete question._id;
    });
  }

  const initialValues = {
    name: newQuiz?.name || "",
    description: newQuiz?.description || "",
    questions: newQuiz?.questions || [
      {
        question: "",
        type: "Text",
        answers: [],
      },
    ],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateQuizSchema}
      validateOnChange={false}
      enableReinitialize={true}
      onSubmit={async (values) => onSubmit(values)}
    >
      {({ values, setFieldValue, errors, setFieldError }) => (
        <>
          {loading && <Loader />}
          <Form>
            <NameInput
              handleNameChange={(e) => {
                setFieldValue("name", e.target.value);
                setFieldError("name", undefined);
              }}
              name={values.name}
              error={errors.name}
            />

            <DescriptionInput
              handleDescChange={(e) => {
                setFieldValue("description", e.target.value);
                setFieldError("description", undefined);
              }}
              error={errors.description}
              description={values.description}
            />

            <FieldArray
              name="questions"
              render={(arrayHelpers) => (
                <>
                  {values.questions.map((questionItem, questionIndex) => (
                    <QuestionGroup key={questionIndex}>
                      <Wrapper>
                        <QuestionInput
                          questionIndex={questionIndex}
                          question={questionItem.question}
                          handleQuestionChange={(e) => {
                            const question = `questions[${questionIndex}].question`;
                            setFieldValue(question, e.target.value);
                            setFieldError(question, undefined);
                          }}
                          error={errors.questions?.[questionIndex]?.question}
                        />

                        <TypeInput
                          questionIndex={questionIndex}
                          type={questionItem.type}
                          handleTypeChange={(e) => {
                            handleTypeChange(
                              e,
                              questionIndex,
                              setFieldValue,
                              setFieldError
                            );
                          }}
                        />

                        <RemoveButton
                          type="button"
                          onClick={() => {
                            if (values.questions.length > 1) {
                              arrayHelpers.remove(questionIndex);
                            }
                          }}
                        >
                          Remove Question
                        </RemoveButton>
                      </Wrapper>

                      {(questionItem.type === "Single choice" ||
                        questionItem.type === "Multiple choices") && (
                        <AnswersGroup>
                          {questionItem.answers.length > 0 && (
                            <TitleAnswers> Answers</TitleAnswers>
                          )}
                          {questionItem.answers.map((answer, answerIndex) => (
                            <ChoiceWrapper
                              key={`${questionIndex}-${answerIndex}`}
                            >
                              <ChoiceInput
                                answer={answer}
                                answerIndex={answerIndex}
                                questionIndex={questionIndex}
                                handleChoiceChange={(e) => {
                                  const choice = `questions[${questionIndex}].answers[${answerIndex}]`;
                                  setFieldValue(choice, e.target.value);
                                  setFieldError(choice, undefined);
                                }}
                                error={
                                  errors?.questions?.[questionIndex]?.answers?.[
                                    answerIndex
                                  ]
                                }
                              />

                              <RemoveButton
                                type="button"
                                onClick={() =>
                                  handleAnswerRemove(
                                    questionItem,
                                    questionIndex,
                                    answerIndex,
                                    setFieldValue
                                  )
                                }
                              >
                                Remove Answer
                              </RemoveButton>
                            </ChoiceWrapper>
                          ))}

                          <AddButton
                            type="button"
                            onClick={() =>
                              handleChoiceAdd(
                                questionItem,
                                questionIndex,
                                setFieldValue
                              )
                            }
                          >
                            Add Choice
                          </AddButton>
                        </AnswersGroup>
                      )}
                    </QuestionGroup>
                  ))}

                  <AddButton
                    type="button"
                    onClick={() => handleQuestionAdd(arrayHelpers)}
                  >
                    Add Question
                  </AddButton>
                </>
              )}
            />

            <SubmitButton type="submit">
              {!quiz ? "Create Quiz" : "Update Quiz"}
            </SubmitButton>
          </Form>
        </>
      )}
    </Formik>
  );
};
