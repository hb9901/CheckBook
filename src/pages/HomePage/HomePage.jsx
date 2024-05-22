import styled from "styled-components";
import Expenditures from "../../components/Expenditures";
import InputForm from "../../components/InputForm";
import Months from "../../components/Months";

const PageWrapper = styled.div``;

function HomePage({ addExpenditure, setMonth, monthExpenditures }) {
  return (
    <PageWrapper>
      <InputForm addExpenditure={addExpenditure} />
      <Months setMonth={setMonth} />
      <Expenditures monthExpenditures={monthExpenditures} />
    </PageWrapper>
  );
}

export default HomePage;
