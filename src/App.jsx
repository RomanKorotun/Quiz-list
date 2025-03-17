import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const Quizzes = lazy(() => import("./pages/Quizzes"));
const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));
const CreateQuizResult = lazy(() => import("./pages/CreateQuizResult"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="create-quiz-result" element={<CreateQuizResult />} />
      </Route>
    </Routes>
  );
};

export default App;
