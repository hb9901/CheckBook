import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import isInputValidate from "../../assets/js/isInputValidate";
import { deleteExpenditure, updateExpenditure } from "../../redux/slices/expenditures.slice";

function Expenditure() {
  const params = useParams();
  const navigate = useNavigate();
  const dateRef = useRef("");
  const itemRef = useRef("");
  const amountRef = useRef("");
  const descriptionRef = useRef("");
  const dispatch = useDispatch();
  const { expenditures, month } = useSelector((state) => state.expenditure);
  const monthExpenditures = expenditures.filter((expenditure) => {
    const expenditureMonth = expenditure.date[6] - 1;
    return expenditureMonth === month;
  });

  const expenditure = monthExpenditures.find(
    (expenditure) => expenditure.id === params.id
  );

  const handleClickModify = () => {
    const modifiedExpenditure = {
      ...expenditure,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };

    if (!isInputValidate(modifiedExpenditure)) return;
    dispatch(updateExpenditure(modifiedExpenditure));

    navigate("/");
  };

  const handleClickDelete = () => {
    dispatch(deleteExpenditure(params.id));
    navigate("/");
  };

  const handleClickGoBack = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Label>날짜</Label>
        <Input
          ref={dateRef}
          type="text"
          dateRef
          defaultValue={expenditure.date}
          data-type="date"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>항목</Label>
        <Input
          ref={itemRef}
          type="text"
          defaultValue={expenditure.item}
          data-type="item"
          placeholder="지출 항목"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>금액</Label>
        <Input
          ref={amountRef}
          type="number"
          defaultValue={expenditure.amount}
          data-type="amount"
          placeholder="지출 금액"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Input
          ref={descriptionRef}
          type="text"
          defaultValue={expenditure.description}
          data-type="description"
          placeholder="지출 내용"
        />
      </InputWrapper>
      <br />
      <ButtonWrapper>
        <ModifyButton onClick={handleClickModify}>수정</ModifyButton>
        <DeleletButton onClick={handleClickDelete}>삭제</DeleletButton>
        <GoBackButton onClick={handleClickGoBack}>뒤로 가기</GoBackButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Expenditure;

const Wrapper = styled.div`
  margin: 0px auto;

  padding: 20px;
  max-width: 800px;
  border-radius: 16px;

  background-color: rgb(255, 255, 255);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

const Label = styled.div`
  margin-bottom: 5px;

  font-size: 14px;
  text-align: left;

  color: rgb(51, 51, 51);
`;

const Input = styled.input`
  padding: 10px;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;

  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ModifyButton = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  background-color: rgb(0, 123, 255);
  color: white;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(0, 38, 255);
  }
`;

const DeleletButton = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  background-color: rgb(255, 77, 77);
  color: white;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(175, 36, 36);
  }
`;

const GoBackButton = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  background-color: rgb(108, 117, 125);
  color: white;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(55, 61, 66);
  }
`;
