import Expenditures from "../../components/Expenditures";
import InputForm from "../../components/InputForm";
import Months from "../../components/Months";

function HomePage({ addExpenditure, setMonth, monthExpenditures }) {
  return (
    <div>
      <InputForm addExpenditure={addExpenditure} />
      <Months setMonth={setMonth} />
      <Expenditures monthExpenditures={monthExpenditures} />
    </div>
  );
}

export default HomePage;
