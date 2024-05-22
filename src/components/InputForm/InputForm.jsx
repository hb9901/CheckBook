import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;

  background-color: rgb(0, 123, 255);
  color: white;

  border: none;
  border-radius: 4px;

  font-size: 14px;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(0, 38, 255);
  }
`;

function InputForm({ addExpenditure }) {
  const [expenditure, setExpenditure] = useState({
    id: crypto.randomUUID(),
    date: "2024-01-01",
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
      date: "2024-01-01",
      item: "",
      amount: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleClickAdd}>
      <FormWrapper>
        <InputWrapper>
          <Label for="date">날짜</Label>
          <Input
            type="text"
            id="date"
            data-type="date"
            placeholder="YYYY-MM-DD"
            value={expenditure.date}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="item">항목</Label>
          <Input
            type="text"
            id="item"
            data-type="item"
            placeholder="지출 항목"
            value={expenditure.item}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="amount">금액</Label>
          <Input
            type="number"
            id="amount"
            data-type="amount"
            placeholder="지출 금액"
            value={expenditure.amount}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="description">내용</Label>
          <Input
            type="text"
            id="description"
            data-type="description"
            placeholder="지출 내용"
            value={expenditure.description}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <Button>저장</Button>
      </FormWrapper>
    </form>
  );
}

export default InputForm;
