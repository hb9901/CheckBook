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

const SectionWrapper = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
`;

function HomePage({ addExpenditure, setMonth, monthExpenditures }) {
  return (
    <MainWrapper>
      <SectionWrapper>
        <InputForm addExpenditure={addExpenditure} />
      </SectionWrapper>
      <SectionWrapper>
        <Months setMonth={setMonth} />
      </SectionWrapper>
      <SectionWrapper>
        <Expenditures monthExpenditures={monthExpenditures} />
      </SectionWrapper>
    </MainWrapper>
  );
}

export default HomePage;
