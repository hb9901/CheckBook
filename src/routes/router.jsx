import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";

const Router = () => {
  const [expenditures, setExpenditures] = useState([]);
  console.log(expenditures)

  const addExpenditure = (expenditure) => {
    setExpenditures((prev) => [...prev, expenditure]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage addExpenditure={addExpenditure} />}
        />
        <Route path="/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
