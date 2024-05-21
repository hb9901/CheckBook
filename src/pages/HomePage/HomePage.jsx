import InputForm from "../../components/InputForm";
import Months from "../../components/Months";

function HomePage({ addExpenditure, setCurrentMonth }) {
  return (
    <div>
      <InputForm addExpenditure={addExpenditure} />
      <Months setCurrentMonth={setCurrentMonth} />
    </div>
  );
}

export default HomePage;
