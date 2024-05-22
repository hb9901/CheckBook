import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function InputForm({ addExpenditure }) {
  const [expenditure, setExpenditure] = useState({
    id: crypto.randomUUID(),
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const handleChangeInput = ({ target }) => {
    setExpenditure((prev) => {
      return { ...prev, [target.dataset.type]: target.value };
    });
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    addExpenditure(expenditure);
    setExpenditure({
      id: crypto.randomUUID(),
      date: "",
      item: "",
      amount: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleClickAdd}>
      <FormWrapper>
        <InputWrapper>
          <label>날짜</label>
          <input
            type="text"
            data-type="date"
            value={expenditure.date}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>항목</label>
          <input
            type="text"
            data-type="item"
            placeholder="지출 항목"
            value={expenditure.item}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>금액</label>
          <input
            type="text"
            data-type="amount"
            placeholder="지출 금액"
            value={expenditure.amount}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>내용</label>
          <input
            type="text"
            data-type="description"
            placeholder="지출 내용"
            value={expenditure.description}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <button>저장</button>
      </FormWrapper>
    </form>
  );
}

export default InputForm;
