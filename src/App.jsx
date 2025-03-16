import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));
const QuizCatalog = lazy(() => import("./pages/QuizCatalog"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="catalog" element={<QuizCatalog />} />
        <Route path="create" element={<CreateQuiz />} />
      </Route>
    </Routes>
  );
};

export default App;
