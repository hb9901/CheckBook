import { useState } from "react";
import styled from "styled-components";
import { months } from "./costants";

const MonthList = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  list-style: none;

  cursor: pointer;
`;

const Month = styled.li`
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "grey")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;

function Months({ setCurrentMonth }) {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const handleClickMonth = ({ target }) => {
    setSelectedMonth(Number(target.id));
    setCurrentMonth(target.value);
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
            isSelected={index === selectedMonth}
          >
            {month}
          </Month>
        );
      })}
    </MonthList>
  );
}

export default Months;
