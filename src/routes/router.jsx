import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExpenditureContext } from "../context/ExpenditureContext";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import { initExpenditures } from "./constants";

const Router = () => {
  const [expenditures, setExpenditures] = useState(initExpenditures);
  const [month, setMonth] = useState(Number(localStorage.getItem("month")));

  const monthExpenditures = expenditures.filter((expenditure) => {
    const date = new Date(expenditure.date);
    return date.getMonth() === month;
  });

  const addExpenditure = (expenditure) => {
    setExpenditures((prev) => [...prev, expenditure]);
  };

  const updateExpenditure = (modifiedExpenditure) => {
    setExpenditures((prev) => {
      return prev.map((expenditure) => {
        if (expenditure.id === modifiedExpenditure.id) {
          return modifiedExpenditure;
        } else {
          return expenditure;
        }
      });
    });
  };

  const deleteExpenditure = (id) => {
    setExpenditures((prev) => {
      return prev.filter((expenditure) => expenditure.id !== id);
    });
  };

  return (
    <ExpenditureContext.Provider
      value={{
        monthExpenditures,
        addExpenditure,
        updateExpenditure,
        deleteExpenditure,
        setMonth,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PostDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ExpenditureContext.Provider>
  );
};

export default Router;
