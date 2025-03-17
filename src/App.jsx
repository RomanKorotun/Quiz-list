import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));
const QuizCatalog = lazy(() => import("./pages/QuizCatalog"));
const CreateQuizResult = lazy(() => import("./pages/CreateQuizResult"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="quizzes" element={<QuizCatalog />} />
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="create-quiz-result" element={<CreateQuizResult />} />
      </Route>
    </Routes>
  );
};

export default App;
