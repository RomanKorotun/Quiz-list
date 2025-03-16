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

export const CreateQuizForm = () => {
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

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        questions: [{ question: "", type: "Text", answers: [] }],
      }}
      validationSchema={CreateQuizSchema}
      validateOnChange={false}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors, setFieldError }) => (
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
                {values.questions.map((question, questionIndex) => (
                  <QuestionGroup key={questionIndex}>
                    <Wrapper>
                      <QuestionInput
                        questionIndex={questionIndex}
                        question={question.name}
                        handleQuestionChange={(e) => {
                          const question = `questions[${questionIndex}].question`;
                          setFieldValue(question, e.target.value);
                          setFieldError(question, undefined);
                        }}
                        error={errors.questions?.[questionIndex]?.question}
                      />

                      <TypeInput
                        questionIndex={questionIndex}
                        type={question.type}
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

                    {(question.type === "Single choice" ||
                      question.type === "Multiple choices") && (
                      <AnswersGroup>
                        {question.answers.length > 0 && (
                          <TitleAnswers> Answers</TitleAnswers>
                        )}
                        {question.answers.map((answer, answerIndex) => (
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
                                  question,
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
                              question,
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

          <SubmitButton type="submit">Create Quiz</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
