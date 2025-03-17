import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060";

export const addQuiz = async (data) => {
  return await axios.post("/api/quizzes", data);
};
