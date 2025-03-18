import { Form, Formik } from "formik";
import { Description, Field, Label, Name } from "./takeQuizForm.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { convertTime } from "../../helpers/convertTime";

export const TakeQuizForm = ({ quiz }) => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const navigate = useNavigate();

  const newQuiz = quiz;

  const questions = newQuiz.questions;

  // console.log("questions", questions);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  const initialValues = {};

  questions.forEach((element) => {
    const questionKey = `${element.question}-${element._id}`;
    if (element.type === "Text") {
      initialValues[questionKey] = "";
    }
    if (element.type === "Single choice") {
      initialValues[questionKey] = "";
    }
    if (element.type === "Multiple choices") {
      initialValues[questionKey] = [];
    }
  });

  // console.log(initialValues);

  return (
    <>
      <Name>Name: {quiz.name}</Name>
      <Description>Description: {quiz.description}</Description>
      <Formik
        initialValues={initialValues}
        //   validationSchema={CreateQuizSchema}
        onSubmit={(values) => {
          console.log("values", values);
          clearInterval(intervalId);
          const time = convertTime(timer);
          localStorage.setItem("owner", JSON.stringify(quiz._id));
          localStorage.setItem("take-quiz-duration", JSON.stringify(time));
          localStorage.setItem("preview-take-quiz", JSON.stringify(values));
          navigate("/create-take-quiz");
        }}
      >
        <Form>
          {questions.map((quiz, index) => {
            return (
              <Label key={quiz._id}>
                {index + 1}. {quiz.question}
                {quiz.type === "Text" && (
                  <Field
                    name={`${quiz.question}-${quiz._id}`}
                    placeholder="Text"
                  />
                )}
                {quiz.type === "Single choice" && (
                  <div>
                    {quiz.answers.map((answer, answerIndex) => (
                      <div key={answerIndex}>
                        <Field
                          type="radio"
                          name={`${quiz.question}-${quiz._id}`}
                          value={answer}
                        />
                        {answer}
                      </div>
                    ))}
                  </div>
                )}
                {quiz.type === "Multiple choices" && (
                  <>
                    {quiz.answers.map((answer, answerIndex) => (
                      <div key={answerIndex}>
                        <Field
                          type="checkbox"
                          name={`${quiz.question}-${quiz._id}`}
                          value={answer}
                        />
                        {answer}
                      </div>
                    ))}
                  </>
                )}
              </Label>
            );
          })}
          <button type="submit">Preview</button>
        </Form>
      </Formik>
    </>
  );
};
