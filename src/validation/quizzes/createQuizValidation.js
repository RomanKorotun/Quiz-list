import * as Yup from "yup";

export const CreateQuizSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  questions: Yup.array().of(
    Yup.object().shape({
      question: Yup.string().required("Question is required"),
      type: Yup.string()
        .required("Type is required")
        .oneOf(
          ["Text", "Single choice", "Multiple choices"],
          "Invalid question type"
        ),
      answers: Yup.array()
        .of(Yup.string().required("Answer cannot be empty"))
        .test(
          "has-answer",
          "At least one answer is required",
          function (answers) {
            const { parent } = this;
            if (
              (parent.type === "Single choice" ||
                parent.type === "Multiple choices") &&
              (!answers || answers.length === 0)
            ) {
              return false;
            }
            return true;
          }
        ),
    })
  ),
});
