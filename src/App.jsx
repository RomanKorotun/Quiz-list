import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const QuizzesPage = lazy(() => import("./pages/QuizzesPage"));
const CreateQuizPage = lazy(() => import("./pages/CreateQuizPage"));
const CreateQuizResultPage = lazy(() => import("./pages/CreateQuizResultPage"));
const UpdateQuizPage = lazy(() => import("./pages/UpdateQuizPage"));
const CreateTakeQuizPageNew = lazy(() =>
  import("./pages/CreateTakeQuizPageNew")
);
const PreviewTakeQuizPage = lazy(() => import("./pages/PreviewTakeQuizPage"));
const CreateTakeQuizResultPage = lazy(() =>
  import("./pages/CreateTakeQuizResultPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/quizzes" />} />
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="create-quiz" element={<CreateQuizPage />} />
        <Route path="create-quiz-result" element={<CreateQuizResultPage />} />
        <Route path="update-quiz/:id" element={<UpdateQuizPage />} />
        <Route
          path="create-take-quiz/:id"
          element={<CreateTakeQuizPageNew />}
        />
        <Route path="preview-take-quiz" element={<PreviewTakeQuizPage />} />
        <Route
          path="create-take-quiz-result"
          element={<CreateTakeQuizResultPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
