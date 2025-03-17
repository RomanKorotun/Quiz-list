import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const QuizzesPage = lazy(() => import("./pages/QuizzesPage"));
const CreateQuizPage = lazy(() => import("./pages/CreateQuizPage"));
const CreateQuizResultPage = lazy(() => import("./pages/CreateQuizResultPage"));
const UpdateQuizPage = lazy(() => import("./pages/UpdateQuizPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="create-quiz" element={<CreateQuizPage />} />
        <Route path="create-quiz-result" element={<CreateQuizResultPage />} />
        <Route path="update-quiz/:id" element={<UpdateQuizPage />} />
      </Route>
    </Routes>
  );
};

export default App;
