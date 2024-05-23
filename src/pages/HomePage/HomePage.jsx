import styled from "styled-components";
import ExpenditureGraph from "../../components/ExpenditureGraph";
import Expenditures from "../../components/Expenditures";
import InputForm from "../../components/InputForm";
import Months from "../../components/Months";

function HomePage({ addExpenditure, setMonth, monthExpenditures, curMonth }) {
  return (
    <MainWrapper>
      <SectionWrapper>
        <InputForm addExpenditure={addExpenditure} />
      </SectionWrapper>
      <SectionWrapper>
        <Months setMonth={setMonth} curMonth={curMonth} />
      </SectionWrapper>
      <SectionWrapper>
        <ExpenditureGraph
          monthExpenditures={monthExpenditures}
          curMonth={curMonth}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Expenditures monthExpenditures={monthExpenditures} />
      </SectionWrapper>
    </MainWrapper>
  );
}

export default HomePage;

const MainWrapper = styled.main`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 0px auto;
`;

const SectionWrapper = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
`;
