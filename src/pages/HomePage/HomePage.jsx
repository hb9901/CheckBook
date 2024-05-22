import styled from "styled-components";
import Expenditures from "../../components/Expenditures";
import InputForm from "../../components/InputForm";
import Months from "../../components/Months";

const MainWrapper = styled.main`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  
  gap: 20px;
  margin: 0px auto;
`;

function HomePage({ addExpenditure, setMonth, monthExpenditures }) {
  return (
    <MainWrapper>
      <InputForm addExpenditure={addExpenditure} />
      <Months setMonth={setMonth} />
      <Expenditures monthExpenditures={monthExpenditures} />
    </MainWrapper>
  );
}

export default HomePage;
