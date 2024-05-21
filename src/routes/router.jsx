import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import { initExpenditures } from "./constants";

const Router = () => {
  const [expenditures, setExpenditures] = useState(initExpenditures);
  const [month, setMonth] = useState(0);

  const monthExpenditures = expenditures.filter((expenditure) => {
    const date = new Date(expenditure.date);
    return date.getMonth() === month;
  });

  const addExpenditure = (expenditure) => {
    setExpenditures((prev) => [...prev, expenditure]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addExpenditure={addExpenditure}
              setMonth={setMonth}
              monthExpenditures={monthExpenditures}
            />
          }
        />
        <Route path="/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
