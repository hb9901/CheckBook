import InputForm from "../../components/InputForm";

function HomePage({ addExpenditure }) {
  return (
    <div>
      <InputForm addExpenditure={addExpenditure} />
    </div>
  );
}

export default HomePage;
