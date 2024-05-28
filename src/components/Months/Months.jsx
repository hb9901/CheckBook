import { setMonth } from "@/redux/slices/expenditures.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { months } from "./costants";

function Months() {
  const [selectedMonth, setSelectedMonth] = useState(Number(localStorage.getItem('month')));
  const dispatch = useDispatch();
  
  const handleClickMonth = ({ target }) => {
    const month = Number(target.id);
    setSelectedMonth(month);
    dispatch(setMonth(month));
    localStorage.setItem("month", month);
  };

  return (
    <MonthList>
      {months.map((month, index) => {
        return (
          <Month
            key={month}
            id={index}
            onClick={handleClickMonth}
            value={month}
            $isSelected={index === selectedMonth}
          >
            {month}
          </Month>
        );
      })}
    </MonthList>
  );
}

export default Months;

const MonthList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0;
  padding: 0;

  list-style: none;
`;

const Month = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 104px;

  border-radius: 10px;
  border: none;

  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? "#2EC4B6" : "#F6F7FA")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};

  &:hover {
    background-color: #2ec4b6;
    color: white;
  }
`;
