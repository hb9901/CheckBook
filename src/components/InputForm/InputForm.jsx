import styled from "styled-components";
import useInput from "../../hooks/useInput";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function InputForm({ addExpenditure }) {
  const [expenditure, handleExpenditure] = useInput({
    id: crypto.randomUUID(),
    date: "",
    item: "",
    amount: 0,
    description: 0,
  });

  const handleAdd = (e) => {
    e.preventDefault();
    addExpenditure(expenditure);
  };

  return (
    <form onSubmit={handleAdd}>
      <FormWrapper>
        <InputWrapper>
          <label>날짜</label>
          <input type="text" data-type="date" onChange={handleExpenditure} />
        </InputWrapper>
        <InputWrapper>
          <label>항목</label>
          <input type="text" data-type="item" onChange={handleExpenditure} />
        </InputWrapper>
        <InputWrapper>
          <label>금액</label>
          <input type="text" data-type="amount" onChange={handleExpenditure} />
        </InputWrapper>
        <InputWrapper>
          <label>내용</label>
          <input
            type="text"
            data-type="description"
            onChange={handleExpenditure}
          />
        </InputWrapper>
        <button>저장</button>
      </FormWrapper>
    </form>
  );
}

export default InputForm;
