import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/api";

export const addQuiz = async (quiz) => {
  return await axios.post("/quizzes", quiz);
};

export const getAllQuizzes = async () => {
  return await axios.get("/quizzes");
};

export const getByIdQuiz = async (id) => {
  return await axios.get(`/quizzes/${id}`);
};

export const deleteQuiz = async (id) => {
  return await axios.delete(`/quizzes/${id}`);
};

export const updateQuiz = async (id, quiz) => {
  return await axios.put(`/quizzes/${id}`, quiz);
};

export const addTakeQuiz = async (takeQuiz) => {
  return await axios.post("/take-quizzes", takeQuiz);
};
