import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060";

export const addQuiz = async (data) => {
  return await axios.post("/api/quizzes", data);
};

export const getAllQuizzes = async () => {
  return await axios.get("/api/quizzes");
};

export const deleteQuiz = async (id) => {
  return await axios.delete(`/api/quizzes/${id}`);
};
